const SkeletonPrice = ({ popularIndex = 1 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array(3)
        .fill(0)
        .map((_, idx) => {
          const isPopular = idx === popularIndex; // set which card is popular
          return (
            <div
              key={idx}
              className={`relative min-h-100 rounded-2xl p-6 flex flex-col justify-between shadow ${
                isPopular ? "bg-custom-gradient" : "bg-[#f9fafc]"
              } animate-pulse`}
            >
              <div>
                <div className="h-8 w-1/2 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-6"></div>
                <div className="h-10 w-1/3 bg-gray-300 rounded mb-6"></div>
                <ul className="space-y-2">
                  {Array(4)
                    .fill(0)
                    .map((_, idx2) => (
                      <li key={idx2} className="flex items-center gap-2">
                        <div
                          className={`h-5 w-5 rounded-full ${
                            isPopular ? "bg-white/70" : "bg-[#30b868]/70"
                          }`}
                        ></div>
                        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-6 h-12 w-full bg-gray-300 rounded-full"></div>
              {isPopular && (
                <div className="absolute bg-[#fef3c6] text-[#bb4d00] -top-3 text-sm left-1/2 -translate-x-1/2 px-4 py-1 font-medium rounded-full">
                  Most Popular
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SkeletonPrice;
