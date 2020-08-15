import React from 'react';
import styled from 'styled-components';

const Animation = styled.g`
  @keyframes ld-fall {
    0% {
      transform: translate(0, 0px) rotate3d(1, 1, 1, 0deg);
    }
    100% {
      transform: translate(0, 975px) rotate3d(1, 1, 1, 1080deg);
    }
  }
  .ld.ld-fall {
    animation: ld-fall 4s linear infinite;
    animation: ld-fall 1s linear infinite;
  }
`;

const ConfettiWrap = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const LogoSVG = styled.svg`
  width: 100%;
  max-width: 500px;
`;

export const TouchIcon = () => (
  <TouchIconSVG viewBox="0 0 475 475">
    <path d="M377.7 187.3h-.7c-9.1-.1-17.9 3.3-24.7 9.4-5.5-15.2-19.4-26.1-35.8-26.1-10 .1-19.6 4.2-26.5 11.4-6.4-12.9-19.2-21.7-33.9-21.7h-.7c-7.9-.1-15.6 2.4-21.8 7.3v-92c0-22.2-17.3-40.3-38.4-40.3-21 0-38.3 18.1-38.3 40.3l-.2 182.6-10.3-12.5c-9.1-11.3-22.4-18.3-36.8-19.3-14.1-1-28 3.9-38.4 13.6l-9 7.4c-2.9 2.4-3.7 6.5-2 9.8l87.4 168c16 30.7 46.4 49.9 79.4 49.9h98.5v-.1c49.9 0 90.4-43.3 90.5-96.5 0-23.8-.1-41.6-.1-55.9.1-38.5 0-52.7-.1-95.1.1-22.3-17.1-40.2-38.1-40.2zM400 322.4c0 14.4 0 32.2-.1 56 0 44.4-33.6 80.6-74.7 80.6h-98c-27 0-52-15.9-65.2-41.3L77.6 255.5l4.2-3.5.3-.3c7.2-6.7 16.8-10.2 26.6-9.6 10 .8 19.3 5.7 25.6 13.5l24.5 29.8c2.1 2.6 5.7 3.6 8.9 2.5s5.3-4.1 5.3-7.5V75.6c0-13.4 10.2-24.3 22.4-24.3s22.4 10.9 22.4 24.3v178.2c0 4.4 3.6 8 8 8s8-3.6 8-8v-54.4c0-12.9 9.9-23.1 21.8-23.1h.7c12.2 0 22.4 10.7 22.4 24.1v48.3c0 4.4 3.6 8 8 8s8-3.6 8-8v-37.9c0-13.4 9.7-24.3 22-24.3 12.2 0 21.9 10.9 21.9 24.3v35.8c0 4.4 3.6 8 8 8s8-3.6 8-8v-19.4c0-13.4 10.2-23.9 22.5-23.9h.7c12.2 0 22.2 10.7 22.2 24.1v95z" />
    <path d="M131.7 79.1c4.4 0 8-3.6 8-8 .1-30.5 24.9-55.1 55.4-55.1s55.2 24.6 55.4 55.1c0 4.4 3.6 8 8 8s8-3.6 8-8C266.3 31.8 234.4 0 195.1 0c-39.3 0-71.2 31.8-71.4 71.1 0 4.4 3.6 8 8 8z" />
  </TouchIconSVG>
);

const TouchIconSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

