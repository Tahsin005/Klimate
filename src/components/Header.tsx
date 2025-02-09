import { useTheme } from "@/context/ThemeProvider";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg:background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img src={isDark ? "/public//logo.png" : "/public//logo2.png"} alt="Klimate Logo" className="h-14" />
        </Link>
        <div>
            {/* search */}
            {/* theme toggle */}
            <ThemeToggle></ThemeToggle>
        </div>
      </div>

    </header>
  );
};

export default Header;
