import type { BackgroundItem } from "@/types/sidebar";
import { CircularProgress } from "./CircularProgress";
import { cn } from "@/lib/utils";

interface BackgroundCardProps {
  item: BackgroundItem;
  onClick?: () => void;
}

export function BackgroundCard({ item, onClick }: BackgroundCardProps) {
  const isGenerating = item.status === "generating";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-full aspect-[112/198] rounded-[12px] overflow-hidden cursor-pointer transition-all",
        item.isDefault && "border-2 border-main-black rounded-[16px]",
        !isGenerating && "hover:opacity-90",
      )}
    >
      {isGenerating ? (
        <div className="absolute inset-0 bg-main-black flex flex-col items-center justify-between pt-[68px] pb-[11px]">
          <CircularProgress progress={item.progress ?? 0} />
          {item.timeRemaining && (
            <span className="font-italian font-semibold text-xs text-white">
              {item.timeRemaining}
            </span>
          )}
        </div>
      ) : (
        /* Ready state */
        <img
          src={item.imageUrl}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {item.isDefault && !isGenerating && (
        <div className="px-1 pt-1.5 pb-1.5 absolute top-[5px] left-[5px] backdrop-blur-[7.5px] bg-white border border-black/5 rounded-[5px] flex items-center">
          <span className="h-[7px] font-italian font-bold text-[10px] text-gray-500 uppercase leading-none">
            default
          </span>
        </div>
      )}
    </button>
  );
}
