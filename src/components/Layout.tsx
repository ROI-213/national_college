import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingApplyButton />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
