import React from "react";
import { useParams } from "react-router-dom";
import productsbags from "./productList";

const ProductDetail = () => {
  const { productid, slug } = useParams();
  console.log(productid, slug, "productid", "slugd");
  const list2 = productsbags;
  const listfind = list2.find((i) => i.id.toString() === productid);
  return (
    <div>
      <div>id:{productid}</div>
      <div>slug:{slug}</div>
      <div>count:{listfind.count}</div>
      <div>
        material:{listfind.material}
        <div>price:{listfind.price}</div>
      </div>
      <div> sluglist2:{listfind.slug}</div>
    </div>
  );
};

export default ProductDetail;
