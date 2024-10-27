const SmallProgressIndicator = ({
    value,
    className,
  }: {
    value: number;
    className?: string;
  }) => {
    const getColor = () => {
      if (value >= 75) return "bg-green-500";
      if (value >= 50) return "bg-yellow-500";
      return "bg-red-500";
    };
  
    const getTextColor = () => {
      if (value >= 75) return "text-white";
      if (value >= 50) return "text-black";
      return "text-white";
    };
  
    return (
      <div className="flex items-center gap-2">
        <div className="relative w-12 h-6 bg-gray-300 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full rounded-full ${getColor()}`}
            style={{ width: `${value}%` }}
          />
          <span
            className={`absolute inset-0 flex items-center justify-center text-xs font-semibold ${getTextColor()}`}
          >
            {value}%
          </span>
        </div>
      </div>
    );
  };
  
  export default SmallProgressIndicator;