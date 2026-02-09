import logo from "@/assets/leetech-logo-new.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container flex items-center justify-center py-3">
        <img src={logo} alt="LeeTech" className="h-12 w-auto" />
      </div>
    </header>
  );
};

export default Header;
