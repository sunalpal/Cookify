import { Link } from "react-router-dom";
const PRIMARY_BG_LIGHT = 'bg-[#EDE7B5]';
const ACCENT_COLOR = 'text-[#354F2C]';
const BUTTON_BG = 'bg-[#304F2F]';
const CARD_BG = 'bg-white';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/details/${product.id}`} className={`w-full  flex sm:w-[48%] md:w-[30%] lg:w-[22%] rounded-lg shadow-lg overflow-hidden ${CARD_BG} transition-transform duration-300 hover:scale-105 `}>

      <div className="relative  flex w-full h-60 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.productName} 
          className="w-full h-full object-cover" 
        />
        <span className={`absolute top-2 left-2 ${BUTTON_BG} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase`}>
          {product.category.replace('_', ' ')}
        </span>
      </div>

      <div className="p-4">
        <h3 className={`text-xl font-bold ${ACCENT_COLOR} mb-2`}>
          {product.productName}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.shortDescription}</p>

        <div className="flex items-center justify-between mb-4">
          <span className={`text-2xl font-extrabold ${ACCENT_COLOR}`}>
            ₹{product.price }
          </span>
        </div>

        <button 
          className={`w-full ${BUTTON_BG} text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200`}
        >
          View Details
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
