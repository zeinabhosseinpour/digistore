import React, { Fragment, useMemo } from "react";
import Header from "../Layout/Header";
import productsbags from "./productList";
import productslist from "./productslist";
import Footer from "../Layout/Footer";
import { Link, useParams } from "react-router-dom";
import "./Products.css";
import productimg from "../../assets/images/productsimg/photo_2019-12-11_16-39-53.jpg";

import { ConfigProvider, Switch } from "antd";

const child2 = [
  {
    id: 1,
    childs: [
      { id: 1, title: "کیف مجلسی زنانه", href: "./Content.js" },
      { id: 2, title: "کیف دوشی زنانه", href: "./Content.js" },
      { id: 3, title: "کیف شب و دستی زنانه", href: "./Content.js" },
      { id: 4, title: "کیف کج یکطرفه", href: "./Content.js" },
      { id: 5, title: "کوله پشتی", href: "./Content.js" },
      { id: 6, title: "کیف پول کتی", href: "./Content.js" },
      { id: 7, title: "کیف پول جیبی مردانه", href: "./Content.js" },
    ],
  },

  //     childs: [
  //       { name: "کیف مجلسی زنانه", href: "./Content.js" },
  //       { name: "کیف دوشی زنانه", href: "./Content.js" },
  //       { name: "کیف شب و دستی زنانه", href: "./Content.js" },
  //       { name: "کیف کج یکطرفه", href: "./Content.js" },
  //       { name: "کوله پشتی", href: "./Content.js" },
  //       { name: "کیف پول کتی", href: "./Content.js" },
  //       { name: "کیف پول جیبی مردانه", href: "./Content.js" },
  //     ],
  //   },

  {
    id: 2,
    childs: [
      { id: 1, title: "قاب گوشی موبایل", href: "./Content.js" },
      { id: 2, title: "بند ساعت", href: "./Content.js" },
      { id: 3, title: "کمربند چرمی", href: "./Content.js" },
      { id: 4, title: "پیش بند چرمی", href: "./Content.js" },
      { id: 5, title: "گوشواره چرمی", href: "./Content.js" },
      { id: 6, title: "دستبند چرمی", href: "./Content.js" },
      { id: 7, title: "کیف عینک", href: "./Content.js" },
    ],
  },

  //     childs: [
  //       { name: "قاب گوشی موبایل", href: "./Content.js" },
  //       { name: "بند ساعت", href: "./Content.js" },
  //       { name: "کمربند چرمی", href: "./Content.js" },
  //       { name: "پیش بند چرمی", href: "./Content.js" },
  //       { name: "گوشواره چرمی", href: "./Content.js" },
  //       { name: "دستبند چرمی", href: "./Content.js" },
  //       { name: "کیف عینک", href: "./Content.js" },
  //     ],
  //   },

  {
    id: 3,
    childs: [
      {
        id: 1,
        title: "کفش زنانه",
        childs2: [
          { name: "صندل زنانه", href: "./Content.js" },
          { name: "کفش مجلسی زنانه", href: "./Content.js" },
          { name: "کفش اسپرت زنانه", href: "./Content.js" },
          { name: "کفش بوت و نیم بوت", href: "./Content.js" },
          { name: "کفش کالج زنانه", href: "./Content.js" },
        ],
      },

      {
        id: 2,
        title: "کفش مردانه",
        childs2: [
          { name: "صندل مردانه", href: "./Content.js" },
          { name: "کفش مجلسی مردانه", href: "./Content.js" },
          { name: "کفش اسپرت مردانه", href: "./Content.js" },
          { name: "کفش بوت و نیم بوت", href: "./Content.js" },
          { name: "کفش کالج مردانه", href: "./Content.js" },
        ],
      },
    ],
  },

  {
    id: 4,
    childs: [
      { id: 1, title: "دستکش چرمی", href: "./Content.js" },
      { id: 2, title: "لباس چرمی", href: "./Content.js" },
      { id: 3, title: "کلاه چرمی", href: "./Content.js" },
    ],
  },

  {
    id: 5,
    childs: [
      { id: 1, title: "تابلو چرمی", href: "./Content.js" },
      { id: 2, title: "فرش چرمی", href: "./Content.js" },
      { id: 3, title: "کوسن چرمی", href: "./Content.js" },
    ],
  },

  {
    id: 7,

    childs: [
      {
        id: 1,
        title: "چرم گاوی",
        childs2: [
          { name: "چرم گاوی فلوتر", href: "./Content.js" },
          { name: "چرم گاوی هورس", href: "./Content.js" },
          { name: "چرم گاوی لزارد", href: "./Content.js" },
        ],
      },

      { id: 2, title: "چرم بزی", href: "./Content.js" },
      { id: 3, title: "چرم شتر", href: "./Content.js" },
      { id: 4, title: "چرم مار پیتون", href: "./Content.js" },
      { id: 5, title: "چرم شترمرغ", href: "./Content.js" },
    ],
  },
];

