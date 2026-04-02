import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className="inline-block rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-slate-900 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
    )
}

export default ActionButton