export const LogoIconInCard = (props) => (
  <LogoSVG
    id="prefix__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 50.26 15.34"
    xmlSpace="preserve"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_5_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_6_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_7_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_8_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_9_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_10_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <linearGradient
        id="prefix__SVGID_11_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={11.039}
        x2={50.257}
        y2={11.039}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
    </defs>
    <path
      d="M.06 15.22c-.04 0-.06-.02-.06-.06l.02-8.24c0-.03.02-.05.05-.05h2.3c.74 0 1.32.22 1.75.67.43.45.64 1.06.64 1.82 0 .57-.11 1.06-.34 1.48-.22.42-.52.74-.88.96-.36.22-.75.34-1.18.34h-.9v3.02c0 .04-.02.06-.06.06H.06zm1.4-4.53h.91c.26 0 .48-.12.67-.37s.28-.56.28-.95c0-.31-.08-.57-.25-.77-.17-.2-.4-.3-.7-.3l-.91.01v2.38z"
      fill="url(#prefix__SVGID_1_)"
    />
    <path
      d="M5.06 15.22c-.03 0-.05-.02-.05-.06l.01-8.24c0-.03.02-.05.05-.05h3.85c.03 0 .05.02.05.06v1.34c0 .03-.02.05-.05.05H6.47v1.87h2.46c.03 0 .05.02.05.05l.01 1.36c0 .03-.02.05-.05.05H6.47v2.1h2.47c.03 0 .05.02.05.06v1.37c0 .03-.02.05-.05.05H5.06z"
      fill="url(#prefix__SVGID_2_)"
    />
    <path
      d="M9.35 15.22c-.03 0-.05-.02-.05-.06l.02-8.24c0-.03.02-.05.05-.05h2.42c.43 0 .83.11 1.19.32.36.21.65.5.87.85.22.36.32.76.32 1.21 0 .3-.04.56-.13.8s-.19.44-.31.6-.23.29-.32.37c.43.48.65 1.04.65 1.69l.01 2.46c0 .04-.02.06-.06.06h-1.36c-.03 0-.05-.01-.05-.04V12.7c0-.29-.1-.54-.31-.75a.997.997 0 00-.75-.32h-.79l-.01 3.53c0 .04-.02.06-.05.06H9.35zm1.41-5.03h1.03a.9.9 0 00.66-.28.9.9 0 00.29-.67.87.87 0 00-.28-.66.947.947 0 00-.67-.28h-1.03v1.89z"
      fill="url(#prefix__SVGID_3_)"
    />
    <path
      d="M16.82 15.34c-.43 0-.83-.11-1.18-.33-.36-.22-.64-.51-.85-.88s-.32-.77-.32-1.21v-.55c0-.04.02-.06.06-.06h1.34c.03 0 .05.02.05.06v.55c0 .26.09.49.26.68.18.19.39.28.64.28s.46-.1.64-.29c.18-.19.26-.42.26-.67 0-.3-.19-.55-.58-.77-.13-.07-.33-.18-.6-.34-.27-.15-.53-.3-.77-.43-.44-.26-.77-.58-.98-.97a2.73 2.73 0 01-.32-1.31c0-.45.11-.85.32-1.21.22-.36.5-.64.86-.85.36-.21.74-.31 1.16-.31.42 0 .81.11 1.17.32s.64.5.85.85c.21.36.32.75.32 1.19v.98c0 .03-.02.05-.05.05h-1.34c-.03 0-.05-.02-.05-.05l-.01-.98c0-.28-.09-.51-.26-.68a.832.832 0 00-.62-.26c-.25 0-.46.09-.64.28-.18.19-.26.41-.26.67 0 .26.06.48.17.66.11.18.32.34.61.5.04.02.12.07.23.13.12.06.24.13.38.2.14.08.26.14.37.2s.17.09.2.11c.4.22.72.5.95.82s.35.72.35 1.19A2.399 2.399 0 0118.01 15c-.36.23-.75.34-1.19.34z"
      fill="url(#prefix__SVGID_4_)"
    />
    <path
      d="M21.9 15.34c-.43 0-.83-.11-1.18-.33a2.5 2.5 0 01-.86-.88c-.22-.36-.32-.77-.32-1.21l.01-3.8a2.364 2.364 0 011.18-2.06c.36-.22.75-.32 1.18-.32.43 0 .82.11 1.18.32.35.22.63.5.85.86.21.36.32.76.32 1.2l.01 3.8c0 .44-.11.84-.32 1.21-.21.36-.5.66-.85.88-.37.22-.77.33-1.2.33zm0-1.45c.24 0 .45-.1.63-.29s.27-.42.27-.67l-.01-3.8c0-.26-.08-.49-.25-.67a.847.847 0 00-.64-.28.87.87 0 00-.64.27c-.17.18-.26.4-.26.67v3.8c0 .26.09.49.26.68.18.2.39.29.64.29z"
      fill="url(#prefix__SVGID_5_)"
    />
    <path
      d="M24.77 15.22c-.06 0-.1-.03-.1-.08l-.01-8.17c0-.06.03-.1.1-.1h1.08l2.03 4.73-.07-4.64c0-.06.04-.1.11-.1h1.19c.05 0 .07.03.07.1l.01 8.18c0 .05-.02.07-.06.07h-1.06l-2.08-4.42.08 4.32c0 .06-.04.1-.11.1h-1.18z"
      fill="url(#prefix__SVGID_6_)"
    />
    <path
      d="M29.52 15.16l1.49-8.24c.01-.03.03-.05.06-.05h1.74c.03 0 .05.02.06.05l1.43 8.24c.01.04-.01.06-.05.06h-1.33c-.03 0-.05-.02-.06-.06l-.13-.88H31.1l-.13.88c-.01.04-.03.06-.06.06h-1.33c-.04 0-.06-.02-.06-.06zM31.33 13h1.15l-.49-3.37-.07-.44-.05.44-.54 3.37z"
      fill="url(#prefix__SVGID_7_)"
    />
    <path
      d="M34.67 15.22c-.03 0-.05-.02-.05-.06l.01-8.23c0-.04.02-.06.06-.06h1.33c.04 0 .06.02.06.06l-.01 6.82h2.47c.04 0 .06.02.06.06v1.36c0 .04-.02.06-.06.06h-3.87z"
      fill="url(#prefix__SVGID_8_)"
    />
    <path
      d="M39.01 15.22c-.04 0-.06-.02-.06-.06l.01-8.24c0-.03.02-.05.05-.05h1.34c.03 0 .05.02.05.05l.01 8.24c0 .04-.02.06-.05.06h-1.35z"
      fill="url(#prefix__SVGID_9_)"
    />
    <path
      d="M42.38 15.22c-.03 0-.05-.02-.05-.06V8.32h-1.56c-.04 0-.06-.02-.06-.06l.01-1.34c0-.03.02-.05.05-.05h4.56c.04 0 .06.02.06.05v1.34c0 .04-.02.06-.05.06h-1.57l.01 6.84c0 .04-.02.06-.05.06h-1.35z"
      fill="url(#prefix__SVGID_10_)"
    />
    <path
      d="M47.22 15.22c-.02 0-.04-.02-.04-.05l.01-3.41-1.61-4.85c-.01-.03 0-.05.04-.05h1.33c.04 0 .06.02.07.05l.89 3.23.9-3.23c.01-.03.03-.05.06-.05h1.34c.03 0 .04.02.04.05l-1.62 4.8.01 3.46c0 .03-.02.05-.05.05h-1.37z"
      fill="url(#prefix__SVGID_11_)"
    />
    <g>
      <path
        fill={props.topTextInverse ? '#000' : '#fff'}
        d="M3.46 3.71c-.03.57-.19 1-.48 1.31-.29.3-.7.46-1.23.46s-.96-.2-1.27-.61C.16 4.46 0 3.91 0 3.21v-.96C0 1.55.16 1.01.48.6.81.2 1.25 0 1.81 0c.51 0 .91.15 1.19.46.28.31.43.75.46 1.32h-.68c-.03-.43-.12-.74-.27-.93-.15-.18-.39-.28-.7-.28-.37 0-.65.15-.84.43s-.29.7-.29 1.25v.98c0 .54.09.95.27 1.24.18.28.45.43.79.43.35 0 .6-.09.75-.26.15-.17.25-.48.28-.93h.69zM6.85 4h-1.8l-.41 1.4h-.69L5.67.07h.57L7.96 5.4h-.69L6.85 4zm-1.62-.57h1.45l-.73-2.42-.72 2.42zM10.29 3.24h-.94V5.4h-.67V.07h1.49c.52 0 .92.14 1.19.41.27.27.4.67.4 1.19 0 .33-.07.62-.22.86s-.35.43-.62.55l1.03 2.26v.06h-.72l-.94-2.16zm-.94-.57h.81c.28 0 .5-.09.67-.27.17-.18.25-.42.25-.73 0-.68-.31-1.03-.93-1.03h-.8v2.03zM12.66 5.4V.07h1.27c.62 0 1.1.19 1.45.58.34.39.52.94.52 1.64v.89c0 .7-.17 1.25-.52 1.63-.35.38-.85.58-1.52.58h-1.2zm.67-4.75v4.18h.54c.47 0 .81-.13 1.03-.4.22-.27.33-.67.33-1.2v-.95c0-.56-.11-.97-.32-1.24-.22-.26-.54-.39-.98-.39h-.6zM19.26 4.05c0-.27-.07-.47-.22-.61-.14-.14-.4-.28-.78-.41-.38-.13-.66-.27-.86-.42-.2-.15-.35-.32-.45-.5-.1-.19-.15-.41-.15-.65 0-.42.14-.77.42-1.04.29-.28.66-.42 1.12-.42.31 0 .59.07.83.21.24.14.43.33.56.58.13.25.2.52.2.82h-.67c0-.33-.08-.58-.24-.76-.16-.18-.39-.27-.68-.27-.27 0-.48.08-.63.23-.15.15-.22.36-.22.64 0 .23.08.41.24.56.16.15.41.29.75.41.52.16.89.38 1.12.63.23.25.34.59.34 1 0 .43-.14.78-.42 1.04-.28.26-.66.39-1.14.39-.31 0-.6-.07-.86-.2s-.48-.34-.62-.58c-.15-.25-.23-.53-.23-.84h.67c0 .33.09.58.28.77.18.18.43.27.75.27.29 0 .52-.08.67-.23.14-.15.22-.36.22-.62zM25.99 3.2c0 .73-.16 1.29-.46 1.68-.31.39-.75.59-1.32.59-.55 0-.98-.19-1.3-.57-.32-.38-.48-.92-.5-1.62v-1c0-.71.16-1.27.47-1.67C23.2.2 23.64 0 24.2 0s1 .19 1.31.58c.31.39.47.94.48 1.65v.97zm-.67-.93c0-.56-.09-.98-.28-1.26S24.58.6 24.2.6c-.37 0-.65.14-.84.42-.19.28-.28.69-.29 1.23v.95c0 .54.09.96.28 1.24.19.28.47.43.85.43s.65-.13.83-.39c.18-.26.27-.67.28-1.21v-1zM29.5 3.05h-1.8V5.4h-.67V.07h2.77v.57h-2.1v1.83h1.8v.58z"
      />
    </g>
  </LogoSVG>
);

