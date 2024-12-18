'use client';

import React, { useState } from 'react';
import CardDefault from '@/components/Card/ActivityCardDefault';
import Modal from '@/components/Modal/Modal';


export const posts = [
  {
    title: "박기범님의 이민준비 완벽 하기!",
    desc: "이민 준비를 완벽하게 하기 위해서 필요할까?",
    img: "/images/activity/1.jpeg",
    date: "Jan 4 2024",
  },
  {
    title: " ",
    desc: "준비중 ",
    img: "/images/activiy/comingsoon.jpeg",
    date: " ",
  },
  {
    title: "",
    desc: "준비중",
    img: "/images/activiy/comingsoon.jpeg",
    date: " ",
  },
  {
    title: " ",
    desc: "준비중",
    img: "/images/activiy/comingsoon.jpeg",
    date: " ",
  },
  {
    title: " ",
    desc: "준비중",
    img: "/images/activiy/comingsoon.jpeg",
    date: " ",
  },
  {
    title: " ",
    desc: "준비중",
    img: "/images/activiy/comingsoon.jpeg",
    date: " ",
  },
  {
    title: " ",
    desc: "준비중",
    img: "/images/activiy/comingsoon.jpeg",
    date: "",
  }, {
    title: " ",
    desc: "준비중",
    img: "/images/activiy/comingsoon.jpeg",
    date: " ",
  }, {
    title: " ",
    desc: "준비중",
    img: "/images/activiy/comingsoon.jpeg",
    date: " ",
  }, 
];

const ActivityPage: React.FC = () => {
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
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-20 bg-[#f7f6fb] pt-[100px] min-h-screen">
      {/* content & text */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">ACTIVITY</h2>

        {/* card list */}
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 ">
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

      {/* modal */}
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default ActivityPage;
