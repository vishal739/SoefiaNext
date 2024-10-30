import { Bookmark, Pencil, Trash } from "@phosphor-icons/react";

interface MemoryLogItemProps {
    date: string;
    topic: string;
  }

const MemoryLogItem: React.FC<MemoryLogItemProps> = ({ date, topic }) => (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:p-4 p-2 border-b space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="bg-slate-100 p-2 rounded-lg">
          <Bookmark size={15} />
        </div>
        <div>
          <div className="caption">LOG DATE</div>
          <div className="text-sm">{date}</div>
        </div>
        <div>
          <div className="caption">LOG TOPIC</div>
          <div className="text-sm font-semibold">{topic}</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="text-primary p-2 rounded-lg border hover:bg-slate-200">
          <Trash />
        </button>
        <button className="text-primary p-2 rounded-lg border hover:bg-slate-200">
          <Pencil />
        </button>
      </div>
    </div>
  );

  export default MemoryLogItem;