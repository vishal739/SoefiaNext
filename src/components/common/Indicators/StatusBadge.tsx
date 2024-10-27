const StatusBadge = ({
    status,
    change,
  }: {
    status: string;
    change?: string;
  }) => {
    const getColor = () => {
      switch (status.toLowerCase()) {
        case "high":
        case "balanced":
          return "bg-green-100 text-green-800";
        case "unbalanced":
          return "bg-red-100 text-red-800";
        case "part balance":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };
  
    return (
      <div className="flex items-center gap-2">
        <span className={`px-2 py-1 rounded text-sm ${getColor()}`}>
          {status}
        </span>
        {change && <span className="text-sm text-gray-500">{change}</span>}
      </div>
    );
  };
  
export default StatusBadge; 