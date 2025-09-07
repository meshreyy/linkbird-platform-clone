import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  
} from "@/components/ui/sidebar"

import Image from "next/image"
import Logo from './logo1.png'


const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: () => <span>🏠</span>,
    
  },
  {
    title: "Leads",
    url: "/leads",
    icon: () => <span>📋</span>,
  },
  {
    title: "Campaigns",
    url: "/campaigns",
    icon: () => <span>⚗️</span>,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: () => <span>✉️</span>,
    badge: "10+",
  },
  {
    title: "Linkedin Accounts",
    url: "/linkedin-accounts",
    icon: () => <span>🔗</span>,
  },
  {
    title: "Settings & Billing",
    url: "/settings-billing",
    icon: () => <span>⚙️</span>,
    section: "Settings",
  },
  {
    title: "Activity logs",
    url: "/activity-logs",
    icon: () => <span>📊</span>,
    section: "Admin Panel",
    titleClassName: "text-gray-900",
  },
  {
    title: "User logs",
    url: "/user-logs",
    icon: () => <span>📜</span>,
    section: "Admin Panel",
    titleClassName: "text-gray-900",
    
  },
]


export function AppSidebar() {
   return (
    <Sidebar>
      {/* Header with Logo */}
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image
            src= {Logo}// you can copy the file to public folder
            alt="LinkBird Logo"
            width={30}
            height={30}
          />
          <span className="font-bold text-lg text-gray-700">LinkBird</span>
        </div>
      </SidebarHeader>

      {/* Scrollable Sidebar Content */}
      <SidebarContent>
        {["Application", "Settings", "Admin Panel"].map((section) => {
          const sectionItems = items.filter((item) => item.section === section || (!item.section && section === "Application"))
          if (!sectionItems.length) return null
          return (
            <SidebarGroup key={section}>
              <SidebarGroupLabel>{section}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sectionItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center gap-2">
                          <item.icon />
                          <span className="text-gray-900">{item.title}</span>
                          {item.badge && (
                            <span className="ml-auto text-xs bg-blue-500 text-white rounded-full px-2 py-0.5">{item.badge}</span>
                          )}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>

      {/* Optional Footer */}
      <SidebarFooter>
        <span className="text-xs text-gray-500">© 2025 LinkBird</span>
      </SidebarFooter>
    </Sidebar>
  )
}