'use client';

import React, { useState, useEffect } from 'react';
import NewsCardDefault from '@/components/Card/NewsCardDefault'; // NewsCardDefault 컴포넌트 가져오기
import { news } from '@/app/news/page'; // 뉴스 데이터 가져오기

const NewsHighlights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보여지는 뉴스의 인덱스
  const [fade, setFade] = useState(true); // 페이드 애니메이션 상태

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 페이드 아웃 시작
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length); // 다음 뉴스로 전환
        setFade(true); // 페이드 인 시작
      }, 500); // 페이드 아웃 시간
    }, 3000); // 3초마다 뉴스 전환

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
  }, []);

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mb-12 bg-gray-50 shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">NEWS HIGHLIGHTS</h2>
      <div
        className={`transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <NewsCardDefault
          title={news[currentIndex].title}
          desc={news[currentIndex].desc}
          date={news[currentIndex].date}
          author={news[currentIndex].author}
        />
      </div>
    </div>
  );
};

export default NewsHighlights;
