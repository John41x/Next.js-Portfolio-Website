import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/Index";
import PortfolioProjectDetails from "@/components/PortfolioProjectDetails";

const PortfolioWebsitePage = () => {
  return (
    <main className="relative bg-custom-cream dark:bg-custom-cream flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <PortfolioProjectDetails />
      </div>
    </main>
  );
};

export default PortfolioWebsitePage;
