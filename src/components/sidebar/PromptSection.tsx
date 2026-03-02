import { Textarea } from "@/components/ui/textarea";
import { SparklesIcon, UndoIcon, RedoIcon } from "@/shared/icons";
import { useSidebarStore } from "@/store/sidebar-store";

export function PromptSection() {
  const prompt = useSidebarStore((s) => s.prompt);
  const setPrompt = useSidebarStore((s) => s.setPrompt);
  const commitPrompt = useSidebarStore((s) => s.commitPrompt);
  const undo = useSidebarStore((s) => s.undo);
  const redo = useSidebarStore((s) => s.redo);
  const historyIndex = useSidebarStore((s) => s.historyIndex);
  const promptHistory = useSidebarStore((s) => s.promptHistory);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < promptHistory.length - 1;

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="font-italian font-semibold text-sm text-main-black">
        Background idea
      </p>

      <div className="bg-main-white ring-1 ring-gray-light rounded-xl w-full overflow-hidden">
        <div className="px-4 pt-[14px] h-[116px]">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onBlur={commitPrompt}
            className="w-full h-full resize-none border-none shadow-none p-0 pt-[1px] font-italian font-medium text-sm text-main-black leading-[1.44] focus-visible:ring-0 placeholder:text-gray-mid"
            placeholder="Describe your background idea..."
          />
        </div>

        <div className="bg-gradient-to-t from-white from-[70%] to-transparent px-[9px] pb-2 pt-[34px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              commitPrompt();
            }}
            className="flex items-center gap-1 pl-[7px] pr-3 py-[7px] rounded-[10px] hover:bg-gray-light transition-colors cursor-pointer"
          >
            <SparklesIcon className="w-[18px] h-[18px] translate-y-[-1px]" />
            <span className="font-italian font-semibold text-xs text-main-black">
              Regenerate
            </span>
          </button>

          <div className="flex items-center gap-2 pr-[8px]">
            <button
              type="button"
              onClick={undo}
              disabled={!canUndo}
              className="p-[7px] rounded-[10px] hover:bg-gray-light transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-default"
            >
              <UndoIcon className="w-5 h-5 text-gray-mid" />
            </button>
            <button
              type="button"
              onClick={redo}
              disabled={!canRedo}
              className="p-[7px] rounded-[10px] hover:bg-gray-light transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-default"
            >
              <RedoIcon className="w-5 h-5 text-gray-mid" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
