import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link, useLocation } from 'react-router-dom'
import { useSidebar } from '@/hooks/use-sidebar'
import { useStore } from '@/hooks/use-store'
import { ChevronLeft, PanelsTopLeft, MenuIcon, ChevronDown, ChevronRight } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type SidebarProps = React.HTMLAttributes<HTMLDivElement>

const components = [
  'accordion', 'alert-dialog', 'alert', 'aspect-ratio', 'avatar',
  'badge', 'button', 'calendar', 'card', 'checkbox', 'collapsible',
  'combobox', 'command', 'context-menu', 'dialog', 'dropdown-menu',
  'hover-card', 'input', 'label', 'menubar', 'navigation-menu',
  'popover', 'progress', 'radio-group', 'scroll-area', 'select',
  'separator', 'sheet', 'slider', 'switch', 'table', 'tabs',
  'textarea', 'toast', 'toggle', 'tooltip'
];

const MenuItem = ({ item, isOpen }) => {
  const location = useLocation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const isActive = location.pathname === item.href || (item.subItems && item.subItems.some(subItem => location.pathname === subItem.href));

  if (item.subItems) {
    return (
      <div className="w-full">
        {isOpen ? (
          <Collapsible open={isSubmenuOpen} onOpenChange={setIsSubmenuOpen}>
            <CollapsibleTrigger asChild>
              <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-between">
                <span className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${isSubmenuOpen ? "rotate-90" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-1">
              {item.subItems.map((subItem, index) => (
                <Button
                  key={index}
                  variant={location.pathname === subItem.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={subItem.href}>{subItem.label}</Link>
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                      <item.icon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent side="right" className="w-48">
              {item.subItems.map((subItem, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link to={subItem.href}>{subItem.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link to={item.href}>
              <item.icon className={cn("h-4 w-4", isOpen && "mr-2")} />
              {isOpen && <span>{item.label}</span>}
            </Link>
          </Button>
        </TooltipTrigger>
        {!isOpen && <TooltipContent side="right">{item.label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  )
}

export function Sidebar({ className }: SidebarProps) {
  const sidebar = useStore(useSidebar, (x) => x);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsHovered(true);
    }, 200);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
  }, []);

  useEffect(() => {
    if (!sidebar) return;
    const { setIsHover } = sidebar;
    setIsHover(isHovered);

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isHovered, sidebar]);

  if (!sidebar) return null;
  const { isOpen, toggleOpen, getOpenState, settings } = sidebar;

  const menuItems = [
    { href: "/", label: "Dashboard", icon: PanelsTopLeft },
    {
      label: "Components",
      icon: ChevronRight,
      subItems: components.map(component => ({
        href: `/${component}`,
        label: component.charAt(0).toUpperCase() + component.slice(1)
      }))
    },
    // Add more menu items here
  ];

  const SidebarContent = () => (
    <>
      <Button
        className={cn(
          "transition-transform ease-in-out duration-300 mb-4",
          !getOpenState() ? "translate-x-1" : "translate-x-0"
        )}
        variant="link"
        asChild
      >
        <Link to="/" className="flex items-center gap-2">
          <PanelsTopLeft className="w-6 h-6" />
          {getOpenState() && <h1 className="font-bold text-lg">Brand</h1>}
        </Link>
      </Button>
      <ScrollArea className="flex-1">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} isOpen={getOpenState()} />
          ))}
        </div>
      </ScrollArea>
    </>
  )

  return (
    <>
      <Sheet>
        <SheetTrigger className="lg:hidden fixed top-4 left-4" asChild>
          <Button className="h-8" variant="outline" size="icon">
            <MenuIcon size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[270px] sm:w-[300px] p-0" side="left">
          <div className="h-full flex flex-col p-4">
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>

      <aside
        className={cn(
          "fixed top-0 left-0 z-20 h-screen hidden lg:flex flex-col transition-all duration-300 ease-in-out",
          getOpenState() ? "w-64" : "w-[70px]",
          settings.disabled && "hidden"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-4 -right-4 z-30">
          <Button
            onClick={toggleOpen}
            size="sm"
            variant="secondary"
            className="rounded-full p-0 w-8 h-8"
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", !isOpen && "rotate-180")} />
          </Button>
        </div>
        <div className="flex-1 flex flex-col p-4 bg-background border-r">
          <SidebarContent />
        </div>
      </aside>
    </>
  )
}

export default Sidebar;