import { ThemeToggle } from "@/components/theme-toggle";

import { CodeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold sm:text-base"
        >
          <CodeIcon className="w-6 h-6" />
          <span>format.ter</span>
        </Link>
        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default navbar;
