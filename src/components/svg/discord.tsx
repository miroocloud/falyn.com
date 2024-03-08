export function DiscordStatusMask() {
  return (
    <svg
      viewBox="0 0 1 1"
      style={{
        position: "absolute",
        pointerEvents: "none",
        top: "-1px",
        left: "-1px",
        width: "1px",
        height: "1px",
      }}
      aria-hidden="true"
    >
      {/* Idle */}
      <mask
        id="svg-mask-status-idle"
        maskContentUnits="objectBoundingBox"
        viewBox="0 0 1 1"
      >
        <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
        <circle fill="black" cx="0.25" cy="0.25" r="0.375"></circle>
      </mask>

      {/* DnD */}
      <mask
        id="svg-mask-status-dnd"
        maskContentUnits="objectBoundingBox"
        viewBox="0 0 1 1"
      >
        <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
        <rect
          fill="black"
          x="0.125"
          y="0.375"
          width="0.75"
          height="0.25"
          rx="0.125"
          ry="0.125"
        ></rect>
      </mask>

      {/* Offline */}
      <mask
        id="svg-mask-status-offline"
        maskContentUnits="objectBoundingBox"
        viewBox="0 0 1 1"
      >
        <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
        <circle fill="black" cx="0.5" cy="0.5" r="0.25"></circle>
      </mask>

      {/* Online */}
      <mask
        id="svg-mask-status-online"
        maskContentUnits="objectBoundingBox"
        viewBox="0 0 1 1"
      >
        <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
      </mask>

      {/* Online on Mobile */}
      <mask
        id="svg-mask-status-online-mobile"
        maskContentUnits="objectBoundingBox"
        viewBox="0 0 1 1"
      >
        <rect
          fill="white"
          x="0"
          y="0"
          width="1"
          height="1"
          rx="0.1875"
          ry="0.125"
        ></rect>
        <rect
          fill="black"
          x="0.125"
          y="0.16666666666666666"
          width="0.75"
          height="0.5"
        ></rect>
        <ellipse
          fill="black"
          cx="0.5"
          cy="0.8333333333333334"
          rx="0.125"
          ry="0.08333333333333333"
        ></ellipse>
      </mask>
    </svg>
  );
}

export function DiscordImageFallback() {
  return (
    <svg
      aria-hidden="true"
      role="img"
      width="80"
      height="80"
      viewBox="0 0 40 40"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="currentColor"
          fillOpacity=".8"
          d="M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
        ></path>
        <rect
          width="38"
          height="38"
          x="1"
          y="1"
          stroke="currentColor"
          strokeOpacity=".4"
          strokeWidth="2"
          rx="5"
        ></rect>
        <circle
          cx="7"
          cy="7"
          r="2"
          fill="currentColor"
          fillOpacity=".4"
        ></circle>
        <circle
          cx="7"
          cy="33"
          r="2"
          fill="currentColor"
          fillOpacity=".4"
        ></circle>
        <circle
          cx="33"
          cy="7"
          r="2"
          fill="currentColor"
          fillOpacity=".4"
        ></circle>
        <circle
          cx="33"
          cy="33"
          r="2"
          fill="currentColor"
          fillOpacity=".4"
        ></circle>
      </g>
    </svg>
  );
}
