import React, { useState } from 'react';

const ImageHover = ({ imageUrl, altText }) => {
  // 이미지가 hover되었는지 여부를 저장하는 state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{
        width: '150px',
        height: '225px',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        filter: isHovered ? 'brightness(0)' : 'brightness(1)', // hover 시 검정색으로 변경
        transition: 'filter 0.3s ease', // 부드러운 전환 효과
      }}
      // 마우스가 이미지 위로 올라가면 hover 상태로 변경
      onMouseEnter={() => setIsHovered(true)}
      // 마우스가 이미지에서 벗어나면 hover 상태 해제
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default ImageHover;
