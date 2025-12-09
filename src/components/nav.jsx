"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tag } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
});

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/category/matiere-chaussure", label: "Chaussure" },
  { href: "/category/ameublement", label: "Ameublement" },
  { href: "/category/tissus-automobiles", label: "Automobiles" },
  { href: "/category/autres-textiles", label: "Textiles" },
  { href: "/contact", label: "Contact" },

];

export default function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on homepage (which has dark hero background)
  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-[#262856] shadow-sm"
          : "bg-transparent shadow-none"
      } ${poppins.className}`}
    >
      <div className="flex h-24 items-center justify-between gap-4 px-4 md:px-6">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 lg:hidden text-white hover:text-[#262856] hover:bg-white/90 transition-colors duration-300"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 lg:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        asChild
                        active={pathname === link.href}
                      >
                        <Link href={link.href} className="py-1.5 block">
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Logo nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Image
                src="/logo3.png"
                alt="Logo"
                width={200}
                height={60}
                style={{ width: "140px", height: "70px" }}
              />
            </Link>
          </div>
        </div>
        {/* Main nav */}
        <div className="flex items-center gap-10">
          {/* Navigation menu */}
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="gap-6">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild active={pathname === link.href}>
                    <Link
                      href={link.href}
                      className="py-1.5 font-medium text-slate-100 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side - Simple Professional Button */}
        <div className="flex items-center gap-10">
          <Button 
            asChild 
            className="relative bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-all duration-300"
          >
            <Link href="/liquidation" className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Liquidation Stock
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}