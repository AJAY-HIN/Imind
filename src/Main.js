import { useEffect, useRef } from "react";
import { Button } from "./Component/Button/Button";
import { Navbar } from "./Component/Navbar/Navbar";
import { CommonButton } from "./Component/Button/Button.style";
import { BannerBg } from "./Component/Banner/BannerBg";
import { BannerTopSec } from "./Component/BannerTopsec/BannerTopSec";
import { Slider } from "./Component/Slider/Slider";
import { Carousal } from "./Component/Carousal/Carousal";

function Main() {
  const ref = useRef();

  //   useEffect(() => {
  //     ref.current.style.width = "13px";
  //   });

  return (
    <>
      {/* <Navbar />
      <BannerBg ref={ref} /> */}
      <Carousal />
    </>
  );
}

export default Main;
