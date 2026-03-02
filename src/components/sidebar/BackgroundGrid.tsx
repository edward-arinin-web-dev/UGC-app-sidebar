import { useSidebarStore } from "@/store/sidebar-store";
import { BackgroundCard } from "./BackgroundCard";

export function BackgroundGrid() {
  const backgrounds = useSidebarStore((s) => s.backgrounds);

  if (backgrounds.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-italian font-semibold text-sm text-main-black">
        Your backgrounds
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {backgrounds.map((bg) => (
          <BackgroundCard key={bg.id} item={bg} />
        ))}
      </div>
    </div>
  );
}
