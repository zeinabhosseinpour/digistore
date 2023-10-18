//import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/colorsPallet.css";

import Homepage from "./pages/homepage/Homepage";
import Products from "./components/Products/Products";
import cart from "./components/Cart/cart.js";
import Swiperslider from "./components/Layout/swiperslider";
import Megamenudiji from "./components/Layout/megamenudiji";
import NoPage from "./pages/NoPage";
import ProductDetail from "./components/Products/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="/product-category/:productid/:slug"
          element={<Products />}
        />

        <Route path="/Cart" element={<cart />} />
        <Route
          path="/product-detail/:productid/:slug"
          element={<ProductDetail />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
  // return <Swiperslider />;

  // return <Megamenudiji />;
}

export default App;

// import React from "react";
// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "./App.css";

// SwiperCore.use([EffectCoverflow, Pagination]);
// // if you want to use array
// const slide_img = [
//   "https://swiperjs.com/demos/images/nature-1.jpg",
//   "https://swiperjs.com/demos/images/nature-2.jpg",
//   "https://swiperjs.com/demos/images/nature-3.jpg",
//   "https://swiperjs.com/demos/images/nature-4.jpg",
//   "https://swiperjs.com/demos/images/nature-5.jpg",
//   "https://swiperjs.com/demos/images/nature-6.jpg",
//   "https://swiperjs.com/demos/images/nature-7.jpg",
//   "https://swiperjs.com/demos/images/nature-8.jpg",
//   "https://swiperjs.com/demos/images/nature-9.jpg",
// ];

// const App = () => {
//   return (
//     <div>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: false,
//         }}
//       >
//         // Using array
//         {slide_img.map((img, i) => {
//           return (
//             <SwiperSlide key={i}>
//               <img src={img} alt="" />
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default App;
