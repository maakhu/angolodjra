/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"

type Props = {  isTopOfPage: boolean}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return <nav>
    <div
      className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
        <div className={`${flexBetween} w-full gap-16`}>
          <img src={Logo} alt="logo" />
          {/* RIGHT SIDE */}
          <div className={`${flexBetween} w-full`}>
        <div className={`${flexBetween} gap-8 text-sm`}>
          <p>Home</p>
          <p>Benefits</p>
          <p>Classes</p>
          <p>Contact</p>
        </div>
        <div>
          <p>Sign In</p>
          <button>Become a member</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar