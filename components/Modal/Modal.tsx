'use client';

import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean; // 모달 열림 여부
  onClose: () => void; // 모달 닫기 함수
  selectedImage: string | null; // 선택된 이미지 URL
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedImage }) => {
  if (!isOpen) return null; // 모달이 닫혀 있으면 렌더링하지 않음

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // 모달 외부 클릭 시 닫기
    >
      <div
        className="bg-white rounded-lg p-4 relative"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫기 방지
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Selected"
            width={800}
            height={600}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
