import { Check } from "lucide-react";
import CustomButton from "./CustomButton";



const ToolsSectionCard = ({ product }) => {
  
  const badgeClasses = {
    best_seller: " bg-[#fef3c6] text-[#bb4d00]",
    popular: "  bg-[#e1e7ff] text-[#7724f8]",
    new: " bg-[#dbfce7] text-[#0a883e]",
  };
  return (
    <div className="card p-4 rounded-md shadow relative min-h-95">
      {/* badge */}
      <div
        className={`absolute top-2 text-sm right-2 px-4 py-1 font-medium rounded-full   ${badgeClasses[product.tagType]}`}
      >
        {product.tag}
      </div>

      <div className="w-15 h-15 rounded-full border border-[#F2F2F2] flex items-center justify-center">
        <img src={product.icon} alt={product.name} />
      </div>

      <div className="space-y-4 my-4">
        <h1 className="font-bold text-2xl"> {product.name} </h1>
        <p className="text-gray-500">{product.description}</p>

        <span className="capitalize text-gray-500">
          <span className="text-2xl font-bold">${product.price}</span>/
          {product.period}
        </span>
        <ul className="space-y-1 mt-4">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[#627382]">
              <Check className="text-[#30b868]" />
              {f}
            </li>
          ))}
        </ul>
        <CustomButton extraClass="w-full py-2 ">Buy Now</CustomButton>
      </div>
    </div>
  );
};

export default ToolsSectionCard;
