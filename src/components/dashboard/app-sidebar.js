"use client"

import * as React from "react"
import Image from "next/image"
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  ChevronsUpDown,
} from "lucide-react"

import { decodeJwt } from "jose"
import Cookies from "js-cookie"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavProjects } from "@/components/dashboard/nav-projects"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const token = Cookies.get("session")

const data = {

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "API",
      url: "#",
      icon: ChevronsUpDown,
      items: [
        { title: "API Key", url: "#" },
        { title: "API Docs", url: "#" },
        { title: "API Explorer", url: "#" },
        { title: "API Limits", url: "#" },
      ],
    },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Feedback", url: "#", icon: Send },
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Travel", url: "#", icon: Map },
  ],
}

// Decode token using jose (if available)
if (token) {
  try {
    const decodedToken = decodeJwt(token)
    data.user = {
      name: decodedToken.name || "Unknown",
      email: decodedToken.email || "Unknown",
    }
  } catch (error) {
    console.error("Failed to decode token:", error)
  }
}

export function AppSidebar({ ...props }) {

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + props.data.images.small.path}
                    alt="Sidebar Image"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{props.data.seo.title}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} iduser={props.idUser}/>
      </SidebarFooter>
    </Sidebar>
  )
}
