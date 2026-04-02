import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import Benefits from "@/scenes/benefits"
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Contact from "./scenes/contact";
import Footer from "./scenes/footer";
import Testimonials from "./scenes/testimonials";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      return false;
    }
    return true;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      htmlElement.style.colorScheme = "dark";
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      htmlElement.style.colorScheme = "light";
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0){
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="app bg-sand-50 transition-colors duration-300 dark:bg-zinc-950">
    <Navbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isDarkMode={isDarkMode}
              toggleDarkMode={() => setIsDarkMode((prevState) => !prevState)}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <Testimonials setSelectedPage={setSelectedPage} />
    <Contact setSelectedPage={setSelectedPage}/>
    <Footer />
  </div>;
}

export default App;
