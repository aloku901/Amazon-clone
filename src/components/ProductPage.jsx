import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { callAPI } from "../utils/CallApi";
import ProductDetails from "./ProductDetails";
import { GB_CURRENCY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";


const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const getProduct = (params) => {
      callAPI(`data/products.json`)
      .then((productResults) => {
        setProduct(productResults[id]);
      });
    }

    const addQuantityToProduct = () => {
      setProduct(product.quantity = quantity);
      return product;
    }
    
    

    useEffect(() => {
        getProduct();
    }, []);

    if (!product?.title) return <h1>Loading Product ...</h1>

  return (  product &&
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] mx-auto bg-white p-4">
        <div className="grid grid-cols-10">
            <div className="col-span-3 bg-white m-auto">
                <img src={`${product.image}`}/>
            </div>
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                <div className="mb-3">
                    <ProductDetails product={product} ratings={true}/>
                </div>
                <div className="text-base xl:text-lg mt-3">
                    {product.description}
                </div>
            </div>
            <div className="col-span-2 p-4 rounded bg-white">
                <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">{GB_CURRENCY.format(product.price)}</div>
                <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">RRP: <span className="line-through">{GB_CURRENCY.format(product.oldPrice)}</span></div>
                <div className="text-sm xl:text-base mt-3 text-blue-500 font-semibold">FREE Returns</div>
                <div className="text-sm xl:text-base mt-1 text-blue-500 font-semibold">FREE Delivery</div>
                <div className="text-base xl:text-lg mt-1 text-green-700 font-semibold">In Stock</div>
                <div className="text-base mt-1 xl:text-lg">Quantity:
                    <select onChange={(e) => setQuantity(e.target.value)} className="p-2 bg-white border rounded-md focus:border-indigo-600">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <Link to={"/checkout"}>
                  <button onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                   className="btn">Add to Cart</button>
                </Link>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
