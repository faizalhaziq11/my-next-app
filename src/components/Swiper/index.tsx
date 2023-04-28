import React from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";

export default function MySwiper() {
  const swiper = useSwiper();
  const swiperSlider = useSwiperSlide();

  console.log("swiper", swiper);
  return <div></div>;
}
