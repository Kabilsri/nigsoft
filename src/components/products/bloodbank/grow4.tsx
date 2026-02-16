// VilvaGrowsuiteComponent.tsx
import React, { useMemo } from 'react';

// --- Data Structure for Features ---
interface FeatureData {
  name: string;
  x: number;
  y: number;
  pathD: string;
  labelX: number;
  labelY: number;
  curveId: string;
  isReversed?: boolean;
}

const growsuiteFeatures: FeatureData[] = [
  { name: 'Attendance Tracking', x: 400, y: 285, pathD: 'M190.039 284.745C190.039 203.665 120.294 190.845 72.8117 169.31C16.2525 143.657 -7.07601 81.4286 -0.214952 0.925537', labelX: -60.214952, labelY: -14.074463, curveId: 'gradient-curve1' },
  { name: 'Lead Scoring', x: 253, y: 207, pathD: 'M147.039 206.659C147.039 113.932 77.3167 104.038 43.8649 77.6204C17.7722 57.0144 1.5847 46.9916 1.5847 0.827637', labelX: -58.4153, labelY: -14.172363, curveId: 'gradient-curve2' },
  { name: 'Access Control', x: 144, y: 246, pathD: 'M107.039 245.574C106.711 132.684 47.6118 124.795 25.4161 90.0569C1.45111 52.5498 0.63899 23.4488 0.966973 0.405762', labelX: -59.033027, labelY: -14.594238, curveId: 'gradient-curve3' },
  { name: 'Payroll Automation', x: 61, y: 333, pathD: 'M83.0284 332.489C83.2703 312.821 82.0609 238.721 54.4881 194.81C26.9154 150.9 -3.84077 102.186 2.56243 0.642578', labelX: -57.43757, labelY: -14.357422, curveId: 'gradient-curve4' },
  { name: 'Campaign Manager', x: 23, y: 227, pathD: 'M36.3572 226.659C33.9413 174.41 46.0197 140.951 19.2057 83.6599C-2.24546 37.8268 1.08841 11.2435 2.29635 0.701904', labelX: -57.70365, labelY: -14.298096, curveId: 'gradient-curve5' },
  { name: 'Live Analytics', x: 22, y: 280, pathD: 'M1.03906 279.489C1.03906 236.493 10.1515 143.64 35.3305 88.2941C58.1115 35.6927 53.209 0.243896 53.209 0.243896', labelX: -6.790999999999997, labelY: -14.756104, curveId: 'gradient-curve6' },
  { name: 'Whatsapp Integration', x: -32, y: 335, pathD: 'M1.03906 334.489C1.36742 210.718 53.9383 163.634 73.131 119.052C90.0654 79.7151 77.9694 23.9118 85.2013 0.584229', labelX: 25.201300000000003, labelY: -14.415771, curveId: 'gradient-curve7' },
  { name: 'Sales Pipeline', x: -119, y: 266, pathD: 'M1.03906 265.574C1.36726 152.879 72.3285 124.455 94.5387 89.7768C118.519 52.3343 119.332 23.2834 119.004 0.280029', labelX: 59.004000000000005, labelY: -14.719971, curveId: 'gradient-curve8' },
  { name: 'Self-Service', x: -243, y: 222, pathD: 'M1.03906 221.404C1.03906 118.488 77.9178 109.386 111.335 80.0658C137.4 57.1957 148.806 39.5856 148.806 0.706299', labelX: 88.80600000000001, labelY: -14.293701, curveId: 'gradient-curve9', isReversed: true },
  { name: 'Smart Automation', x: -390, y: 303, pathD: 'M1.03906 302.404C1.03906 221.32 70.8691 208.499 118.409 186.963C175.037 161.31 198.027 78.394 191.009 0.517334', labelX: 131.009, labelY: -14.482666, curveId: 'gradient-curve10', isReversed: true },
];

// --- Reusable Feature Curve Component ---
interface FeatureCurveProps extends FeatureData { }

