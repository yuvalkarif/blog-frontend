import InlineSVG from "svg-inline-react";

export default function Loading() {
  const svgSource = `<?xml version="1.0" encoding="utf-8"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="30" cy="50" fill="#2aa7c9" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1.1111111111111112s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5555555555555556s"></animate>
    </circle>
    <circle cx="70" cy="50" fill="#f91a10" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1.1111111111111112s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"></animate>
    </circle>
    <circle cx="30" cy="50" fill="#2aa7c9" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1.1111111111111112s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5555555555555556s"></animate>
      <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1.1111111111111112s" repeatCount="indefinite"></animate>
    </circle>
   </svg>`;
  return (
    <>
      <InlineSVG src={svgSource}></InlineSVG>
    </>
  );
}
