import { useState, useEffect } from "react";
import { MobileLayout } from "@/components/mobile/MobileLayout";
import Onboarding from "./Onboarding";
import Dashboard from "./Dashboard";

export default function Index() {
  const [activeTab, setActiveTab] = useState("home");
  const [isOnboarded, setIsOnboarded] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("campusConnectUser");
    setIsOnboarded(!!user);
  }, []);

  if (!isOnboarded) {
    return <Onboarding onComplete={() => setIsOnboarded(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Dashboard />;
      case "calendar":
        return <div className="p-4"><h1 className="text-2xl font-bold">Schedule</h1></div>;
      case "chat":
        return <div className="p-4"><h1 className="text-2xl font-bold">Chat</h1></div>;
      case "materials":
        return <div className="p-4"><h1 className="text-2xl font-bold">Study Materials</h1></div>;
      case "profile":
        return <div className="p-4"><h1 className="text-2xl font-bold">Profile</h1></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MobileLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </MobileLayout>
  );
}
