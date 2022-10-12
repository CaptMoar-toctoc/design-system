import React from "react";
interface DownloadButtonProps {
  fill?: string,
  height?: number,
  width?: number
}

function DownloadIcon({ fill = '#3200C1', height = 20, width = 20 }: DownloadButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M6.277 8.152a.625.625 0 01.884 0L10 10.992l2.84-2.84a.625.625 0 01.883.884l-3.281 3.28a.625.625 0 01-.884 0l-3.281-3.28a.625.625 0 010-.884z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10 2.5c.345 0 .625.28.625.625v8.75a.625.625 0 11-1.25 0v-8.75c0-.345.28-.625.625-.625z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M3.125 11.25c.345 0 .625.28.625.625v4.375h12.5v-4.375a.625.625 0 111.25 0v4.375a1.25 1.25 0 01-1.25 1.25H3.75a1.25 1.25 0 01-1.25-1.25v-4.375c0-.345.28-.625.625-.625z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default DownloadIcon;