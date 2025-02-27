import * as React from 'react';
import { IconSvgProps } from '@/types';

// https://icon-sets.iconify.design

export const TwitterIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'
        fill='currentColor'
      />
    </svg>
  );
};

export const FacebookIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95'
    />
  </svg>
);

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
      fill='currentColor'
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g fill='currentColor'>
      <path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
      <path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
    </g>
  </svg>
);

export const ArrowRightIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 16 9'
    width={size || width}
    {...props}
  >
    <path
      fill='currentColor'
      d='M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5'
    />
    <path
      fill='currentColor'
      d='M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z'
    />
  </svg>
);

export const LogosOpensource = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || width}
      height={size || height}
      viewBox='0 0 256 248'
      {...props}
    >
      <path
        fill='currentColor'
        d='M143.337 167.832c22.063-8.473 33.082-33.231 24.612-55.301c-8.47-22.07-33.222-33.092-55.284-24.62c-22.063 8.473-33.081 33.232-24.612 55.302a42.796 42.796 0 0 0 24.612 24.619l-28.823 75.13C20.3 218.564-11.44 147.26 12.949 83.698c24.389-63.562 95.67-95.311 159.212-70.915c63.541 24.397 95.281 95.7 70.892 159.262a123.254 123.254 0 0 1-70.892 70.915z'
      ></path>
    </svg>
  );
};

export const MoneyIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || width}
    height={size || height}
    viewBox='0 0 56 56'
    {...props}
  >
    <path
      fill='currentColor'
      d='M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52S4 41.255 4 28S14.745 4 28 4m0 4C16.954 8 8 16.954 8 28s8.954 20 20 20s20-8.954 20-20S39.046 8 28 8m.573 6.286v2.687c3.976.319 6.855 2.704 6.982 6.314h-3.308c-.207-2.004-1.638-3.165-3.674-3.419V26.5l.764.19c4.183.971 6.473 2.689 6.473 6.076c0 3.897-3.181 6.107-7.237 6.394v2.671h-1.797V39.16c-4.04-.303-7.236-2.577-7.347-6.394h3.292c.286 1.861 1.495 3.229 4.055 3.5V29.33l-.652-.16c-4.04-.937-6.218-2.75-6.218-5.979c0-3.563 2.862-5.916 6.87-6.219v-2.687zm0 15.458v6.537c2.72-.207 3.865-1.495 3.865-3.197c0-1.638-.89-2.608-3.865-3.34m-1.797-9.876c-2.29.286-3.499 1.606-3.499 3.054c0 1.447.955 2.512 3.5 3.149z'
    />
  </svg>
);

export const ExperimentIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M5 21q-1.275 0-1.812-1.137t.262-2.113L9 11V5H8q-.425 0-.712-.288T7 4q0-.425.288-.712T8 3h8q.425 0 .713.288T17 4q0 .425-.288.713T16 5h-1v6l5.55 6.75q.8.975.263 2.113T19 21zm2-3h10l-3.4-4h-3.2zm-2 1h14l-6-7.3V5h-2v6.7zm7-7'
    />
  </svg>
);

export const LanguageIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || width}
    height={size || height}
    viewBox='0 0 36 36'
    {...props}
  >
    <path fill='currentColor' d='m11 16.5l-1 3.1h2z' />
    <path
      fill='currentColor'
      d='M30.3 3h-16v5h4v2h-13c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1h6.7v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3M13.1 22.9l-.5-1.6H9.5l-.6 1.6H6.5L9.8 14h2.4l3.3 8.9zM28.3 15v2c-1.3 0-2.7-.4-3.9-1c-1.2.6-2.6.9-4 1l-.1-2c.7 0 1.4-.1 2.1-.3c-.9-.9-1.5-2-1.8-3.2h2.1c.3.9.9 1.6 1.6 2.2c1.1-.9 1.8-2.2 1.9-3.7h-6V8h3V6h2v2h3.3l.1 1c.1 2.1-.7 4.2-2.2 5.7c.7.2 1.3.3 1.9.3'
    />
    <path fill='none' d='M0 0h36v36H0z' />
  </svg>
);

export const ResultIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      fill='currentColor'
      d='M14 23h8v2h-8zm-4 0h2v2h-2zm4-5h8v2h-8zm-4 0h2v2h-2zm4-5h8v2h-8zm-4 0h2v2h-2z'
    />
    <path
      fill='currentColor'
      d='M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z'
    />
  </svg>
);

export const PersonIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z'
    />
  </svg>
);

export const InfoIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22'
    />
  </svg>
);

export const ChevronRightLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={height || size}
    role='presentation'
    viewBox='0 0 24 24'
    width={width || size}
    {...props}
  >
    <path
      d='M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='1.5'
    />
  </svg>
);

export const PlusLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    >
      <path d='M6 12h12' />
      <path d='M12 18V6' />
    </g>
  </svg>
);

export const EditIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    {...props}
  >
    <g fill='none'>
      <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
      <path
        fill='currentColor'
        d='M13 3a1 1 0 0 1 .117 1.993L13 5H5v14h14v-8a1 1 0 0 1 1.993-.117L21 11v8a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm6.243.343a1 1 0 0 1 1.497 1.32l-.083.095l-9.9 9.899a1 1 0 0 1-1.497-1.32l.083-.094z'
      />
    </g>
  </svg>
);

export const DeleteIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M7.615 20q-.69 0-1.152-.462T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152T16.385 20zm2.193-3h1V8h-1zm3.384 0h1V8h-1z'
    />
  </svg>
);

export const HeartBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z'
      fill='currentColor'
    />
  </svg>
);

export const PDFIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 15 15'
    width={size || width}
    {...props}
  >
    <path
      fill='currentColor'
      d='M2.5 6.5V6H2v.5zm4 0V6H6v.5zm0 4H6v.5h.5zm7-7h.5v-.207l-.146-.147zm-3-3l.354-.354L10.707 0H10.5zM2.5 7h1V6h-1zm.5 4V8.5H2V11zm0-2.5v-2H2v2zm.5-.5h-1v1h1zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5zM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6zM6 6.5v4h1v-4zm.5 4.5h1v-1h-1zM9 9.5v-2H8v2zM7.5 6h-1v1h1zM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5zM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5zM10 6v5h1V6zm.5 1H13V6h-2.5zm0 2H12V8h-1.5zM2 5V1.5H1V5zm11-1.5V5h1V3.5zM2.5 1h8V0h-8zm7.646-.146l3 3l.708-.708l-3-3zM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5zM1 12v1.5h1V12zm1.5 3h10v-1h-10zM14 13.5V12h-1v1.5zM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5zM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5z'
    />
  </svg>
);

export const CopyIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    aria-hidden='true'
    fill='none'
    focusable='false'
    {...props}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z' />
      <path d='M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1' />
    </g>
  </svg>
);

export const CloseIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 32 32'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path
      fill='currentColor'
      d='M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z'
    />
  </svg>
);

export const CookieIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5' />
    <path d='M8.5 8.5v.01' />
    <path d='M16 15.5v.01' />
    <path d='M12 12v.01' />
    <path d='M11 17v.01' />
    <path d='M7 14v.01' />
  </svg>
);

export const SettingsIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    aria-hidden='true'
    focusable='false'
    {...props}
  >
    <path
      fill='currentColor'
      d='M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6'
    />
  </svg>
);
