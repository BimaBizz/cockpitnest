import { AppSidebar } from "@/components/dashboard/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { fetchSettings } from "@/lib/hook"

export default async function Page({ params, children }) {

  const locale = (await params).locale;
  const settings = await fetchSettings(locale);
  const data = settings;

  return (
    <SidebarProvider>
      <AppSidebar data={data} iduser={(await params).id}/>
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
