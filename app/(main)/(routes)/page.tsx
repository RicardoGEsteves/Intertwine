import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {children}
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};

export default MainLayout;
