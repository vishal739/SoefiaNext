const SmallProgressIndicator = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const getColor = () => {
    if (value >= 75) return "bg-green-600";
    if (value >= 50) return "bg-yellow-500";
    return "bg-red-700";
  };

  const getTextColor = () => {
    if (value >= 75) return "text-white";
    if (value >= 50) return "text-black";
    return "text-white";
  };

  return (
    <div
      className={`px-2 py-1 flex items-center justify-center w-fit rounded ${getColor()} ${className}`}
    >
      <span className={`text-xs font-semibold ${getTextColor()}`}>
        {value} %
      </span>
    </div>
  );
};

export default SmallProgressIndicator;
