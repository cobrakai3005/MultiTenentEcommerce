interface NavbarItems {
  href: string;
  children: React.ReactNode;
}
interface NavbarSidebarProps {
  items: NavbarItems[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Scroll } from "lucide-react";
import Link from "next/link";
export default function NavbarSidebar({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="p-4 border-b">
        <SheetHeader>
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item, index) => (
            <Link
              key={item.href}
              className="w-full text-left p-4 block hover:bg-black  hover:text-white text-base font-medium"
              href={item.href}
              onClick={()=> onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            <Link
              className="w-full text-left p-4 block hover:bg-black  hover:text-white text-base font-medium"
              href={"/login"}
               onClick={()=> onOpenChange(false)}
            >
              Login
            </Link>
            <Link
              className="w-full text-left p-4 block hover:bg-black  hover:text-white text-base font-medium"
              href={"/signup"}
               onClick={()=> onOpenChange(false)}
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
