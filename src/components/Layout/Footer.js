import React from "react";
import "./Footer.css";
import logo from "../../assets/images/gradient.png";
import ins from "../../assets/icons/1677936879.png";
import tel from "../../assets/icons/1677936892.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--5--cols">
        <div className="logo-about">
          <a className="footer-logo" href="../../pages/homepage/Homepage.js">
            <img src={logo} alt="logo" className="logo" />
          </a>

          <div className="about">
            <h2 className="footer-heading">درباره ما</h2>
            <p className="about-p">
              رز چرم با تکیه بر شعار "لبخند ماندگار" رضایت مشتری را در اولویت
              دستور کار خود قرار داده است و سعی کرده است با ارائه محصولات با
              کیفیت و خدمات مناسب لبخند مشتری را پس از خرید ماندگار کند.
            </p>
          </div>
        </div>

        <nav className="nav-col">
          <h3 className="footer-heading">راهنمای خرید</h3>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                راهنمای خرید از رز چرم
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                راهنمای خرید اقساطی
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                راهنمای خرید عمده
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                نحوه ثبت سفارش
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                روش های پرداخت سفارش
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                شیوه های ارسال سفارش
              </a>
            </li>

            <li>
              <a className="footer-link" href="#"></a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <h3 className="footer-heading">خدمات مشتریان</h3>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                سوالات متداول
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                گارانتی محصول
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                شیوه تعویض و عودت محصول
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                پیگیری ارسال سفارش ها
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                نگهداری از محصولات چرمی
              </a>
            </li>
          </ul>
        </nav>
        <div className="logo-col">
          <div className="address-col">
            <h4 className="footer-heading">آدرس و تلفن رز چرم</h4>
            <div className="contacts">
              <span>تهران خیابان تهران گالری رز چرم</span>
            </div>
            <ul className="footer-nav">
              <li className="contacts-link">
                <span>تلفن :</span>
                <span>
                  <a className="footer-link" href="#">
                    0210001234
                  </a>
                </span>
              </li>

              <li className="contacts-link">
                <span>تلفن :</span>
                <span>
                  <a className="footer-link" href="#">
                    090000000
                  </a>
                </span>
              </li>
              <li className="contacts-link">
                <span> ایمیل :</span>
                <span>
                  <a className="footer-link" href="#">
                    info@rosecharm.ir
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <h4 className="footer-heading social">
            ما را در شبکه های اجتماعی دنبال کنید
          </h4>
          <div>
            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <img src={ins} alt="logo" className="social-icon" />
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                      d="M8.77638 2.139C10.8663 2.139 11.1137 2.14816 11.9356 2.18483C12.6995 2.21844 13.1119 2.34676 13.3869 2.4537C13.7505 2.59425 14.0133 2.76535 14.2852 3.03728C14.5602 3.31226 14.7282 3.57197 14.8688 3.93555C14.9757 4.21054 15.1041 4.62607 15.1377 5.38686C15.1743 6.21181 15.1835 6.45929 15.1835 8.54611C15.1835 10.636 15.1743 10.8835 15.1377 11.7054C15.1041 12.4692 14.9757 12.8817 14.8688 13.1567C14.7282 13.5203 14.5571 13.783 14.2852 14.0549C14.0102 14.3299 13.7505 14.498 13.3869 14.6385C13.1119 14.7455 12.6964 14.8738 11.9356 14.9074C11.1107 14.9441 10.8632 14.9532 8.77638 14.9532C6.6865 14.9532 6.43902 14.9441 5.61712 14.9074C4.85328 14.8738 4.4408 14.7455 4.16582 14.6385C3.80223 14.498 3.53947 14.3269 3.26754 14.0549C2.99255 13.78 2.82451 13.5203 2.68396 13.1567C2.57702 12.8817 2.4487 12.4662 2.41509 11.7054C2.37842 10.8804 2.36926 10.6329 2.36926 8.54611C2.36926 6.45624 2.37842 6.20875 2.41509 5.38686C2.4487 4.62301 2.57702 4.21054 2.68396 3.93555C2.82451 3.57197 2.99561 3.3092 3.26754 3.03728C3.54252 2.76229 3.80223 2.59425 4.16582 2.4537C4.4408 2.34676 4.85633 2.21844 5.61712 2.18483C6.43902 2.14816 6.6865 2.139 8.77638 2.139ZM8.77638 0.730469C6.65289 0.730469 6.38707 0.739635 5.55296 0.776299C4.7219 0.812964 4.15054 0.9474 3.65557 1.13989C3.13921 1.34154 2.70229 1.60736 2.26843 2.04428C1.83151 2.47814 1.56569 2.91506 1.36404 3.42836C1.17155 3.92639 1.03712 4.49469 1.00045 5.32575C0.963786 6.16292 0.95462 6.42874 0.95462 8.55222C0.95462 10.6757 0.963786 10.9415 1.00045 11.7756C1.03712 12.6067 1.17155 13.1781 1.36404 13.673C1.56569 14.1894 1.83151 14.6263 2.26843 15.0602C2.70229 15.494 3.13921 15.7629 3.65252 15.9615C4.15054 16.154 4.71884 16.2884 5.5499 16.3251C6.38402 16.3618 6.64984 16.3709 8.77332 16.3709C10.8968 16.3709 11.1626 16.3618 11.9967 16.3251C12.8278 16.2884 13.3992 16.154 13.8941 15.9615C14.4074 15.7629 14.8443 15.494 15.2782 15.0602C15.7121 14.6263 15.9809 14.1894 16.1795 13.6761C16.372 13.1781 16.5065 12.6098 16.5431 11.7787C16.5798 10.9446 16.589 10.6788 16.589 8.55528C16.589 6.43179 16.5798 6.16598 16.5431 5.33186C16.5065 4.5008 16.372 3.92944 16.1795 3.43447C15.9871 2.91506 15.7212 2.47814 15.2843 2.04428C14.8505 1.61042 14.4135 1.34154 13.9002 1.14294C13.4022 0.950456 12.8339 0.816019 12.0028 0.779355C11.1657 0.739635 10.8999 0.730469 8.77638 0.730469Z"
                    ></path>
                    <path
                      class="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                      d="M8.77637 4.53441C6.55817 4.53441 4.75856 6.33402 4.75856 8.55222C4.75856 10.7704 6.55817 12.57 8.77637 12.57C10.9946 12.57 12.7942 10.7704 12.7942 8.55222C12.7942 6.33402 10.9946 4.53441 8.77637 4.53441ZM8.77637 11.1585C7.33729 11.1585 6.17014 9.9913 6.17014 8.55222C6.17014 7.11314 7.33729 5.94599 8.77637 5.94599C10.2155 5.94599 11.3826 7.11314 11.3826 8.55222C11.3826 9.9913 10.2155 11.1585 8.77637 11.1585Z"
                    ></path>
                    <path
                      class="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                      d="M13.8911 4.37544C13.8911 4.89486 13.4694 5.31345 12.9531 5.31345C12.4337 5.31345 12.0151 4.8918 12.0151 4.37544C12.0151 3.85603 12.4367 3.43744 12.9531 3.43744C13.4694 3.43744 13.8911 3.85909 13.8911 4.37544Z"
                    ></path>
                  </svg>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                      d="M8.77638 2.139C10.8663 2.139 11.1137 2.14816 11.9356 2.18483C12.6995 2.21844 13.1119 2.34676 13.3869 2.4537C13.7505 2.59425 14.0133 2.76535 14.2852 3.03728C14.5602 3.31226 14.7282 3.57197 14.8688 3.93555C14.9757 4.21054 15.1041 4.62607 15.1377 5.38686C15.1743 6.21181 15.1835 6.45929 15.1835 8.54611C15.1835 10.636 15.1743 10.8835 15.1377 11.7054C15.1041 12.4692 14.9757 12.8817 14.8688 13.1567C14.7282 13.5203 14.5571 13.783 14.2852 14.0549C14.0102 14.3299 13.7505 14.498 13.3869 14.6385C13.1119 14.7455 12.6964 14.8738 11.9356 14.9074C11.1107 14.9441 10.8632 14.9532 8.77638 14.9532C6.6865 14.9532 6.43902 14.9441 5.61712 14.9074C4.85328 14.8738 4.4408 14.7455 4.16582 14.6385C3.80223 14.498 3.53947 14.3269 3.26754 14.0549C2.99255 13.78 2.82451 13.5203 2.68396 13.1567C2.57702 12.8817 2.4487 12.4662 2.41509 11.7054C2.37842 10.8804 2.36926 10.6329 2.36926 8.54611C2.36926 6.45624 2.37842 6.20875 2.41509 5.38686C2.4487 4.62301 2.57702 4.21054 2.68396 3.93555C2.82451 3.57197 2.99561 3.3092 3.26754 3.03728C3.54252 2.76229 3.80223 2.59425 4.16582 2.4537C4.4408 2.34676 4.85633 2.21844 5.61712 2.18483C6.43902 2.14816 6.6865 2.139 8.77638 2.139ZM8.77638 0.730469C6.65289 0.730469 6.38707 0.739635 5.55296 0.776299C4.7219 0.812964 4.15054 0.9474 3.65557 1.13989C3.13921 1.34154 2.70229 1.60736 2.26843 2.04428C1.83151 2.47814 1.56569 2.91506 1.36404 3.42836C1.17155 3.92639 1.03712 4.49469 1.00045 5.32575C0.963786 6.16292 0.95462 6.42874 0.95462 8.55222C0.95462 10.6757 0.963786 10.9415 1.00045 11.7756C1.03712 12.6067 1.17155 13.1781 1.36404 13.673C1.56569 14.1894 1.83151 14.6263 2.26843 15.0602C2.70229 15.494 3.13921 15.7629 3.65252 15.9615C4.15054 16.154 4.71884 16.2884 5.5499 16.3251C6.38402 16.3618 6.64984 16.3709 8.77332 16.3709C10.8968 16.3709 11.1626 16.3618 11.9967 16.3251C12.8278 16.2884 13.3992 16.154 13.8941 15.9615C14.4074 15.7629 14.8443 15.494 15.2782 15.0602C15.7121 14.6263 15.9809 14.1894 16.1795 13.6761C16.372 13.1781 16.5065 12.6098 16.5431 11.7787C16.5798 10.9446 16.589 10.6788 16.589 8.55528C16.589 6.43179 16.5798 6.16598 16.5431 5.33186C16.5065 4.5008 16.372 3.92944 16.1795 3.43447C15.9871 2.91506 15.7212 2.47814 15.2843 2.04428C14.8505 1.61042 14.4135 1.34154 13.9002 1.14294C13.4022 0.950456 12.8339 0.816019 12.0028 0.779355C11.1657 0.739635 10.8999 0.730469 8.77638 0.730469Z"
                    ></path>
                    <path
                      class="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                      d="M8.77637 4.53441C6.55817 4.53441 4.75856 6.33402 4.75856 8.55222C4.75856 10.7704 6.55817 12.57 8.77637 12.57C10.9946 12.57 12.7942 10.7704 12.7942 8.55222C12.7942 6.33402 10.9946 4.53441 8.77637 4.53441ZM8.77637 11.1585C7.33729 11.1585 6.17014 9.9913 6.17014 8.55222C6.17014 7.11314 7.33729 5.94599 8.77637 5.94599C10.2155 5.94599 11.3826 7.11314 11.3826 8.55222C11.3826 9.9913 10.2155 11.1585 8.77637 11.1585Z"
                    ></path>
                    <path
                      class="fill-current transition duration-300 ease-linear dark:text-blue-950 text-blue-700 group-hover:text-white"
                      d="M13.8911 4.37544C13.8911 4.89486 13.4694 5.31345 12.9531 5.31345C12.4337 5.31345 12.0151 4.8918 12.0151 4.37544C12.0151 3.85603 12.4367 3.43744 12.9531 3.43744C13.4694 3.43744 13.8911 3.85909 13.8911 4.37544Z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <img src={tel} alt="logo" className="social-icon" />
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 hover:text-red-600 "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
