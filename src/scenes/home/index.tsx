import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id = "home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-100">
              <span>
                The best way to
              <br />
                to learn
              <br />
                English
              </span>
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Get started
            </ActionButton>
            <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
            href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* IMAGE */}
        <div>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>

      {/* SPONSORS */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm font-bold text-gray-100">
          <span>
            Trusted by
          </span>
        </p>
        <div className="flex justify-center items-center gap-10">
          <img src={SponsorRedBull} alt="sponsor-red-bull" />
          <img src={SponsorForbes} alt="sponsor-forbes" />
          <img src={SponsorFortune} alt="sponsor-fortune" />
        </div>
      </div>
    </section>
    )
}

export default Home