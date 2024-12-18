'use client';

import React, { useState } from 'react';
import NewsCardDefault from '@/components/Card/NewsCardDefault'; // 재사용 가능한 뉴스 카드 컴포넌트

export const news = [
  {
    title: "2024 박기범님 세미나 진행",
    date: "Oct 5, 2024",
    desc: "밴쿠버 IT 커뮤니티에서 성공적으로 개최된 KATEC 세미나.",
    author: "KATEC",
    img: "/images/news/1.jpeg", // 이미지 경로 추가
  },
  {
    title: "KATEC 공식 웹사이트 개설",
    date: "Dec 1, 2023",
    desc: "2024년 주요 기술 트렌드를 발표하며 새로운 방향성을 제시합니다.",
    author: "KATEC",
    img: "/images/news/noimage.png", // 이미지 경로 추가
  },
  {
    title: "신규 멤버십 프로그램 출시",
    date: "Jan 10, 2024",
    desc: "최신 기술 트렌드를 논의하는 세미나가 성공적으로 개최되었습니다.",
    author: "Event Organizer",
    img: "/images/news/noimage.png", // 이미지 경로 추가
  },
  {
    title: "커뮤니티 네트워크 강화",
    date: "Nov 15, 2023",
    desc: "밴쿠버 IT 커뮤니티의 네트워크를 더욱 강화하고 있습니다.",
    author: "Community",
    img: "/images/news/noimage.png", // 이미지 경로 추가
  },
  {
    title: "2024 기술 트렌드 발표",
    date: "Sep 20, 2023",
    desc: "KATEC 공식 웹사이트가 개설되어 더 많은 정보를 제공합니다.",
    author: "Admin",
    img: "/images/news/noimage.png", // 이미지 경로 추가
  },
];



const NewsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<null | typeof news[0]>(null);

  const closeModal = () => setSelectedNews(null);

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-10 md:px-20 bg-[#f7f6fb] pt-[100px] min-h-screen">
      {/* Header */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">NEWS</h2>
      </div>

      {/* 카드 리스트 */}
      <div className="w-full max-w-6xl">
        <div className="grid gap-6 mt-8 sm:grid-cols-1 lg:grid-cols-1 w-full">
          {news.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedNews(item)} // 클릭 시 모달 열기
              className="cursor-pointer"
            >
              <NewsCardDefault
                title={item.title}
                desc={item.desc}
                date={item.date}
                author={item.author}
                img={item.img} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {selectedNews && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-[100006]"
    onClick={closeModal} // 모달 외부를 클릭하면 닫히도록 설정
  >
    <div
      className="bg-white rounded-lg shadow-lg p-6 relative overflow-y-auto"
      style={{
        maxWidth: '90%',
        maxHeight: '90%',
      }}
      onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 중지
    >
      
      {/* 이미지 섹션 */}
      <div className="mb-4 flex justify-center">
        <img
          src={selectedNews.img} // 선택된 뉴스의 이미지 출력
          alt={selectedNews.title}
          className="rounded-md"
          style={{
            maxWidth: '100%',
            maxHeight: '700px', // 이미지의 최대 높이 설정
            width: 'auto',      // 가로 비율 유지
            height: 'auto',     // 세로 비율 유지
          }}
        />
      </div>
      {/* 텍스트 섹션 */}
      <div
        className="overflow-y-auto"
        style={{
          maxHeight: 'calc(90vh - 550px)', // 이미지 아래 남은 공간에 맞게 스크롤 처리
        }}
      >
        <h3 className="text-2xl font-bold text-gray-800">{selectedNews.title}</h3>
        <p className="mt-4 text-gray-600">{selectedNews.desc}</p>
        <div className="mt-4 text-sm text-gray-500">
          <p>{selectedNews.date}</p>
          <p>By {selectedNews.author}</p>
        </div>
      </div>
    </div>
  </div>
)}






    </div>
  );
};

export default NewsPage;