const child = [
  {
    id: 1,
    title: "کیف های چرمی",
    slug: "کیف های_چرمی",
    childs: child2,
  },

  {
    id: 2,
    title: "اکسسوری چرمی",
    slug: "اکسسوری_چرمی",
    childs: child2,
  },

  {
    id: 3,
    title: "کفش چرمی",
    slug: "کفش_چرمی",
    child: child2,
  },

  {
    id: 4,
    title: "پوشاک چرمی",
    slug: "پوشاک_چرمی",
    child: child2,
  },

  {
    id: 5,
    title: "دکوراسیون و منزل",
    slug: "دک.راسیون_منزل",
    child: child2,
  },

  {
    id: 6,
    title: "محصولات بچگانه",
    slug: "محصولات_بچگانه",
    childs: child2,
  },

  {
    id: 7,
    title: "چرم",
    slug: "چرم",
    childs: child2,
  },
];

console.log("aaa");

console.log("ppp");
console.log(child, "child");
const list1 = productsbags;
console.log(list1, "list1");

const Products = () => {
  // const list2 = productsbags;

  // console.log(list2, "list2");
  // console.log(list2.price, "list2price");

  // const productsId = useParams();
  console.log("ssss");
  // console.log(menuitemid, "menuitemid");
  // console.log(productid, "productid");
  // console.log(slug, " slug");
  // console.log(slag, " slag");
  // console.log(category, "category");
  // const fp = list2.filter((f) => f.parent.toString() === productid);
  // console.log(fp, "filterparent");
  // const fp=list2.filter((f) => f.id === productid)
  // console.log(child2, "bbbb");
  // const findchild2 = child2.find(
  //   (midfind) => midfind.id.toString() === productid
  // );
  // console.log(findchild2, "findchild2");
  // const findlist2 = list2.find(
  //   (midfind) => midfind.id.toString() === productids
  // );

  // console.log(findlist2.price, "findlist2");
  // const { l2, l3 } = list2;
  // console.log(l2, l3, "l2");
  // Header ,catalog,  footer

  // const handleChange = () => {
  //   if (
  //     list2.find((midfind) => midfind.id.toString() === productid).count !== 0
  //   ) {
  //     console.log(list2.count, "list2count");
  //   } else {
  //     console.log("countisZero");
  //   }
  // };

  // const findlist2menuitemid = list2.find(
  //   (midfind) => midfind.id.toString() === menuitemid
  // );
  // console.log(
  //   findlist2menuitemid,
  //   list2.parent,
  //   "parent",
  //   "findlist2withmenuitemid"
  // );
  const plist = productslist;
  const { productid, slug } = useParams();

  function getProductById(products, searchId) {
    for (let product of products) {
      if (product.id.toString() === searchId) return product;
      if (product.child) {
        let output = getProductById(product.child, searchId);
        if (output) {
          return output;
        }
      }
    }
  }

  const product = useMemo(
    () => getProductById(plist, productid),
    [getProductById, plist, productid]
  );
  console.log(product.child, "productm");

  return (
    <Fragment>
      <Header />
      <main className="container grid grid--2--cols content">
        <section className="filter-section">
          <div>
            <div className="">فیلترها</div>
            <div className="">حذف فیلترها</div>
            <div className="filter">
              <div>
                <label for="allproductId">
                  <span>نمایش همه محصولات </span>
                  <input type="checkbox" id="allproductId" name="allproduct" />
                </label>
              </div>

              <div>
                <label for="inventoryId">
                  <span>فقط نمایش محصولات موجود</span>
                  <input type="checkbox" id="inventoryId" name="inventory" />
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "rgb(25, 191, 211)",
                      },
                      components: {
                        Switch: {
                          handleSizeSM: 10,
                          trackMinWidthSM: 40,
                          trackHeightSM: 20,
                          trackPadding: 4,
                        },
                      },
                    }}
                  >
                    <Switch size="small" onChange={alert("helloooo")} />
                  </ConfigProvider>
                </label>
              </div>
              <div>
                <label for="offId">
                  <span>نمایش محصولات تخفیف دار</span>
                  <input type="checkbox" id="offId" name="off" />
                </label>
              </div>
            </div>
            <div>
              <div>
                <span>دسته بندی</span>
              </div>
              <div>
                <div className="">
                  <label for="natural">
                    <input type="checkbox" id="natural" name="material" />
                    <span></span>
                  </label>
                  <span>(4)</span>
                </div>
                <div className="">
                  <label for="natural">
                    <input type="checkbox" id="natural" name="material" />
                    <span>چرم طبیعی</span>
                  </label>
                  <span>(4)</span>
                </div>
                <div className="">
                  <label for="natural">
                    <input type="checkbox" id="natural" name="material" />
                    <span>چرم طبیعی</span>
                  </label>
                  <span>(4)</span>
                </div>
                <div className="">
                  <label for="natural">
                    <input type="checkbox" id="natural" name="material" />
                    <span>چرم طبیعی</span>
                  </label>
                  <span>(4)</span>
                </div>
                <div className="">
                  <label for="natural">
                    <input type="checkbox" id="natural" name="material" />
                    <span>چرم طبیعی</span>
                  </label>
                  <span>(4)</span>
                </div>
                <div className="">
                  <label for="natural">
                    <input type="checkbox" id="natural" name="material" />
                    <span>چرم طبیعی</span>
                  </label>
                  <span>(4)</span>
                </div>
              </div>
            </div>

            <div className="">دسته دوره</div>
            <div className="">
              <span>رنگ ها</span>
            </div>
            <div className="material">
              <div>
                <span>جنس</span>
              </div>
              <div className="">
                <label for="natural">
                  <input type="checkbox" id="natural" name="material" />
                  <span>چرم طبیعی</span>
                </label>
                <span>(4)</span>
              </div>
              <div className="">
                <label for="brezent">
                  <input type="checkbox" id="brezent" name="material" />
                  <span>برزنت</span>
                </label>
                <span>(4)</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <section className="">
            <ul className="sort-section">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-8 h-8 stroke-orange-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                  />
                </svg>
              </li>
              <li className="">
                <a href="#">مرتب سازی</a>
              </li>
              <li>
                <a href="#">جدیدترین</a>
              </li>
              <li>
                <a href="#">گران ترین</a>
              </li>
              <li>
                <a href="#">ارزان ترین</a>
              </li>
              <li>
                <a href="#">محبوب ترین</a>
              </li>
              <li>
                <a href="#">پر بازدیدترین</a>
              </li>
              <li>
                <a href="#">پرفروش ترین</a>
              </li>
              <li>
                <a href="#">بیشترین تخفیف</a>
              </li>
            </ul>
          </section>
          <div>{product.title}</div>
          <section className="product-section grid--3--cols">
            {plist
              .filter((f) => f.id.toString() === productid)
              ?.map((i) => (
                <div key="i.id" className="single-product">
                  {i.child?.map((c1) => (
                    <div key={c1.id} className="product-detail">
                      {c1.child?.map((c2) => (
                        <div key={c2.id}>
                          {c2.child?.map((c3) => (
                            <div key={c3.id}>
                              <div className="">
                                <img
                                  src={productimg}
                                  alt="productimg"
                                  className="product-img"
                                />
                              </div>
                              <div className="product-color_section">
                                <div className="product-color">
                                  color{c3.title}
                                </div>
                              </div>
                              <div key="c3.id" className="product-title">
                                name:{c3.title}
                              </div>
                              <div className="product-price_section">
                                <div key="c3.id" className="price-and_off">
                                  <div className="product-off">off:20%</div>
                                  <div className="product-orginal_price">
                                    <span>price:40000</span>
                                    <span>تومان</span>
                                  </div>
                                </div>
                                <div className="product-off_price">
                                  <span>30000</span>
                                  <span>تومان</span>
                                </div>
                              </div>
                              <hr className="hr-div" />

                              <div className="visit-details">
                                <Link
                                  className="visit"
                                  to={`/product-detail/${c3.id}/${c3.slug}`}
                                >
                                  مشاهده و سفارش{i.slug}
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
          </section>
        </section>
      </main>

      <div className="d">productid: {productid}</div>
      <div className="d">slug:{slug}</div>

      <Footer />
    </Fragment>
  );
};

export default Products;
