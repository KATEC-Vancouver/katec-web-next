'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const FloatingButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Main Circular Button */}
      <button
  onClick={toggleMenu}
  className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition animate-bounce-slow"
  style={{ overflow: "hidden" }} // 둥근 이미지를 보장하기 위해 추가
>
  <Image
    src="/images/floatingbutton.png" // 이미지 경로
    alt="Button"
    width={154} // 버튼 크기에 맞춘 가로 크기
    height={154} // 버튼 크기에 맞춘 세로 크기
    className="object-cover"
  />
</button>

      {/* Floating Menu */}
      {isMenuOpen && (
        <div className="absolute bottom-20 right-0 bg-[#f7f6fb] rounded-lg p-4 flex flex-col items-center space-y-4">
          <a
            href="https://www.linkedin.com/company/katec2024/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Image
              src="/images/lnkdlogo.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>
          <a
            href="https://cafe.naver.com/katec2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Image
              src="/images/naverlogo.png"
              alt="Naver"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>
          <a
            href="https://open.kakao.com/o/gIHahNde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <Image
              src="/images/kakaoTlogo.png"
              alt="Kakao"
              width={32}
              height={32}
              className="rounded-full"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
