import logo from "@/assets/leetech-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-0 border-b">
      <div className="container flex items-center justify-between py-3">
        <span className="text-foreground/50 text-xs select-none">בס״ד</span>
        <div className="flex items-center gap-3">
          <img src={logo} alt="LeeTech" className="h-10 w-auto" />
        </div>
        <div className="w-8" />
      </div>
    </header>
  );
};

export default Header;
