"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { useState, createContext, useContext } from "react"
import { cn } from "@/lib/utils"



// Context for sidebar state
type SidebarContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({
  children,
  defaultOpen = true,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div className="flex">
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider")
  return ctx
}

// Root Sidebar
export function Sidebar({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = useSidebar()
  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-white transition-all duration-300 h-screen", // added h-screen
        open ? "w-64" : "w-16",
        className
      )}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 right-[-12px] z-20 bg-white border rounded-full p-1 shadow"
        aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      >
        {open ? "←" : "→"}
      </button>

      {/* Sidebar content */}
      {children}
    </aside>
  )
}



export function SidebarHeader({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-4 py-2 border-b", className)}>{children}</div>
}

export function SidebarFooter({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-4 py-2 border-t mt-auto", className)}>{children}</div>
}

export function SidebarContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 overflow-y-auto px-2 py-4", className)}>{children}</div>
}

export function SidebarGroup({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function SidebarGroupLabel({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-3 text-xs font-semibold text-gray-500 mb-2", className)}>
      {children}
    </div>
  )
}

export function SidebarGroupContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1", className)}>{children}</div>
}

export function SidebarMenu({ children, className }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("space-y-1", className)}>{children}</ul>
}

export function SidebarMenuItem({ children, className }: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("", className)}>{children}</li>
}

export function SidebarMenuButton({
  className,
  children,
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

// Trigger button for toggling sidebar

