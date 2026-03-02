export interface BackgroundItem {
  id: string;
  imageUrl: string;
  isDefault: boolean;
  status: "ready" | "generating";
  progress?: number;
  timeRemaining?: string;
}
