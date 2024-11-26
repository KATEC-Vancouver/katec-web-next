'use client';

import React, { useState } from 'react';
import CardDefault from '@/components/Card/CardDefault';
import Modal from '@/components/Modal/Modal';

const posts = [
  {
    title: "박기범님의 이민준비 완벽하게 하기!",
    desc: "이민 준비를 완벽하게 하기 위해서는 무엇이 필요할까요?",
    img: "/images/image3.jpg",
    date: "Jan 4 2024",
  },
  {
    title: "김우용님의 세계일주 우당탕탕 기록",
    desc: "세계일주를 하면서 느낀 점들을 공유합니다.",
    img: "/images/image3.jpg",
    date: "Feb 4 2024",
  },
  {
    title: "김포프님의 C++ 프로그래밍 강의",
    desc: "C++ 프로그래밍을 배우기 위한 강의를 진행합니다.",
    img: "/images/image3.jpg",
    date: "Jun 12 2024",
  },
  {
    title: "이수진님의 한국 맛집 투어",
    desc: "맛집 투어를 통해 한국의 숨겨진 맛집을 소개합니다.",
    img: "/images/image3.jpg",
    date: "Apr 20 2023",
  },
  {
    title: "정유진님의 주식 투자 비법",
    desc: "성공적인 주식 투자를 위한 비법을 알려드립니다.",
    img: "/images/image3.jpg",
    date: "May 30 2023",
  },
  {
    title: "박하늘님의 아트워크 전시회 소개",
    desc: "독특한 아트워크를 전시하는 전시회를 소개합니다.",
    img: "/images/image3.jpg",
    date: "Jun 25 2023",
  },
  {
    title: "박하늘님의 아트워크 전시회 소개",
    desc: "독특한 아트워크를 전시하는 전시회를 소개합니다.",
    img: "/images/image3.jpg",
    date: "Jun 25 2023",
  }, {
    title: "박하늘님의 아트워크 전시회 소개",
    desc: "독특한 아트워크를 전시하는 전시회를 소개합니다.",
    img: "/images/image3.jpg",
    date: "Jun 25 2023",
  }, {
    title: "박하늘님의 아트워크 전시회 소개",
    desc: "독특한 아트워크를 전시하는 전시회를 소개합니다.",
    img: "/images/image3.jpg",
    date: "Jun 25 2023",
  }, 
];

const Activitypage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 

  
  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };


  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px- py-10 md:px-20 bg-gray-50 pt-[100px] min-h-screen">
      {/* Content */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-gray-800">ACTIVITY</h2>

        {/* Card */}
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              onClick={() => openModal(post.img)} 
              className="cursor-pointer"
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

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} selectedImage={selectedImage} />
    </div>
  );
};

export default Activitypage;
