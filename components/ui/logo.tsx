import React from 'react';

interface LogoProps {
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = "36", height = "36" }) => {
  return (
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 22H9L10.5 18H13.5L15 22H21L12 2ZM11 15L12 12L13 15H11Z" fill="currentColor"/>
      </svg>
  );
};

export default Logo;
