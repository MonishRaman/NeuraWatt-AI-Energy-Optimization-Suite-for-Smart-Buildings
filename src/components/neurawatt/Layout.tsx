
import { ReactNode } from "react";
import { Navbar } from "@/components/neurawatt/Navbar";
import { Sidebar } from "@/components/neurawatt/Sidebar";
import { Footer } from "@/components/neurawatt/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
