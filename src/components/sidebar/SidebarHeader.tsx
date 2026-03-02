import { CloseIcon } from "@/shared/icons";
import { useSidebarStore } from "@/store/sidebar-store";

export function SidebarHeader() {
  const close = useSidebarStore((s) => s.close);

  return (
    <div className="flex items-start justify-between w-full">
      <h2 className="font-italian font-bold text-[22px] leading-[1.2] text-main-black translate-y-[1px]">
        Change background
      </h2>
      <button
        type="button"
        onClick={close}
        className="w-6 h-6 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
      >
        <CloseIcon />
      </button>
    </div>
  );
}
