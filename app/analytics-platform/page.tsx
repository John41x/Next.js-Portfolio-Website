import AnalyticsPlatformProjectDetails from "@/components/AnalyticsPlatformProjectDetails";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/Index";
import PasswordGate from "@/components/PasswordGate";

const AnalyticsPlatformPage = () => {
  // Get password from environment variable, or use a default for development
  // IMPORTANT: Set this in your .env.local file:
  // CBRE_ANALYTICS_PASSWORD=your_secure_password_here
  const password = process.env.NEXT_PUBLIC_CBRE_ANALYTICS_PASSWORD || "default_password_change_me";

  return (
    <PasswordGate password={password}>
      <main className="relative bg-custom-cream dark:bg-custom-cream flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <AnalyticsPlatformProjectDetails />
        </div>
      </main>
    </PasswordGate>
  );
};

export default AnalyticsPlatformPage;
