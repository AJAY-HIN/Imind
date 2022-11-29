import React from "react";
import {
  Banner,
  BannerConatiner,
  TopCover,
  Content,
  Imgdiv,
  Image,
} from "./BannerBg.style";
import bannerbg3 from "../../assets/Images/bannerbg3.jpg";
import { BannerTopSec } from "../BannerTopsec/BannerTopSec";

export const BannerBg = () => {
  return (
    <>
      <BannerConatiner>
        <Banner className="banner">
          <Image src={bannerbg3} alt="bg3" style={{ overflowX: "hidden" }} />
        </Banner>
        <TopCover>
          <Imgdiv>
            <Content></Content>
          </Imgdiv>
        </TopCover>
        <BannerTopSec />
      </BannerConatiner>
    </>
  );
};
