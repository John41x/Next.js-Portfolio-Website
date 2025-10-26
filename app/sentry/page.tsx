import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/Index";
import SentryProjectDetails from '@/components/SentryProjectDetails';

export default function SentryPage() {
  return (
    <main className="relative bg-custom-cream dark:bg-custom-cream flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <SentryProjectDetails />
      </div>
    </main>
  );
}
