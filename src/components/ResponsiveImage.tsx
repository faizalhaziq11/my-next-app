import React from "react";

interface imgListProps {
  res: string;
  imgsrc: string;
}

interface ResponsiveImageProps {
  defaultImg: string;
  defaultImgAlt: string;
  imgList: imgListProps[];
}

export default function ResponsiveImage({
  defaultImg,
  defaultImgAlt,
  imgList,
}: ResponsiveImageProps) {
  return (
    <picture>
      {imgList.map((element, index) => (
        <source
          key={index}
          media={`(max-width:${element.res})`}
          srcSet={element.imgsrc}
        />
      ))}
      <img src={defaultImg} alt={defaultImgAlt} />
    </picture>
  );
}
