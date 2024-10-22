import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Component,
  CreditCard
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

const components = [
  'accordion', 'alert-dialog', 'alert', 'aspect-ratio', 'avatar',
  'badge', 'button', 'calendar', 'card', 'checkbox', 'collapsible',
  'combobox', 'command', 'context-menu', 'dialog', 'dropdown-menu',
  'hover-card', 'input', 'label', 'menubar', 'navigation-menu',
  'popover', 'progress', 'radio-group', 'scroll-area', 'select',
  'separator', 'sheet', 'slider', 'switch', 'table', 'tabs',
  'textarea', 'toast', 'toggle', 'tooltip'
];

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Playground",
          icon: LayoutGrid,
          submenus: [
            {
              href: "/cards",
              label: "Cards"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "Components",
      menus: [
        {
          href: "/components",
          label: "Components",
          icon: Component,
          submenus: components.map(component => ({
            href: `/components/${component}`,
            label: component.charAt(0).toUpperCase() + component.slice(1).replace(/-/g, ' ')
          }))
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          icon: Users
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings
        }
      ]
    }
  ];
}