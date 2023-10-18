// import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import classes from "./NavBar.module.css";
import { useState } from "react";
// import data from "./data";
import React, { Component } from "react";
import productslist from "../Products/productslist";
import p1 from "../../assets/images/productsimg/photo_2019-12-11_16-39-53.jpg";

const child2 = [
  {
    id: 1,
    title: "کیف های چرمی",
    slug: "کیف های_چرمی",
    category: "کیف های چرمی",
    childs: [
      {
        id: 1,
        title: "کیف مجلسی زنانه",
        slug: "کیف_مجلسی_زنانه",
        slugd: "کیف_مجلسی_زنانه_کد_100",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 2,
        title: "کیف دوشی زنانه",
        slug: "کیف_دوشی_زنانه",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 3,
        title: "کیف دستی زنانه",
        slug: "کیف_دستی_زنانه",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 4,
        title: "کیف کج یکطرفه",
        slug: "کیف_کج_زنانه",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 5,
        title: "کوله پشتی",
        slug: "کوله_پشتی",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 6,
        title: "کیف پول کتی",
        slug: "کیف_پول_کتی",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 7,
        title: "کیف پول جیبی مردانه",
        slug: "کیف_پول_جیبی_مردانه",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
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
    category: "اکسسوری چرمی",
    childs: [
      {
        id: 1,
        title: "قاب گوشی موبایل",
        slug: "قاب_گوشی_موبایل",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 2,
        title: "بند ساعت",
        slug: "بند_ساعت",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 3,
        title: "کمربند چرمی",
        slug: "کمربند_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 4,
        title: "پیش بند چرمی",
        slug: "پیش_بند_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 5,
        title: "گوشواره چرمی",
        slug: "گوشواره_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 6,
        title: "دستبند چرمی",
        slug: "دستبند_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 7,
        title: "کیف عینک",
        slug: "کیف_عینک",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
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
    category: "کفش_چرمی",

    childs: [
      {
        id: 1,
        title: "کفش زنانه",
        slug: "کفش_زنانه",
        category: "کفش_چرمی",
        childs2: [
          {
            id: "1",
            name: "صندل زنانه",
            slug: "صندل_زنانه",
            href: "./Content.js",
            childs3: [
              {
                id: 7,
                category: "کفش چرمی",
                parent: "کفش_زنانه",
                name: "صندل زنانه کد600",
                slug: "کفش_زنانه_کد_600",
                size: "38",
                price: "700000",
                off: "20%",
                priceoff: "500000",
                count: "0",
                material: "چرم گاوی",
                img: p1,
                attributes: [
                  { title: "رنگ", value: "سبز" },
                  { title: "جنس", value: "چرم شتر" },
                  { title: "طول", value: "10cm" },
                  { title: "عرض", value: "10cm" },
                ],
              },
            ],
          },
          {
            id: "2",
            name: "کفش مجلسی زنانه",
            slug: "کفش_مجلسی_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: "3",
            name: "کفش اسپرت زنانه",
            slug: "کفش_اسپرت_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: "4",
            name: "کفش بوت و نیم بوت",
            slug: "کفش_بوت_و_نیم_بوت_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: "5",
            name: "کفش کالج زنانه",
            slug: "کفش_کالج_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
        ],
      },

      {
        id: 2,
        title: "کفش مردانه",
        slug: "کفش_مردانه",
        category: "کفش_چرمی",
        childs2: [
          {
            id: "1",
            name: "صندل مردانه",
            slug: "صندل_مردانه",
            href: "./Content.js",
          },
          {
            id: "2",
            name: "کفش مجلسی مردانه",
            slug: "کفش_مجلسی_مردانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: "3",
            name: "کفش اسپرت مردانه",
            slug: "کفش_اسپرت_مردانه",
            href: "./Content.js",
          },
          {
            id: "4",
            name: "کفش بوت و نیم بوت",
            slug: "کفش_بوت_و_نیم_بوت_مردانه",
            href: "./Content.js",
          },
          {
            id: "5",
            name: "کفش کالج مردانه",
            slug: "کفش_کالج_مردانه",
            href: "./Content.js",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    childs: [
      {
        id: 1,
        title: "دستکش چرمی",
        slug: "دستکش_چرمی",
        category: "پوشاک_چرمی",
        href: "./Content.js",
      },
      {
        id: 2,
        title: "لباس چرمی",
        slug: "لباس_چرمی",
        category: "پوشاک_چرمی",
        href: "./Content.js",
      },
      {
        id: 3,
        title: "کلاه چرمی",
        slug: "کلاه_چرمی",
        category: "پوشاک_چرمی",
        href: "./Content.js",
      },
    ],
  },

  {
    id: 5,
    childs: [
      {
        id: 1,
        title: "تابلو چرمی",
        slug: "تابلو_چرمی",
        category: "دکوراسیون_و_منزل",
        href: "./Content.js",
      },
      {
        id: 2,
        title: "فرش چرمی",
        slug: "فرش_چرمی",
        category: "دکوراسیون_و_منزل",
        href: "./Content.js",
      },
      {
        id: 3,
        title: "کوسن چرمی",
        slug: "کوسن_چرمی",
        category: "دکوراسیون_و_منزل",
        href: "./Content.js",
      },
    ],
  },
  {
    id: 6,
    childs: [
      {
        id: 1,
        title: "کوله پشتی بچگانه",
        slug: "کوله_پشتی_بچگانه",
        category: "محصولات_بچگانه",
        href: "./Content.js",
      },
    ],
  },

  {
    id: 7,

    childs: [
      {
        id: 1,
        title: "چرم گاوی",
        slug: "چرم_گاوی",
        category: "چرم",
        childs2: [
          {
            id: "1",
            name: "چرم گاوی فلوتر",
            slug: "چرم_گاوی_فلوتر",
            category: "چرم",
            href: "./Content.js",
          },
          {
            id: "2",
            name: "چرم گاوی هورس",
            slug: "چرم_گاوی_هورس",
            category: "چرم",
            href: "./Content.js",
          },
          {
            id: "3",
            name: "چرم گاوی لزارد",
            slug: "چرم_گاوی_لزارد",
            category: "چرم",
            href: "./Content.js",
          },
        ],
      },

      {
        id: 2,
        title: "چرم بزی",
        slug: "چرم_بزی",
        category: "چرم",
        href: "./Content.js",
      },
      {
        id: 3,
        title: "چرم شتر",
        slug: "چرم_شتر",
        category: "چرم",
        href: "./Content.js",
      },
      {
        id: 4,
        title: "چرم مار پیتون",
        slug: "چرم__مار_پیتون",
        category: "چرم",
        href: "./Content.js",
      },
      {
        id: 5,
        title: "چرم شترمرغ",
        slug: "چرم_شترمرغ",
        category: "چرم",
        href: "./Content.js",
      },
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
    slug: "دکوراسیون_و_منزل",
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

const NavBar = () => {
  const plist = productslist;
  // const [amountIsValid, setAmountIsValid] = useState(false);
  const [menuitemId, setMenuitemId] = useState(1);

  // const showchildsHandler = (mnid) => {
  //   setMenuitemId(mnid);
  console.log(menuitemId, "menuitemId");

  const idfind = child2.find((midfind) => midfind.id === menuitemId);
  console.log(idfind, "idfind");
  console.log(child2, "child2");
  const product = Array(4)
    .fill("")
    .map((index) => ({
      id: "2",
      name: "کیف دوشی زنانه",
      price: "1800000",

      attributes: [
        { title: "رنگ", value: "مشکی" },
        { title: "جنس", value: "چرم شتر" },
        { title: "طول", value: "27cm" },
        { title: "ارتفاع", value: "26cm" },
        { title: "عرض", value: "11cm" },
      ],
    }));
  console.log(product, "product");

  console.log(Array(3).fill("2"), "arrayfill");
  const product2 = Array(4)
    .fill("")
    .map((index) => ({
      id: "1",
      name: "کیف مجلسی زنانه",
      price: "1500000",
      material: "چرم گاوی",
      length: "25cm",
      height: "28cm",
      width: "10cm",
      attributes: [
        { id: "1", color: "قرمز", count: "3" },
        { id: "2", color: "مشکی", count: "2" },
      ],
    }));
  console.log(product2, "product2");
  //   console.log(mnid, "mnid");
  // };

  // const state = {
  //   id: 1,
  // };

  // const showchildHandler = (mid) => {
  //   // setAmountIsValid(true);
  //   // state.id =
  //   state.id = mid;

  //   console(mid, "mid");
  //   console(state.id, "stateidmid");
  //   return state.id;
  // };

  // console.log(state.id, "salam");

  // console.log(
  //   child2.find((m) => m.id === state.id),
  //   "findid"
  // );

  // child.map()

  return (
    <div className="navbar">
      <a href="#home">خانه</a>
      <a href="#news">پرفروش ترین ها</a>
      <div className="dropdown">
        <button className="dropbtn">
          دسته بندی
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <div class="menu">
            <div className="rightmenu">
              <ul className="ul-right">
                {plist.map((menuitem) => (
                  <li key={menuitem.id}>
                    <Link
                      to={`/product-category/${menuitem.id}/${menuitem.slug}`}
                      onMouseEnter={() => setMenuitemId(menuitem.id)}
                    >
                      {menuitem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="leftmenu">
              <ul className="ul-right">
                {plist
                  .find((i) => menuitemId === i.id)
                  ?.child?.map((m) => (
                    <li key={m.id}>
                      <Link to={`/product-category/${m.id}/${m.slug}`}>
                        {m.title}
                        {m.type !== 0 &&
                          m.child?.map((m2) => (
                            <li>
                              <Link
                                to={`/product-category/${m2.id}/${m2.slug}`}
                              >
                                {m2.title}
                              </Link>
                            </li>
                          ))}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
