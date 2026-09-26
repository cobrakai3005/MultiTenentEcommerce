"use client";
import { Poppins } from "next/font/google";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./navbar-sidebar";
import { MenuSquare } from "lucide-react";
const popins = Poppins({ subsets: ["latin"], weight: ["700"] });

interface NavbrItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}
const navbarItems: NavbrItemProps[] = [
  {
    href: "/",
    children: "Home",
    isActive: true,
  },
  {
    href: "/about",
    children: "About",
    isActive: false,
  },
  {
    href: "/features",
    children: "Features",
    isActive: false,
  },
  {
    href: "/pricing",
    children: "Pricing",
    isActive: false,
  },
  {
    href: "/contact",
    children: "Contact",
    isActive: false,
  },
];
const NavbrItem = ({ href, children, isActive }: NavbrItemProps) => {
  return (
    <Button
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white",
      )}
      variant={"outline"}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <nav className="h-20 flex border-b  justify-between  font-medium">
      <Link href={"/"} className={`pl-6  flex items-center`}>
        <span className={cn("text-4xl font-semibold", popins.className)}>
          logo
        </span>
      </Link>
      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className={"items-center gap-4 hidden lg:flex "}>
        {navbarItems.map((item) => (
          <NavbrItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbrItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/login">Login</Link>
        </Button>
        <Button className="border-l border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 transition-colors text-lg">
          <Link href="/signup">Start Selling</Link>
        </Button>
      </div>

      <div className="flex items-center lg:hidden">
        <Button
          className="size-12 border-transparent bg-white "
          onClick={() => setIsSidebarOpen(true)}
          variant={"ghost"}
        >
          <MenuSquare />{" "}
        </Button>
      </div>
    </nav>
  );
}