export const LogoIcon = () => {
  return (
    <LogoSVG
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 50.26 12.2"
      xmlSpace="preserve"
      preserveAspectRatio="xMinYMin"
    >
      <style>{'.prefix__st11{fill:#fff}'}</style>
      <linearGradient
        id="prefix__SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M.06 12.08c-.04 0-.06-.02-.06-.06l.02-8.24c0-.03.02-.05.05-.05h2.3c.74 0 1.32.22 1.75.67.43.45.64 1.06.64 1.82 0 .57-.11 1.06-.34 1.48-.22.41-.51.73-.87.96-.36.22-.75.33-1.17.33h-.92v3.02c0 .04-.02.06-.06.06H.06zm1.4-4.54h.91c.26 0 .48-.12.67-.37s.28-.56.28-.95c0-.31-.08-.57-.25-.77-.17-.2-.4-.3-.7-.3l-.91.02v2.37z"
        fill="url(#prefix__SVGID_1_)"
      />
      <linearGradient
        id="prefix__SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M5.06 12.08c-.03 0-.05-.02-.05-.06l.01-8.24c0-.03.02-.05.05-.05h3.85c.03 0 .05.02.05.06v1.34c0 .03-.02.05-.05.05H6.47v1.87h2.46c.03 0 .05.02.05.05l.01 1.36c0 .03-.02.05-.05.05H6.47v2.1h2.47c.03 0 .05.02.05.06v1.37c0 .03-.02.05-.05.05H5.06z"
        fill="url(#prefix__SVGID_2_)"
      />
      <linearGradient
        id="prefix__SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M9.35 12.08c-.03 0-.05-.02-.05-.06l.02-8.24c0-.03.02-.05.05-.05h2.42c.43 0 .83.11 1.19.32.36.21.65.5.87.85.22.36.32.76.32 1.21 0 .3-.04.56-.13.8s-.19.44-.31.6-.23.29-.32.37c.43.48.65 1.04.65 1.69l.01 2.46c0 .04-.02.06-.06.06h-1.36c-.03 0-.05-.01-.05-.04V9.56c0-.29-.1-.54-.31-.75a.997.997 0 00-.75-.32h-.79l-.01 3.53c0 .04-.02.06-.05.06H9.35zm1.41-5.03h1.03a.9.9 0 00.66-.28.9.9 0 00.29-.67.87.87 0 00-.28-.66.947.947 0 00-.67-.28h-1.03v1.89z"
        fill="url(#prefix__SVGID_3_)"
      />
      <linearGradient
        id="prefix__SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M16.82 12.2c-.43 0-.83-.11-1.18-.33-.36-.22-.64-.51-.85-.88s-.32-.77-.32-1.21v-.55c0-.04.02-.06.06-.06h1.34c.03 0 .05.02.05.06v.55c0 .26.09.49.26.68.18.19.39.28.64.28s.46-.1.64-.29c.18-.19.26-.42.26-.67 0-.3-.19-.55-.58-.77-.13-.07-.33-.18-.6-.34-.27-.15-.53-.3-.77-.43-.44-.26-.77-.58-.98-.97a2.73 2.73 0 01-.32-1.31c0-.45.11-.85.32-1.21.22-.36.5-.64.86-.85.36-.21.74-.31 1.16-.31.42 0 .81.11 1.17.32s.64.5.85.85c.21.36.32.75.32 1.19v.98c0 .03-.02.05-.05.05h-1.34c-.03 0-.05-.02-.05-.05l-.01-.98c0-.28-.09-.51-.26-.68a.832.832 0 00-.62-.26c-.25 0-.46.09-.64.28-.18.19-.26.41-.26.67 0 .26.06.48.17.66.11.18.32.34.61.5.04.02.12.07.23.13.12.06.24.13.38.2.14.08.26.14.37.2s.17.09.2.11c.4.22.72.5.95.82s.35.72.35 1.19a2.399 2.399 0 01-1.17 2.09c-.36.23-.75.34-1.19.34z"
        fill="url(#prefix__SVGID_4_)"
      />
      <linearGradient
        id="prefix__SVGID_5_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M21.9 12.2c-.43 0-.83-.11-1.18-.33a2.5 2.5 0 01-.86-.88c-.22-.36-.32-.77-.32-1.21l.01-3.8a2.364 2.364 0 011.18-2.06c.36-.22.75-.32 1.18-.32.43 0 .82.11 1.18.32.35.22.63.5.85.86.21.36.32.76.32 1.2l.01 3.8c0 .44-.11.84-.32 1.21-.21.36-.5.66-.85.88-.37.22-.77.33-1.2.33zm0-1.45c.24 0 .45-.1.63-.29s.27-.42.27-.67l-.01-3.8c0-.26-.08-.49-.25-.67a.847.847 0 00-.64-.28.87.87 0 00-.64.27.92.92 0 00-.26.67v3.8c0 .26.09.49.26.68.18.19.39.29.64.29z"
        fill="url(#prefix__SVGID_5_)"
      />
      <linearGradient
        id="prefix__SVGID_6_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M24.77 12.08c-.06 0-.1-.03-.1-.08l-.01-8.17c0-.06.03-.1.1-.1h1.08l2.03 4.73-.07-4.64c0-.06.04-.1.11-.1h1.19c.05 0 .07.03.07.1l.01 8.18c0 .05-.02.07-.06.07h-1.06l-2.08-4.42.08 4.32c0 .06-.04.1-.11.1h-1.18z"
        fill="url(#prefix__SVGID_6_)"
      />
      <linearGradient
        id="prefix__SVGID_7_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M29.52 12.02l1.49-8.24c.01-.03.03-.05.06-.05h1.74c.03 0 .05.02.06.05l1.43 8.24c.01.04-.01.06-.05.06h-1.33c-.03 0-.05-.02-.06-.06l-.13-.88H31.1l-.13.88c-.01.04-.03.06-.06.06h-1.33c-.04 0-.06-.02-.06-.06zm1.81-2.16h1.15l-.49-3.37-.07-.44-.05.44-.54 3.37z"
        fill="url(#prefix__SVGID_7_)"
      />
      <linearGradient
        id="prefix__SVGID_8_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M34.67 12.08c-.03 0-.05-.02-.05-.06l.01-8.23c0-.04.02-.06.06-.06h1.33c.04 0 .06.02.06.06l-.01 6.82h2.47c.04 0 .06.02.06.06v1.36c0 .04-.02.06-.06.06h-3.87z"
        fill="url(#prefix__SVGID_8_)"
      />
      <linearGradient
        id="prefix__SVGID_9_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M39.01 12.08c-.04 0-.06-.02-.06-.06l.01-8.24c0-.03.02-.05.05-.05h1.34c.03 0 .05.02.05.05l.01 8.24c0 .04-.02.06-.05.06h-1.35z"
        fill="url(#prefix__SVGID_9_)"
      />
      <linearGradient
        id="prefix__SVGID_10_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M42.38 12.08c-.03 0-.05-.02-.05-.06V5.18h-1.56c-.04 0-.06-.02-.06-.06l.01-1.34c0-.03.02-.05.05-.05h4.56c.04 0 .06.02.06.05v1.34c0 .04-.02.06-.05.06h-1.57l.01 6.84c0 .04-.02.06-.05.06h-1.35z"
        fill="url(#prefix__SVGID_10_)"
      />
      <linearGradient
        id="prefix__SVGID_11_"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={7.896}
        x2={50.257}
        y2={7.896}
      >
        <stop offset={0} stopColor="#40e0d0" />
        <stop offset={0.255} stopColor="#a3b464" />
        <stop offset={0.5} stopColor="#ff8c00" />
        <stop offset={0.664} stopColor="#ff5a2e" />
        <stop offset={0.892} stopColor="#ff1969" />
        <stop offset={1} stopColor="#ff0080" />
      </linearGradient>
      <path
        d="M47.22 12.08c-.02 0-.04-.02-.04-.05l.01-3.41-1.61-4.85c-.01-.03 0-.05.04-.05h1.33c.04 0 .06.02.07.05L47.91 7l.9-3.23c.01-.03.03-.05.06-.05h1.34c.03 0 .04.02.04.05l-1.62 4.8.01 3.46c0 .03-.02.05-.05.05h-1.37z"
        fill="url(#prefix__SVGID_11_)"
      />
      <g>
        <path
          className="prefix__st11"
          d="M4.9 2.37c-.02.36-.12.64-.31.84-.19.19-.45.29-.79.29s-.61-.13-.81-.39c-.2-.26-.3-.61-.3-1.06v-.61c0-.44.1-.79.31-1.05.2-.26.48-.39.84-.39.33 0 .58.1.76.29.18.2.28.48.29.84h-.43C4.45.86 4.39.66 4.29.54S4.04.36 3.84.36c-.23 0-.41.09-.54.27s-.19.45-.19.8v.62c0 .34.06.61.17.79.13.2.3.29.52.29.22 0 .38-.06.48-.17s.16-.31.18-.6h.44zM7.06 2.56H5.91l-.26.89h-.44l1.1-3.4h.37l1.1 3.4h-.45l-.27-.89zm-1.03-.37h.93L6.49.65l-.46 1.54zM9.27 2.07h-.6v1.38h-.43V.05h.95c.33 0 .59.09.76.26.17.17.26.43.26.76 0 .21-.05.39-.14.55-.1.16-.23.28-.4.36l.66 1.45v.03h-.46l-.6-1.39zm-.6-.36h.52c.18 0 .32-.06.43-.17.11-.12.16-.27.16-.46 0-.44-.2-.66-.59-.66h-.52v1.29zM10.78 3.45V.05h.81c.4 0 .71.12.93.37s.33.6.33 1.05v.57c0 .45-.11.8-.33 1.04-.22.25-.55.37-.97.37h-.77zm.43-3.04v2.67h.34c.3 0 .52-.09.66-.26s.21-.43.21-.77v-.6c0-.36-.07-.62-.21-.79-.14-.17-.35-.25-.63-.25h-.37zM15 2.59c0-.17-.05-.3-.14-.39-.09-.09-.26-.18-.5-.26-.24-.09-.42-.18-.55-.27a.973.973 0 01-.29-.32.928.928 0 01-.09-.42c0-.27.09-.49.27-.67.18-.17.42-.26.71-.26.2 0 .38.04.53.13.16.09.28.21.36.37.08.16.13.33.13.52H15c0-.21-.05-.37-.15-.49-.1-.12-.25-.17-.44-.17-.17 0-.31.05-.4.15-.1.1-.14.23-.14.41 0 .14.05.26.15.36s.26.18.48.26c.34.11.57.25.72.41.14.16.22.37.22.64 0 .28-.09.5-.27.66s-.43.25-.74.25c-.2 0-.38-.04-.55-.13s-.3-.21-.4-.36a.99.99 0 01-.14-.54h.43c0 .21.06.37.18.49s.28.18.48.18c.19 0 .33-.05.43-.15.09-.1.14-.23.14-.4zM19.3 2.05c0 .46-.1.82-.3 1.07-.2.25-.48.38-.84.38-.35 0-.63-.12-.83-.37-.2-.24-.31-.59-.32-1.03v-.64c0-.46.1-.81.3-1.07.21-.26.49-.39.85-.39s.64.12.84.37c.2.25.3.6.31 1.06v.62zm-.42-.6c0-.36-.06-.63-.18-.8s-.3-.26-.54-.26c-.24 0-.41.09-.53.27-.12.18-.18.44-.18.79v.61c0 .35.06.61.18.79.12.18.3.27.54.27s.42-.08.53-.25.18-.43.18-.77v-.65zM21.54 1.95h-1.15v1.5h-.43V.05h1.77v.37h-1.34v1.17h1.15v.36z"
        />
      </g>
    </LogoSVG>
  );
};

