import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Random quran verse generator",
  description: "Generate quran verses and gain guidance with it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body

      >
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
          <Toaster style={{backgroundColor:"black",color:"white"}} />
        </SidebarProvider>
      </body>
    </html>
  );
}
