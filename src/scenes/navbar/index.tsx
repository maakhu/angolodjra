import { useState } from "react";
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {  
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage, isDarkMode, toggleDarkMode}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? "bg-transparent"
    : "border-b border-slate-200 bg-white/85 backdrop-blur dark:border-amber-700/30 dark:bg-zinc-950/85";

  return <nav>
    <div
      className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4 transition duration-300`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
        <div className={`${flexBetween} w-full gap-8`}>
          <a
            href="#home"
            className="font-display bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-xl font-semibold tracking-tight text-transparent dark:from-amber-200 dark:to-amber-500"
          >
            angolodj ra
          </a>
          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8`}>
              <Link 
              page = "Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page = "Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page = "Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page = "Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            </div>
        <div className={`${flexBetween} gap-8`}>
          <button
            onClick={toggleDarkMode}
            className="premium-glow rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600 dark:border-amber-700 dark:bg-zinc-900 dark:text-amber-300 dark:hover:border-amber-500"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <a className="text-sm font-medium text-slate-600 transition duration-300 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-amber-300" href="#benefits">Method</a>
          <ActionButton setSelectedPage={setSelectedPage}>Book Intro Call</ActionButton>
        </div>
        </div> )
                :(
                  <button
                  className="rounded-full border border-slate-300 bg-white p-2 dark:border-amber-700 dark:bg-zinc-900"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  aria-label="Open mobile menu"
                  >
                    <Bars3Icon className="h-6 w-6 text-slate-700 dark:text-amber-300" />
                  </button>
                )}
          </div>
      </div>
    </div>
    {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[82%] max-w-[320px] border-l border-slate-200 bg-white drop-shadow-xl dark:border-amber-700/40 dark:bg-zinc-950">
        {/* CLOSE ICON */}
        <div className="flex justify-end p-6">
          <button
            onClick={toggleDarkMode}
            className="mr-3 rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition duration-300 hover:border-amber-400 hover:text-amber-600 dark:border-amber-700 dark:bg-zinc-900 dark:text-amber-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button onClick={() => setIsMenuToggled(!isMenuToggled)} aria-label="Close mobile menu">
            <XMarkIcon className="h-6 w-6 text-slate-500 dark:text-amber-300" />
          </button>
        </div>
        {/* MENU LINKS */}
          <div className="px-8 pt-3">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Navigation</p>
            <div className="flex flex-col gap-6 text-xl">
                <Link 
                page = "Home" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page = "Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page = "Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page = "Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              <ActionButton setSelectedPage={setSelectedPage}>Book Intro Call</ActionButton>
            </div>
              </div>
      </div>
    )}

  </nav>
}

export default Navbar