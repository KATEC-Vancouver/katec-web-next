'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Link 가져오기
import NewsCardDefault from '@/components/Card/NewsCardDefault'; // NewsCardDefault 컴포넌트 가져오기
import { news } from '@/app/news/page'; // 뉴스 데이터 가져오기

const NewsHighlights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보여지는 뉴스의 인덱스
  const [fade, setFade] = useState(true); // 페이드 애니메이션 상태
  const [selectedNews, setSelectedNews] = useState<null | typeof news[0]>(null); // 모달 상태

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 페이드 아웃 시작
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length); // 다음 뉴스로 전환
        setFade(true); // 페이드 인 시작
      }, 500); // 페이드 아웃 시간
    }, 6000); // 6초마다 뉴스 전환

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
  }, []);

  const closeModal = () => setSelectedNews(null); // 모달 닫기

  return (
    <div className="w-[90%] sm:w-[79%] mx-auto mb-48 bg-[#f7f6fb] rounded-lg">
      <Link href="/news" passHref>
        <h2
          className="text-2xl font-bold text-center text-gray-800 mb-6 hover:text-blue-600 hover:underline cursor-pointer"
          title="Go to News Page"
        >
          What’s Next in News
        </h2>
      </Link>
      <div
        className={`transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setSelectedNews(news[currentIndex])} // 클릭 시 모달 열기
      >
        <NewsCardDefault
          title={news[currentIndex].title}
          desc={news[currentIndex].desc}
          date={news[currentIndex].date}
          author={news[currentIndex].author}
          img={news[currentIndex].img}
        />
      </div>

      {/* 모달 */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100006]"
          onClick={closeModal} // 모달 외부 클릭 시 닫기
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
                src={selectedNews.img}
                alt={selectedNews.title}
                className="rounded-md"
                style={{
                  maxWidth: '100%',
                  maxHeight: '700px',
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            {/* 텍스트 섹션 */}
            <div
              className="overflow-y-auto"
              style={{
                maxHeight: 'calc(90vh - 550px)',
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

export default NewsHighlights;
