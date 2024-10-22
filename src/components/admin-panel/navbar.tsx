import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface NavbarProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
}

export function Navbar({ title, breadcrumbs }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="px-4 sm:px-6 lg:px-8 flex h-14 items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {breadcrumbs ? (
              <div className="flex items-center">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                    <Link to={crumb.href} className="text-sm font-medium hover:underline">
                      {crumb.label}
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="font-bold">{title}</h1>
            )}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}