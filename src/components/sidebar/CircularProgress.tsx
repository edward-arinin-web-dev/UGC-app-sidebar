interface CircularProgressProps {
  progress: number;
}

const WIDTH = 66;
const HEIGHT = 65.5;
const CX = 33;
const CY = 32.5;
const R = 31;
const STROKE_WIDTH = 3;
const CIRCUMFERENCE = 2 * Math.PI * R;

export function CircularProgress({ progress }: CircularProgressProps) {
  const offset =
    CIRCUMFERENCE - (CIRCUMFERENCE * Math.min(progress, 100)) / 100;

  return (
    <div className="relative" style={{ width: WIDTH, height: HEIGHT }}>
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        fill="none"
        className="rotate-[-90deg]"
      >
        <circle
          cx={CX}
          cy={CY}
          r={R}
          stroke="white"
          strokeOpacity={0.2}
          strokeWidth={STROKE_WIDTH}
          fill="none"
        />

        <circle
          cx={CX}
          cy={CY}
          r={R}
          stroke="#5BF0A5"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          fill="none"
          style={{ transition: "stroke-dashoffset 0.4s ease" }}
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center font-italian font-medium text-sm text-white translate-[1px]">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