export const SendIcon = () => {
  return (
    <svg height={24} viewBox="0 0 512.005 512.005" width={24}>
      <path d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
    </svg>
  );
};

export const ChatIcon = () => {
  return (
    <svg viewBox="0 0 512.001 512.001" width="24" height="24">
      <path d="M468.53 306.575c-4.14-10.239-15.798-15.188-26.038-11.046-10.241 4.14-15.187 15.797-11.047 26.038L455 379.833l-69.958-30.839a20.002 20.002 0 00-15.917-.095c-23.908 10.201-49.52 15.373-76.124 15.373-107.073 0-179-83.835-179-162.136 0-89.402 80.299-162.136 179-162.136s179 72.734 179 162.136c0 6.975-.65 15.327-1.781 22.913-1.63 10.925 5.905 21.102 16.83 22.732 10.926 1.634 21.103-5.905 22.732-16.83 1.431-9.59 2.219-19.824 2.219-28.815 0-54.33-23.006-105.308-64.783-143.543C405.936 20.809 351.167 0 293.001 0S180.067 20.809 138.784 58.592c-37.332 34.168-59.66 78.516-63.991 126.335C27.836 216.023.001 265.852.001 319.525c0 33.528 10.563 65.34 30.67 92.717L1.459 484.504a19.998 19.998 0 004.621 21.855 19.989 19.989 0 0021.988 3.942l84.229-37.13c21.188 7.887 43.585 11.88 66.703 11.88.5 0 .991-.039 1.482-.075 33.437-.253 65.944-9.048 94.098-25.507 25.218-14.744 45.962-34.998 60.505-58.917a230.144 230.144 0 0041.547-11.551l107.301 47.3a20 20 0 0021.989-3.942 19.998 19.998 0 004.621-21.855L468.53 306.575zM179.002 445c-.273 0-.539.03-.81.041-20.422-.104-40.078-4.118-58.435-11.95a19.991 19.991 0 00-15.916.095l-46.837 20.646 15.109-37.375a20.001 20.001 0 00-3.322-20.47c-18.835-22.097-28.79-48.536-28.79-76.462 0-31.961 13.445-62.244 36.969-85.206 7.324 39.925 27.989 78.117 59.162 108.119 38.791 37.333 90.101 58.961 145.506 61.565C255.626 429.608 218.402 445 179.002 445z" />
      <circle cx={292.001} cy={203} r={20} />
      <circle cx={372.001} cy={203} r={20} />
      <circle cx={212.001} cy={203} r={20} />
    </svg>
  );
};

