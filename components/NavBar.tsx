"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${isMobile ? "bg-white/70 delay-[1500ms]" : "bg-dust-grey-500/10"} backdrop-blur-xs font-montserrat transition-transform duration-300 ${
        (isScrolled || isMobile)  ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Avant_Logo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Logo"
              className="h-8 w-auto scale-[2.50]"
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/#about">ABOUT</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/#contact">CONTACT</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button asChild variant="secondary">
                    <Link href="/#work-with-us" className="tracking-widest">
                      WORK WITH US
                    </Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/70 backdrop-blur-md border-t border-border/40 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <Link 
                href="/#about" 
                className="text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="/#contact" 
                className="text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <Button asChild className="tracking-widest" variant="secondary">
                <Link href="/#work-with-us" onClick={() => setIsOpen(false)}>
                  WORK WITH US
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}