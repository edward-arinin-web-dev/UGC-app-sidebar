import { create } from "zustand";
import type { BackgroundItem } from "@/types/sidebar";

const MOCK_BACKGROUNDS: BackgroundItem[] = [
  {
    id: "bg-1",
    imageUrl: "/images/background.png",
    isDefault: true,
    status: "ready",
  },
  {
    id: "bg-2",
    imageUrl: "/images/background.png",
    isDefault: false,
    status: "ready",
  },
  {
    id: "bg-3",
    imageUrl: "/images/background.png",
    isDefault: false,
    status: "ready",
  },
  {
    id: "bg-4",
    imageUrl: "/images/background.png",
    isDefault: false,
    status: "ready",
  },
  {
    id: "bg-5",
    imageUrl: "/images/background.png",
    isDefault: false,
    status: "ready",
  },
  {
    id: "bg-6",
    imageUrl: "/images/background.png",
    isDefault: false,
    status: "ready",
  },
];

interface SidebarState {
  isOpen: boolean;
  open: () => void;
  close: () => void;

  prompt: string;
  setPrompt: (text: string) => void;

  promptHistory: string[];
  historyIndex: number;
  commitPrompt: () => void;
  undo: () => void;
  redo: () => void;

  backgrounds: BackgroundItem[];
  isGenerating: boolean;
  generate: () => void;
}

const INITIAL_PROMPT =
  "Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.";

export const useSidebarStore = create<SidebarState>((set, get) => ({
  isOpen: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: true }),

  prompt: INITIAL_PROMPT,
  setPrompt: (text: string) => set({ prompt: text }),

  promptHistory: [INITIAL_PROMPT],
  historyIndex: 0,
  commitPrompt: () => {
    const { prompt, promptHistory, historyIndex } = get();
    const trimmed = prompt.trim();
    if (!trimmed || trimmed === promptHistory[historyIndex]) return;

    const newHistory = [...promptHistory.slice(0, historyIndex + 1), trimmed];
    set({
      promptHistory: newHistory,
      historyIndex: newHistory.length - 1,
    });
  },
  undo: () => {
    const { historyIndex, promptHistory } = get();
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    set({
      historyIndex: newIndex,
      prompt: promptHistory[newIndex],
    });
  },
  redo: () => {
    const { historyIndex, promptHistory } = get();
    if (historyIndex >= promptHistory.length - 1) return;
    const newIndex = historyIndex + 1;
    set({
      historyIndex: newIndex,
      prompt: promptHistory[newIndex],
    });
  },

  backgrounds: MOCK_BACKGROUNDS,
  isGenerating: false,

  generate: () => {
    const { isGenerating } = get();
    if (isGenerating) return;

    const newId = `bg-${Date.now()}`;

    const generatingItem: BackgroundItem = {
      id: newId,
      imageUrl: "",
      isDefault: false,
      status: "generating",
      progress: 0,
      timeRemaining: "1 minute left",
    };

    set((state) => ({
      isGenerating: true,
      backgrounds: [generatingItem, ...state.backgrounds],
    }));

    // Simulate progress updates
    const progressSteps = [10, 25, 45, 65, 80, 95, 100];
    const timeLabels = [
      "1 minute left",
      "1 minute left",
      "45 seconds left",
      "30 seconds left",
      "15 seconds left",
      "Almost done...",
      "",
    ];

    progressSteps.forEach((progress, i) => {
      setTimeout(
        () => {
          const isComplete = progress === 100;

          set((state) => ({
            isGenerating: isComplete ? false : true,
            backgrounds: state.backgrounds.map((bg) => {
              if (bg.id !== newId) {
                return isComplete ? { ...bg, isDefault: false } : bg;
              }
              return {
                ...bg,
                status: isComplete ? "ready" : "generating",
                progress,
                timeRemaining: timeLabels[i],
                isDefault: isComplete,
                imageUrl: isComplete ? "/images/background.png" : "",
              };
            }),
          }));
        },
        (i + 1) * 500,
      );
    });
  },
}));
