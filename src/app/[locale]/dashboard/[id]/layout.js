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

  const idUser = (await params).id;

  return (
    <SidebarProvider>
      <AppSidebar data={data} idUser={idUser}/>
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
