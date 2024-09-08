'use client'

import Link from "next/link";
import Logo from "./ui/logo";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/config";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";
import { MyCommandDialog } from "./my-command-dialog";
import { motion, AnimatePresence } from "framer-motion";

interface NavItemProps {
  href: string;
  title: string;
  role?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title, role, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isCurrentPageHomepage = pathname === "/";

  return (
    <Link
      href={href}
      role={role}
      {...props}
      className={cn(
        "transition-colors duration-200",
        isActive
          ? (isCurrentPageHomepage ? "text-[hsl(0_0%_5%)] line-through cursor-not-allowed" : "text-foreground line-through cursor-not-allowed")
          : (isCurrentPageHomepage ? "text-singleCard-foreground hover:text-[hsl(0_0%_5%)]" : "text-muted-foreground hover:text-foreground")
      )}
    >
      {title}
    </Link>
  );
};

const mobileNavVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%" },
  exit: { opacity: 0, x: "100%" }
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isCurrentPageHomepage = pathname === "/";

  return (
    <header className={cn(
      "top-0 z-50 backdrop-blur-md",
      !isCurrentPageHomepage && "sticky",
      isCurrentPageHomepage && "bg-singleCard"
    )}>
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-16 lg:px-24 xl:px-32">
        <nav className={cn(
          "flex items-center justify-between h-16 sm:h-20",
          isCurrentPageHomepage && "border-b border-[hsl(217_19%_80%)]"
        )}>
          <Link href="/" className="flex-shrink-0">
            <div className={cn("flex items-center gap-2 font-semibold", isCurrentPageHomepage && "text-singleCard-foreground")}>
              <Logo />
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {NAVIGATION.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                title={item.title}
              />
            ))}
            <ContactForm>
              <NavItem href="#" title="Contact" role="button" />
            </ContactForm>
            <div className={cn("flex items-center space-x-2", isCurrentPageHomepage && "text-singleCard-foreground")}>
              <ModeToggle />
              <MyCommandDialog />
            </div>
          </div>

          <div className={cn("flex md:hidden", isCurrentPageHomepage && "text-singleCard-foreground")}>
            <ModeToggle />
            <MyCommandDialog />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className={cn(isCurrentPageHomepage && "bg-singleCard")}>
                <div className="flex justify-end p-4">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className={cn("ml-2", isCurrentPageHomepage && "text-singleCard-foreground")}>
                      <X className="h-8 w-8" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>
                <AnimatePresence>
                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={mobileNavVariants}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="flex flex-col space-y-6 mt-6 text-2xl"
                  >
                    {NAVIGATION.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <NavItem
                          href={item.href}
                          title={item.title}
                        />
                      </SheetClose>
                    ))}
                    <ContactForm>
                      <NavItem href="#" title="Contact" role="button"/>
                    </ContactForm>
                  </motion.nav>
                </AnimatePresence>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
