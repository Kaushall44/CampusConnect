import { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";
import { cn } from "@/lib/utils";

interface MobileLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  hideBottomNav?: boolean;
}

export function MobileLayout({ children, activeTab, onTabChange, hideBottomNav }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className={cn(
        "flex-1 overflow-auto",
        !hideBottomNav && "pb-20"
      )}>
        {children}
      </main>
      {!hideBottomNav && (
        <BottomNavigation activeTab={activeTab} onTabChange={onTabChange} />
      )}
    </div>
  );
}