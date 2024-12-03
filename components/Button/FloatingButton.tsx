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
        className="bg-blue-300 text-white p-4 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-400 focus:outline-none transition animate-bounce"
      >
        클릭
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
              src="/images/kakaologo.png"
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
