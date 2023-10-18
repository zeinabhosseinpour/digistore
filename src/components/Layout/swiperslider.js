// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import imgs from "../../assets/images/icons8-bag-100.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swiperslider = () => {
  return (
    <div>
      <div className="swiper-container">
        <Swiper
          className="swiper-slide"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
          mousewheel={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "progressbar",
            slidesPerView: "auto",
            initialSlide: 1,
            resistanceRatio: 0,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>
            <img src={imgs} alt="aks" />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Swiperslider;

// import React from "react";
// import "./swiperslider.css";
// import 'swiper/css';
// import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

// const Swiperslider = () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide className="">
//         slide 1{" "}
//         {({ isActive }) => (
//           <div>Current slide is {isActive ? "active" : "not active"}</div>
//         )}
//       </SwiperSlide>
//       <SwiperSlide>slide 2</SwiperSlide>
//       <SwiperSlide>slide 3</SwiperSlide>
//       <SwiperSlide>slide 4</SwiperSlide>
//     </Swiper>
//   );
// };

// export default Swiperslider;
