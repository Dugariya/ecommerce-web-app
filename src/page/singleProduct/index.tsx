import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSingleProducts } from '../../redux/feature/products/productSlice';
import Loader from '../../components/Loader/Loader';

function SingleProduct() {
  const { id } = useParams();
 const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSingleProducts(Number(id)))
  }, [id])

const {isLoading,singleProducts } = useAppSelector((state)=>state.products)
    let product = singleProducts;

const handleBuyNow = () => {
  // Add functionality for "Buy Now" button
  console.log("Product purchased!");
};

const handleAddToCart = () => {
  // Add functionality for "Add to Cart" button
  console.log("Product added to cart!");
};
if (isLoading) {
  return <Loader/>
}
return (
  <div className="container mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="p-4">
        <img src={product.thumbnail} alt="Product" className="w-full rounded-lg" />
      </div>
      <div className="p-6">
        <h1 className="text-xl font-bold">{product.title}</h1>
        <p className="text-gray-600 my-4">{product.description}</p>
        <div className="flex items-center justify-between my-4">
          <div>
            <p className="text-2xl font-bold text-gray-800">${product.price}</p>
            <p className="text-sm text-gray-600">{product.discountPercentage}% off</p>
          </div>
          <p className="bg-green-500 text-white py-1 px-3 rounded-full">{product.stock} in stock</p>
        </div>
        <p className="text-sm mb-4">Rating: {product.rating}</p>
        <div className="flex justify-between items-center mb-4">
          <button onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
          <button onClick={handleAddToCart} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8 p-6">
      <h2 className="text-xl font-bold mb-4">Product Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {product?.images?.map((image:any, index:number) => (
          <img key={index} src={image} alt={`Product ${index}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>
    </div>
  </div>
);
}

export default SingleProduct    