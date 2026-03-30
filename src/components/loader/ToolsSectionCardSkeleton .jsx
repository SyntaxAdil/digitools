import React from "react";

const ToolsSectionSkeleton = ({ count = 3 }) => {
  const badgeClasses = {
    best_seller: " bg-[#fef3c6]",
    popular: " bg-[#e1e7ff]",
    new: " bg-[#dbfce7]",
  };

  return (
    <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array(count)
        .fill(0)
        .map((_, idx) => {
          const product = { tagType: "best_seller" };
          return (
            <div
              key={idx}
              className="card p-4 rounded-md shadow relative min-h-95 animate-pulse"
            >
              <div
                className={`absolute top-2 text-sm right-2 px-4 py-1 font-medium rounded-full ${
                  badgeClasses[product?.tagType || "best_seller"]
                }`}
              ></div>

              <div className="w-15 h-15 rounded-full border border-[#F2F2F2] flex items-center justify-center bg-gray-200"></div>

              <div className="space-y-4 my-4">
                <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-6 w-1/3 bg-gray-300 rounded mt-2"></div>

                <ul className="space-y-2 mt-4">
                  {Array(4)
                    .fill(0)
                    .map((_, idx2) => (
                      <li key={idx2} className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-[#30b868]/50"></div>
                        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                      </li>
                    ))}
                </ul>

                <div className="h-12 w-full bg-gray-300 rounded-full mt-4"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ToolsSectionSkeleton;