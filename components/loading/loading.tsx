const LoadingPlaceholder = () => (
  <div className="py-8 mt-24">
    <div className="max-w-[2520px] mx-auto px-4 sm:px-24">
      {/* Header Section Placeholder */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start animate-pulse">
          <div className="w-3/4 bg-gray-300 h-8 rounded-md"></div>

          <div className="flex gap-4">
            <div className="w-24 h-10 bg-gray-300 rounded-md"></div>
            <div className="w-24 h-10 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Image Grid Placeholder */}
        <div className="grid grid-cols-4 gap-2 h-[60vh] animate-pulse">
          <div className="col-span-2 row-span-2 relative rounded-l-xl bg-gray-300 h-full"></div>
          <div className="relative bg-gray-300 h-full"></div>
          <div className="relative rounded-tr-xl bg-gray-300 h-full"></div>
          <div className="relative bg-gray-300 h-full"></div>
          <div className="relative rounded-br-xl bg-gray-300 h-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadingPlaceholder;
