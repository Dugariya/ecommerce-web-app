import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/feature/products/productSlice";
import Products from "./Products";
import Loader from "../../components/Loader/Loader";

function Home() {
  let data = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  };
  const dispatch = useAppDispatch();
   useEffect(() => {
   dispatch(fetchProducts())
   }, [])
   
  const {isLoading,product } = useAppSelector((state)=>state.products)

if (isLoading) {
return <Loader/>
}

  return (
    <div className="">
      <Products productArr={product}/>
    </div>
  );
}

export default Home;
