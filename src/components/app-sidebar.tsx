import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Terminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Zayd Ouni",
    email: "Business account",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "/",
      icon: Terminal,
      isActive: true,
      items: [
        {
          title: "Cards",
          url: "/cards",
        },
      ],
    },
    {
      title: "Components",
      url: "/components",
      icon: Bot,
      items: [
        "accordion", "alert-dialog", "alert", "aspect-ratio", "avatar",
        "badge", "button", "calendar", "card", "checkbox", "collapsible",
        "combobox", "command", "context-menu", "dialog", "dropdown-menu",
        "hover-card", "input", "label", "menubar", "navigation-menu",
        "popover", "progress", "radio-group", "scroll-area", "select",
        "separator", "sheet", "slider", "switch", "table", "tabs",
        "textarea", "toast", "toggle", "tooltip"
      ].map(component => ({
        title: component.charAt(0).toUpperCase() + component.slice(1).replace(/-/g, ' '),
        url: `/components/${component}`,
      })),
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}