export const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{transform: 'rotate(-180deg)'}}
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
  </svg>
);

export const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 896 896"
  >
    <title>Copy to Clipboard</title>
    <path d="M803.1 0H299.9C248.6 0 207 41.6 207 92.9V206H80c-44.2 0-80 35.8-80 80v530c0 44.2 35.8 80 80 80h530c44.2 0 80-35.8 80-80V690h113.1c51.3 0 92.9-41.6 92.9-92.9V92.9C896 41.6 854.4 0 803.1 0zM610 836H80c-11 0-20-9-20-20V286c0-11 9-20 20-20h530c11 0 20 9 20 20v530c0 11-9 20-20 20zm227-238.9c0 18.2-14.7 32.9-32.9 32.9H691V286c0-44.2-35.8-80-80-80H267V92.9c0-18.2 14.7-32.9 32.9-32.9h504.2c18.2 0 32.9 14.7 32.9 32.9v504.2z" />
    <path d="M478.4 431H213c-15.8 0-29.4 12-30.5 27.8-1.2 16.5 11.2 30.9 27.7 32.2.7.1 1.5.1 2.2.1h265.4c15.8 0 29.4-12 30.5-27.8 1.2-16.5-11.2-30.9-27.7-32.2-.7-.1-1.5-.1-2.2-.1zm0 180H213c-15.8 0-29.4 12-30.5 27.8-1.2 16.5 11.2 30.9 27.7 32.2.7.1 1.5.1 2.2.1h265.4c15.8 0 29.4-12 30.5-27.8 1.2-16.5-11.2-30.9-27.7-32.2-.7-.1-1.5-.1-2.2-.1z" />
  </svg>
);

