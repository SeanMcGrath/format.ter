import { Link, useLocation } from "react-router-dom";

const SidebarLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <nav className="sticky top-0 p-4 space-y-2">
        <SidebarLink to="/json-formatter">JSON Formatter</SidebarLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
