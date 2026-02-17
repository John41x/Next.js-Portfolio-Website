import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/Index";
import PasswordGate from "@/components/PasswordGate";

const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/12fpOyV30gc5XjbZMVx2Pna8SZokXcmoH/view?usp=sharing";

const ResumePage = () => {
  const password = process.env.NEXT_PUBLIC_CBRE_ANALYTICS_PASSWORD || "default_password_change_me";

  return (
    <PasswordGate
      password={password}
      title="Resume"
      submitButtonText="View Resume"
      redirectTo="/"
    >
      <main className="relative bg-custom-cream dark:bg-custom-cream min-h-screen flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-4xl w-full mx-auto py-24 flex flex-col items-center justify-center min-h-[60vh]">
          <FloatingNav navItems={navItems} />
          <a
            href={RESUME_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-4 bg-custom-darkOlive text-white rounded-xl font-semibold hover:bg-custom-darkOlive/90 transition-colors inline-flex items-center gap-2"
          >
            View Resume
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-custom-olive">Opens in a new tab</p>
        </div>
      </main>
    </PasswordGate>
  );
};

export default ResumePage;
