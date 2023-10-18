import React from "react";
import "./content.css";
import imag1 from "../../assets/images/img.icons8.png";
import imag2 from "../../assets/images/w.jpg";
import imag3 from "../../assets/images/icons8-shoes-66(1).png";
import imag4 from "../../assets/images/icons8-belt-64.png";
import imag5 from "../../assets/images/icons8-coat-50(1).png";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content-div">
          <span>بنر سایت</span>
        </div>
        <div className="content-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="">دسته بندی های محبوب</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <a
                  href="./Homepage.js"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={imag1}
                    alt="Mountains"
                    style={{
                      objectFit: "cover",
                    }}
                  />

                  <span className="">کیف چرمی</span>
                </a>
              </div>
              <div>
                <a
                  href="./Homepage.js"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={imag3}
                    alt="Mountains"
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid red",
                      borderRadius: "40px",
                      backgroundColor: "blue",
                    }}
                  />

                  <span className="">کفش چرمی</span>
                </a>
              </div>
              <div>
                <a
                  href="./Homepage.js"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={imag4}
                    alt="Mountains"
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid red",
                      borderRadius: "100%",
                      backgroundColor: "white",
                    }}
                  />

                  <span className="">اکسسوری چرمی</span>
                </a>
              </div>
              <div>
                <a
                  href="./Homepage.js"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={imag5}
                    alt="Mountains"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      border: "1px solid red",
                      borderRadius: "100%",
                      backgroundColor: "white",
                    }}
                  />

                  <span style={{ color: "black" }}>پوشاک چرمی</span>
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="./Homepage.js"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={imag1}
                    alt="Mountains"
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid red",
                      borderRadius: "100%",
                      backgroundColor: "blue",
                    }}
                  />

                  <span className="">دکوراسیون و منزل</span>
                </a>
              </div>
              <div>
                <a
                  href="./Homepage.js"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <img src={imag1} alt="Mountains" />

                  <span className="">محصولات بچگانه</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content-div">
          <span>جشنواره تخفیف</span>
          <div></div>
        </div>
        <div className="content-div">
          <span>پرفروش ترین محصولات</span>
          <div></div>
        </div>
        <div className="content-div">
          <div className="content-des">
            <span>جدیدترین محصولات</span>
            <button style={{ backgroundColor: "red", borderRadius: "16px" }}>
              مشاهده همه
            </button>
          </div>

          <div className="catalog-new">
            <div className="single-p">p1</div>
            <div className="single-p">p2</div>
            <div className="single-p">p3</div>
            <div className="single-p">p4</div>
            <div className="single-p">p5</div>
            <div className="single-p">p6</div>
            <div className="single-p">p7</div>
            <div className="single-p">p8</div>
            <div className="single-p">p9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
