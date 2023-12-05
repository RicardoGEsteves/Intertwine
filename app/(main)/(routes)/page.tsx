import { UserButton } from "@clerk/nextjs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {children}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default MainLayout;
