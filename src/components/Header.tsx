import logo from "@/assets/leetech-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-0 border-b">
      <div className="container flex items-center justify-center py-4">
        <img src={logo} alt="LeeTech" className="h-14 w-auto" />
      </div>
    </header>
  );
};

export default Header;
