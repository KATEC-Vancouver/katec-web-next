'use client';
import React, { useState } from 'react';
import CardDefault from '@/components/Card/CardDefault';
import Modal from '@/components/Modal/Modal';
import { posts } from '@/app/activity/page'; // posts data

const ActivityHighlights: React.FC = () => {
  // 모달 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 모달 열기
  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mb-12 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">ACTIVITY</h2>
      {/* scroll */}
      <div className="overflow-x-auto">
        <div className="flex gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] cursor-pointer"
              onClick={() => openModal(post.img)} // click event
            >
              <CardDefault
                title={post.title}
                desc={post.desc}
                img={post.img}
                date={post.date}
              />
            </div>
          ))}
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default ActivityHighlights;
