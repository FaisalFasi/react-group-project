import products from "../assets/products.json";

const allUniqueColors = [
  ...new Set(products.map((product) => product.product_color)),
];
console.log(allUniqueColors);

export default function Search() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {allUniqueColors.map((color) => {
          return (
            <button key={color} className="p-2 bg-white border border-solid ">
              {color}({products.filter((p) => p.product_color === color).length}
              )
            </button>
          );
        })}
      </div>
      <div>
        {products.map((product) => {
          return (
            <div
              key={product.product_id}
              className="flex flex-col justify-left gap-2 my-5 bg-white p-4"
            >
              <span>
                <b> id:</b>
                {product.product_id}
              </span>
              <span>
                <b> name:</b>
                {product.product_name}
              </span>
              <span>
                <b>color:</b>
                {product.product_color}
              </span>
              <span>
                <b> brand:</b>
                {product.product_brand}
              </span>
              <span>
                <b> price:</b>
                {product.product_price}{" "}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
