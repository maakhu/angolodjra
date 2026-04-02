import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`text-sm font-medium capitalize transition duration-300 hover:text-amber-500 dark:hover:text-amber-300 ${
        selectedPage === lowerCasePage
          ? "text-slate-900 dark:text-amber-300"
          : "text-slate-600 dark:text-zinc-300"
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
    )
}

export default Link