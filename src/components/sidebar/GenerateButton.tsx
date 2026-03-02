import { Button } from "@/components/ui/button";
import { SparklesTrioIcon } from "@/shared/icons";
import { useSidebarStore } from "@/store/sidebar-store";

export function GenerateButton() {
  const generate = useSidebarStore((s) => s.generate);
  const isGenerating = useSidebarStore((s) => s.isGenerating);

  return (
    <Button
      onClick={() => {
        useSidebarStore.getState().commitPrompt();
        generate();
      }}
      disabled={isGenerating}
      className="w-full h-12 rounded-full bg-main-black text-main-white font-italian font-semibold text-sm gap-2 hover:bg-main-black/90 disabled:opacity-60 cursor-pointer"
    >
      <span className="flex items-center gap-2">
        <SparklesTrioIcon className="w-4 h-4" />
        <span>Generate BG for 1 credit</span>
      </span>
    </Button>
  );
}
