import React from "react";
import { useNavigate } from "react-router-dom";

interface IProductArr {
  productArr: any[];
}

const Products: React.FC<IProductArr> = ({ productArr }) => {
  const navigate = useNavigate();

  const goToSingleProduct = (id: number) => {
    navigate(`/products/${id}`);
  };

  const truncateDescription = (description: string, maxChars: number) => {
    if (description.length > maxChars) {
      return description.slice(0, maxChars) + "...";
    }
    return description;
  };

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {productArr.map((item: any) => {
        return (
          <div
            key={item.id}
            className="bg-white p-5 m-2 shadow-lg w-1/5 rounded-lg h-[500px] min-w-[400px] flex flex-col justify-between"
          >
            <img
              alt="product"
              src={item.thumbnail}
              className="w-[200px] h-[200px] rounded-md object-cover"
            />
            <div>
              <h1 className="text-black font-light text-lg">{item.title}</h1>
              <p className="text-black font-light text-sm mb-4 line-clamp-3">
                {truncateDescription(item.description, 100)}
              </p>
              <h1 className="text-black font-bold text-xl">
                Price ₹{item.price}
              </h1>
              <h1 className="text-green-600 font-light text-sm">67% Off</h1>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => goToSingleProduct(item.id)}
                className="py-3 px-5 bg-blue-400 rounded-lg text-white text-sm hover:bg-blue-200"
              >
                More Detail
              </button>
              <button className="py-3 px-5 bg-green-200 rounded-lg text-black text-sm hover:bg-green-400">
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
