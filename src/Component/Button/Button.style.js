import styled from "styled-components";

export const CommonButton = styled.div`
  padding: 1.2rem 1.3rem;
  border-radius: 5px;
  position: relative;
  display: flex;
  border: 0;
  overflow: hidden !important;
  color: #ffffff;
  background-color: #3f9f42;
  font-size: 15px;
  font-weight: 550;
  font-family: BarlowCondensed, sans-serif;
  word-spacing: 2px;
  align-items: center;
  align-content: center;
  justify-content: center;
  &.default-button::before {
    content: "";
    width: 0%;
    height: 2px;
    overflow: hidden;
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
    background-color: #fff;
    position: absolute;
    right: unset;
    left: 0;
    top: 0;
    z-index: 0;
  }
  &.default-button::after {
    content: "";
    width: 2px;
    height: 0%;
    overflow: hidden;
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    bottom: unset;
    z-index: 0;
  }
  &.default-button i {
    font-size: 12px;
    margin-left: 5px;
  }
  &.default-button:hover {
    color: #ffffff;
  }
  &.default-button:hover::before {
    left: unset;
    right: 0;
    width: 100%;
  }
  &.default-button:hover::after {
    height: 100%;
    bottom: 0;
    top: unset;
  }

  &.whiteBtn {
    margin-left: 1rem;
    ${
      "" /* background: #ffffff;
    color: #3f9f42; */
    }
  }
`;

// :root {
//   --fontFamily: "Barlow Condensed", sans-serif;
//   --fontFamily2: "Mulish", sans-serif;
//   --mainColor: #3f9f42;
//   --whiteColor: #ffffff;
//   --fixWhiteColor: #ffffff;
//   --blackColor: #071327;
//   --fix-blackColor: #071327;
//   --paragraphColor: #666666;
//   --f8f8f8: #f8f8f8;
//   --card-title-fontSize: 24px;
//   --fontSize: 16px;
//   --transition: 0.5s;
//   --boxShadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
// }