const FeatureCurve: React.FC<FeatureCurveProps> = ({
  name,
  x,
  y,
  pathD,
  labelX,
  labelY,
  curveId,
  isReversed = false
}) => {
  // Use useMemo for gradient stops to ensure consistent rendering
  const gradientStops = useMemo(() => (
    isReversed
      ? (
        <>
          <stop offset="0%" stopColor="#489BFF" />
          <stop offset="100%" stopColor="#B2EBFD" />
        </>
      ) : (
        <>
          <stop offset="0%" stopColor="#B2EBFD" />
          <stop offset="100%" stopColor="#489BFF" />
        </>
      )
  ), [isReversed]);

  // Determine SVG properties based on x coordinate (left vs right positioning)
  const isLeft = x > 0;
  const absX = Math.abs(x);
  const width = isLeft ? x + 1 : absX + 1;
  const className = `absolute z-40 bottom-0 ${isLeft ? `left-[${x}px]` : `right-[${absX}px]`}`;
  const viewBox = `0 0 ${width} ${y}`;

  return (
    <svg
      className={className}
      width={width}
      height={y}
      viewBox={viewBox}
      fill="none"
      style={{ opacity: 1, transform: 'none' }}
    >
      <defs>
        <linearGradient id={curveId} x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
          {gradientStops}
        </linearGradient>
      </defs>
      <path
        d={pathD}
        stroke={`url(#${curveId})`}
        strokeWidth="1.82961"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      />
      <foreignObject x={labelX} y={labelY} width="90" height="60">
        <div
          className="inline-flex px-[14px] py-[6px] justify-center items-center gap-[10px] rounded-[12px] border-2 border-[#FAFCFF] bg-gradient-to-br from-[#E0EEFF] to-[#DDEEFF] shadow-[0px_1px_4px_0px_rgba(13,83,189,0.25)] text-[#0F5295] text-center text-[8px] md:text-[12px] font-medium leading-[100%] whitespace-nowrap w-full"
          style={{ opacity: 1, transform: 'none' }}
        >
          {name}
        </div>
      </foreignObject>
    </svg>
  );
};

// --- Main Component ---
const VilvaGrowsuiteComponent: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* --- Header Section --- */}
      <section className="relative pt-[60px] md:pt-[120px] pb-[60px] px-4">
        <h4 className="text-[32px] text-center md:text-[40px] font-normal leading-[120%] text-[#090D28] font-heading">
          Everything You Need to <span className="text-[32px] md:text-[40px] font-normal leading-[120%] text-[#3F92FF] font-heading">Grow Smarter</span>
        </h4>

        <div className="w-full container mx-auto">
          <div className="h-[450px] relative">

            {/* --- Feature Curves Container --- */}
            <div className="absolute bottom-0 z-50 left-0 right-0 h-96 flex items-end justify-center overflow-hidden">
              {/* Render Features using the mapped FeatureCurve component */}
              {growsuiteFeatures.map(feature => (
                <FeatureCurve
                  key={feature.name}
                  {...feature} // Pass all properties from the feature object
                />
              ))}
            </div>

            {/* --- Visual Dots/Points --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Note: In a production environment, these dots should ideally be part of the feature data and mapped */}
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '19.39%', top: '70.58%', transform: 'translate(-9.7px, -19.4px)' }} />
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '24.67%', top: '63.37%', transform: 'translate(-9.6px, -19.2px)' }} />
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '59.77%', top: '18.92%', transform: 'translate(8.2px, 16.5px)' }} />
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '86.02%', top: '31.23%', transform: 'translate(-4.2px, -8.4px)' }} />
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '80.09%', top: '50.60%', transform: 'translate(9.9px, 19.8px)' }} />
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '15.33%', top: '47.68%', transform: 'translate(-6.8px, -13.5px)' }} />
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '11.36%', top: '19.96%', transform: 'translate(-7.1px, -14.2px)' }} />
              <div className="absolute w-2 h-2 bg-blue-400/20 rounded-full" style={{ left: '33.87%', top: '79.14%', transform: 'translate(8.8px, 17.6px)' }} />
            </div>
          </div>

          {/* --- Central Logo/Text Block --- */}
          <div className="flex z-50 relative mx-auto w-[100px] h-[100px] p-[10px] justify-center items-center flex-shrink-0 aspect-square rounded-[24px] border-[4px] border-white bg-[radial-gradient(65.83%_100%_at_50%_0%,_#2EABFF_45.08%,_#00379E_100%)] shadow-[0px_44px_12px_rgba(8,56,164,0),0px_28px_11px_rgba(8,56,164,0.01),0px_16px_10px_rgba(8,56,164,0.05),0px_7px_7px_rgba(8,56,164,0.09),0px_2px_4px_rgba(8,56,164,0.1)] text-white text-center text-[14px] leading-[120%] font-bold">
            Vilva Growsuite
          </div>
        </div>
      </section>

      {/* --- Background Ellipse/Noise Effect SVG --- */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full max-w-7xl"
        width="1620"
        height="858"
        viewBox="0 0 1620 858"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <g filter="url(#filter0_fn_807_1235)">
          <ellipse cx="810.5" cy="612.5" rx="544.5" ry="248.5" fill="#F9FCFF" />
        </g>
        <defs>
          <filter id="filter0_fn_807_1235" x="-134" y="-36" width="1889" height="1297" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_807_1235" />
            <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="9797" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
            </feComponentTransfer>
            <feComposite operator="in" in2="effect1_foregroundBlur_807_1235" in="coloredNoise1" result="noise1Clipped" />
            <feFlood floodColor="rgba(70, 164, 247, 0.25)" result="color1Flood" />
            <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
            <feMerge result="effect2_noise_807_1235">
              <feMergeNode in="effect1_foregroundBlur_807_1235" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default VilvaGrowsuiteComponent;