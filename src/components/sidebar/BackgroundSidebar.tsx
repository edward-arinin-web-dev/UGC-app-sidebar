import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useSidebarStore } from "@/store/sidebar-store";
import { SidebarHeader } from "./SidebarHeader";
import { PromptSection } from "./PromptSection";
import { GenerateButton } from "./GenerateButton";
import { BackgroundGrid } from "./BackgroundGrid";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function BackgroundSidebar() {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const close = useSidebarStore((s) => s.close);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && close()}>
      <SheetContent
        side="right"
        className="w-[400px] sm:max-w-[400px] p-0 border-none [&>button]:hidden"
      >
        <VisuallyHidden>
          <SheetTitle>Change background</SheetTitle>
        </VisuallyHidden>

        <div className="px-5 pt-8">
          <SidebarHeader />
        </div>

        {/* Everything below header — scrollable */}
        <div className="absolute top-[57px] bottom-0 left-0 right-0 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-mid [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="pl-5 pr-[16px] pt-6 pb-5">
            <div className="flex flex-col gap-[25px]">
              <PromptSection />
              <GenerateButton />
            </div>

            <div className="mt-[39px]">
              <BackgroundGrid />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
