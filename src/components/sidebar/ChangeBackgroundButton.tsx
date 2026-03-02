import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/store/sidebar-store";

export function ChangeBackgroundButton() {
  const open = useSidebarStore((s) => s.open);

  return (
    <Button
      onClick={open}
      className="rounded-full bg-main-black text-main-white font-italian font-semibold text-sm px-6 h-11 hover:bg-main-black/90 cursor-pointer"
    >
      Change background
    </Button>
  );
}
