import React from "react";
import {
  ContextDiv,
  TopsecDiv,
  ButtonDiv,
  TopsecImg,
  TagLine,
  TagH,
  Imgbox,
  ExpDiv,
  Line,
  P,
  SpanLi,
  Manager,
  ProFileImg,
} from "./BannerTopsec.style";
import banne3img from "../../assets/Images/banner-3-img.jpg";
import { Button } from "../Button/Button";

export const BannerTopSec = () => {
  return (
    <>
      <TopsecDiv>
        <TopsecImg>
          <img
            src={banne3img}
            alt="image2"
            style={{
              width: "114%",
              height: "100%",
              overflow: "hidden",
            }}
          />
        </TopsecImg>
        <ContextDiv>
          <TagLine>We Are Products Expert </TagLine>
          <TagH>We're Anxiety Perfect Solution For Company</TagH>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Risus
            commodo viverra, sed gravida. Risus commodo viverra maecen
            facilisis.
          </p>
          {/* <Button>Contact Now</Button> */}
          <ButtonDiv>
            <Button lable="Contact Now"></Button>
            <Button lable="Explore More" className="whiteBtn"></Button>
          </ButtonDiv>
        </ContextDiv>
      </TopsecDiv>
      <ExpDiv>
        <div style={{ display: "flex" }}>
          <ContextDiv>
            <TagLine>| About our Company </TagLine>
            <Line>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Line>
            <P style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Risus
              commodo viverra, sed gravida. Risus commodo viverra maecen
              facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit
              Risus commodo viverra, sed gravida. Risus commodo viverra maecen
              facilisis.
            </P>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <SpanLi>We do our best</SpanLi>
                <SpanLi>We do our best</SpanLi>
                <SpanLi>We do our best</SpanLi>
              </div>
              <div>
                <SpanLi>We do our best</SpanLi>
                <SpanLi>We do our best</SpanLi>
                <SpanLi>We do our best</SpanLi>
              </div>
            </div>
            <Manager>
              <ProFileImg src={banne3img} alt="profilrpic" />
              <div>
                <h4>Neeraj Kumar</h4>
                <P>Founder Manager</P>
              </div>
            </Manager>
          </ContextDiv>
          <Imgbox>
            <img
              src={banne3img}
              style={{ width: "38rem", height: "40rem", borderRadius: "10px" }}
            />
          </Imgbox>
        </div>
      </ExpDiv>
    </>
  );
};