export const Confetti = () => {
  return (
    <ConfettiWrap>
      <svg
        viewBox="0 0 1920 975"
        preserveAspectRatio="xMidYMid"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '170%',
          height: '100%',
          zIndex: 1,
          transform: 'rotate(0deg) translate(-50%, -50%)',
        }}
        width={1920}
      >
        <Animation transform="">
          <g transform="translate(0 280.64502622999976)">
            <g transform="translate(76.2029048431485 0)">
              <g className="ld ld-fall" style={{animationDuration: '4s'}}>
                <rect
                  x="-4.766917699735915"
                  y="-3.724911285515274"
                  width="9.53383539947183"
                  height="7.449822571030548"
                  style={{transform: 'scale(2.1307603942302493)'}}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(628.0554446854591 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.7470992967912595s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.385346399205986"
                  y="-5.23057512338983"
                  width="10.770692798411972"
                  height="10.46115024677966"
                  style={{transform: 'scale(2.197907727729092)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1051.3620322331099 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.4579212511984165s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.91759665244505"
                  y="-4.51774604191513"
                  width="11.8351933048901"
                  height="9.03549208383026"
                  style={{transform: 'scale(3.161016626197947)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(197.50809593099277 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.646560186619931s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-4.935759358914048"
                  y="-4.4359853657190165"
                  width="9.871518717828096"
                  height="8.871970731438033"
                  style={{transform: 'scale(2.143083943018241)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1620.8886042837612 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.09466551055122574s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.87732689253551"
                  y="-5.792892369613526"
                  width="11.75465378507102"
                  height="11.585784739227051"
                  style={{transform: 'scale(1.622749109220245)'}}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(991.0627449040005 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.15446009320468024s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.505695261182713"
                  y="-4.751648919600823"
                  width="7.011390522365426"
                  height="9.503297839201647"
                  style={{transform: 'scale(1.6292185027420265)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1756.5070976956194 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.5738872174155385s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.3953195716162723"
                  y="-3.4366623488460197"
                  width="6.790639143232545"
                  height="6.8733246976920395"
                  style={{transform: 'scale(1.747533585264248)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1014.7016776805981 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.141055090989739s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.341113502865551"
                  y="-5.001523728022294"
                  width="10.682227005731102"
                  height="10.003047456044587"
                  style={{transform: 'scale(2.1751275615796217)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1410.2273868037555 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.829981476087561s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-5.379822474262539"
                  y="-5.953396594524586"
                  width="10.759644948525079"
                  height="11.906793189049171"
                  style={{transform: 'scale(2.9237102433014863)'}}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(586.9440078056334 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-3.9565762604952512s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.5901591812415736"
                  y="-3.07085784537849"
                  width="7.180318362483147"
                  height="6.14171569075698"
                  style={{transform: 'scale(1.8314767165361232)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(445.7556920516471 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.7659655618660128s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.062990563649949"
                  y="-3.8261086152029247"
                  width="6.125981127299898"
                  height="7.652217230405849"
                  style={{transform: 'scale(2.1245527387942995)'}}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(1539.4255843307699 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.8771358321204001s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.7645820767203837"
                  y="-5.70478297013469"
                  width="7.529164153440767"
                  height="11.40956594026938"
                  style={{transform: 'scale(3.0219071854295314)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1142.6378786357247 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.2969254611136622s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-4.439373490258488"
                  y="-5.247411437061523"
                  width="8.878746980516976"
                  height="10.494822874123045"
                  style={{transform: 'scale(2.9996217441770923)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1399.8656445826484 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.6360366684262928s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-4.331047636309998"
                  y="-3.159366225853575"
                  width="8.662095272619997"
                  height="6.31873245170715"
                  style={{transform: 'scale(3.430285106529233)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(480.3805511379741 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.8922942102492648s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-3.4383800843186316"
                  y="-3.0336845405802433"
                  width="6.876760168637263"
                  height="6.067369081160487"
                  style={{transform: 'scale(3.356727549917121)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1805.3671328834114 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.8345914247479413s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.599462632668674"
                  y="-5.466915420778446"
                  width="11.198925265337348"
                  height="10.933830841556892"
                  style={{transform: 'scale(3.411664005259214)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1357.8488717950556 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.005727121274387681s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.124860049845679"
                  y="-4.539097708475467"
                  width="10.249720099691357"
                  height="9.078195416950933"
                  style={{transform: 'scale(3.080357051701965)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(889.1585333118096 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.423841286913516s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-4.4336118354137195"
                  y="-4.5937034382157185"
                  width="8.867223670827439"
                  height="9.187406876431437"
                  style={{transform: 'scale(1.5449802804899784)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1092.6925456393806 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.8402238975998677s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.927060731280971"
                  y="-4.53108039680051"
                  width="11.854121462561942"
                  height="9.06216079360102"
                  style={{transform: 'scale(2.7288238761622727)'}}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
            <g transform="translate(23.462443001555613 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.717028752015708s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.529500586609534"
                  y="-3.710866378498138"
                  width="11.059001173219068"
                  height="7.421732756996276"
                  style={{transform: 'scale(2.432681944289455)'}}
                  fill="#f7d038"
                ></rect>
              </g>
            </g>
            <g transform="translate(755.7601430358387 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.922335006088033s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-5.931553146929144"
                  y="-5.517587911370663"
                  width="11.863106293858287"
                  height="11.035175822741326"
                  style={{transform: 'scale(2.0555571130285837)'}}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(884.9492040499341 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-3.914737327332583s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-4.172510102298994"
                  y="-5.824924834703157"
                  width="8.345020204597988"
                  height="11.649849669406313"
                  style={{transform: 'scale(1.974070707032764)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1076.6799842771647 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-3.341456023608722s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-3.0160576840794606"
                  y="-3.5085869465315205"
                  width="6.032115368158921"
                  height="7.017173893063041"
                  style={{transform: 'scale(3.128453487798505)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1184.3498593796762 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.2902468654198831s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.570009077532047"
                  y="-3.531299668616427"
                  width="11.140018155064094"
                  height="7.062599337232854"
                  style={{transform: 'scale(3.4107272648618956)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1265.9790215361709 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.17088379492074646s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.56954988020458"
                  y="-5.137204312598396"
                  width="11.13909976040916"
                  height="10.274408625196791"
                  style={{transform: 'scale(1.9230427441734217)'}}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
          </g>
          <g transform="translate(0 -694.3549737700002)">
            <g transform="translate(76.2029048431485 0)">
              <g className="ld ld-fall" style={{animationDuration: '4s'}}>
                <rect
                  x="-4.766917699735915"
                  y="-3.724911285515274"
                  width="9.53383539947183"
                  height="7.449822571030548"
                  style={{transform: 'scale(2.1307603942302493)'}}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(628.0554446854591 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.7470992967912595s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.385346399205986"
                  y="-5.23057512338983"
                  width="10.770692798411972"
                  height="10.46115024677966"
                  style={{transform: 'scale(2.197907727729092)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1051.3620322331099 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.4579212511984165s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.91759665244505"
                  y="-4.51774604191513"
                  width="11.8351933048901"
                  height="9.03549208383026"
                  style={{transform: 'scale(3.161016626197947)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(197.50809593099277 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.646560186619931s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-4.935759358914048"
                  y="-4.4359853657190165"
                  width="9.871518717828096"
                  height="8.871970731438033"
                  style={{transform: 'scale(2.143083943018241)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1620.8886042837612 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.09466551055122574s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.87732689253551"
                  y="-5.792892369613526"
                  width="11.75465378507102"
                  height="11.585784739227051"
                  style={{transform: 'scale(1.622749109220245)'}}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(991.0627449040005 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.15446009320468024s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.505695261182713"
                  y="-4.751648919600823"
                  width="7.011390522365426"
                  height="9.503297839201647"
                  style={{transform: 'scale(1.6292185027420265)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1756.5070976956194 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.5738872174155385s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.3953195716162723"
                  y="-3.4366623488460197"
                  width="6.790639143232545"
                  height="6.8733246976920395"
                  style={{transform: 'scale(1.747533585264248)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1014.7016776805981 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.141055090989739s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.341113502865551"
                  y="-5.001523728022294"
                  width="10.682227005731102"
                  height="10.003047456044587"
                  style={{transform: 'scale(2.1751275615796217)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1410.2273868037555 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.829981476087561s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-5.379822474262539"
                  y="-5.953396594524586"
                  width="10.759644948525079"
                  height="11.906793189049171"
                  style={{transform: 'scale(2.9237102433014863)'}}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(586.9440078056334 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-3.9565762604952512s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.5901591812415736"
                  y="-3.07085784537849"
                  width="7.180318362483147"
                  height="6.14171569075698"
                  style={{transform: 'scale(1.8314767165361232)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(445.7556920516471 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.7659655618660128s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.062990563649949"
                  y="-3.8261086152029247"
                  width="6.125981127299898"
                  height="7.652217230405849"
                  style={{transform: 'scale(2.1245527387942995)'}}
                  fill="#4355db"
                ></rect>
              </g>
            </g>
            <g transform="translate(1539.4255843307699 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.8771358321204001s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-3.7645820767203837"
                  y="-5.70478297013469"
                  width="7.529164153440767"
                  height="11.40956594026938"
                  style={{transform: 'scale(3.0219071854295314)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1142.6378786357247 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.2969254611136622s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-4.439373490258488"
                  y="-5.247411437061523"
                  width="8.878746980516976"
                  height="10.494822874123045"
                  style={{transform: 'scale(2.9996217441770923)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1399.8656445826484 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.6360366684262928s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-4.331047636309998"
                  y="-3.159366225853575"
                  width="8.662095272619997"
                  height="6.31873245170715"
                  style={{transform: 'scale(3.430285106529233)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(480.3805511379741 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.8922942102492648s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-3.4383800843186316"
                  y="-3.0336845405802433"
                  width="6.876760168637263"
                  height="6.067369081160487"
                  style={{transform: 'scale(3.356727549917121)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1805.3671328834114 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.8345914247479413s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.599462632668674"
                  y="-5.466915420778446"
                  width="11.198925265337348"
                  height="10.933830841556892"
                  style={{transform: 'scale(3.411664005259214)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1357.8488717950556 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.005727121274387681s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.124860049845679"
                  y="-4.539097708475467"
                  width="10.249720099691357"
                  height="9.078195416950933"
                  style={{transform: 'scale(3.080357051701965)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(889.1585333118096 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.423841286913516s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-4.4336118354137195"
                  y="-4.5937034382157185"
                  width="8.867223670827439"
                  height="9.187406876431437"
                  style={{transform: 'scale(1.5449802804899784)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1092.6925456393806 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.8402238975998677s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.927060731280971"
                  y="-4.53108039680051"
                  width="11.854121462561942"
                  height="9.06216079360102"
                  style={{transform: 'scale(2.7288238761622727)'}}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
            <g transform="translate(23.462443001555613 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.717028752015708s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.529500586609534"
                  y="-3.710866378498138"
                  width="11.059001173219068"
                  height="7.421732756996276"
                  style={{transform: 'scale(2.432681944289455)'}}
                  fill="#f7d038"
                ></rect>
              </g>
            </g>
            <g transform="translate(755.7601430358387 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-1.922335006088033s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-5.931553146929144"
                  y="-5.517587911370663"
                  width="11.863106293858287"
                  height="11.035175822741326"
                  style={{transform: 'scale(2.0555571130285837)'}}
                  fill="#34bbe6"
                ></rect>
              </g>
            </g>
            <g transform="translate(884.9492040499341 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-3.914737327332583s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-4.172510102298994"
                  y="-5.824924834703157"
                  width="8.345020204597988"
                  height="11.649849669406313"
                  style={{transform: 'scale(1.974070707032764)'}}
                  fill="#d23be7"
                ></rect>
              </g>
            </g>
            <g transform="translate(1076.6799842771647 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-3.341456023608722s',
                  animationDuration: '4s',
                }}
              >
                <rect
                  x="-3.0160576840794606"
                  y="-3.5085869465315205"
                  width="6.032115368158921"
                  height="7.017173893063041"
                  style={{transform: 'scale(3.128453487798505)'}}
                  fill="#eb7532"
                ></rect>
              </g>
            </g>
            <g transform="translate(1184.3498593796762 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.2902468654198831s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.570009077532047"
                  y="-3.531299668616427"
                  width="11.140018155064094"
                  height="7.062599337232854"
                  style={{transform: 'scale(3.4107272648618956)'}}
                  fill="#e6261f"
                ></rect>
              </g>
            </g>
            <g transform="translate(1265.9790215361709 0)">
              <g
                className="ld ld-fall"
                style={{
                  animationDelay: '-0.17088379492074646s',
                  animationDuration: '2s',
                }}
              >
                <rect
                  x="-5.56954988020458"
                  y="-5.137204312598396"
                  width="11.13909976040916"
                  height="10.274408625196791"
                  style={{transform: 'scale(1.9230427441734217)'}}
                  fill="#a3e048"
                ></rect>
              </g>
            </g>
          </g>
        </Animation>
      </svg>
    </ConfettiWrap>
  );
};

export const HelpIcon = () => (
  <svg viewBox="0 0 512 512" width="20" height="20">
    <circle cx={256} cy={378.5} r={25} />
    <path d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z" />
    <path d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z" />
  </svg>
);

export const PlusIcon = () => (
  <svg viewBox="0 0 512 512" width="25" height="25">
    <path d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM256 472c-119.102 0-216-96.898-216-216S136.898 40 256 40s216 96.898 216 216-96.898 216-216 216zm20-236.02h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0" />
  </svg>
);

export const MinusIcon = () => (
  <svg viewBox="0 0 512 512" width="25" height="25">
    <path d="M256 0C114.853 0 0 114.833 0 256s114.853 256 256 256c141.167 0 256-114.833 256-256S397.147 0 256 0zm0 472.341c-119.295 0-216.341-97.046-216.341-216.341S136.705 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z" />
    <path d="M355.148 234.386H156.852c-10.946 0-19.83 8.884-19.83 19.83s8.884 19.83 19.83 19.83h198.296c10.946 0 19.83-8.884 19.83-19.83s-8.884-19.83-19.83-19.83z" />
  </svg>
);
