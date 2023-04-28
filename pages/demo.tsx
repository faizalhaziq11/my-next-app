import React from "react";
import ResponsiveImage from "../src/components/ResponsiveImage";
// import mobile from "../public/images/winter_forest-320.jpg";
// import desktop from "../public/images/winter_forest-768.jpg";

export default function demo() {
  let newImg = [
    {
      res: "425px",
      imgsrc: "../images/porshe-mobile.jpeg",
    },
    {
      res: "768px",
      imgsrc: "../images/porshe-tablet.jpg",
    },
    {
      res: "1024px",
      imgsrc: "../images/porshe-desktop.jpeg",
    },
  ];

  return (
    <div>
      <h1>Demo</h1>
      <ResponsiveImage
        defaultImg={"../images/winter_forest-768.jpg"}
        defaultImgAlt={"Desktop Image"}
        imgList={newImg}
      />
    </div>
  );
}
