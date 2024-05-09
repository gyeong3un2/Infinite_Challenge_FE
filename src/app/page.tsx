'use client';
import clsx from 'clsx';
import { noto_sans_kr } from '@/assets/fonts';
import { FileUnknownOutlined } from '@ant-design/icons';
import SearchIcon from '@/assets/icons/SearchIcon';
import { useState } from 'react';
import { SearchResultIcon } from '@/assets/icons';

export default function Home() {
  const [isFocus, setIsFocus] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <main className={clsx('contentsWrap', noto_sans_kr.className)}>
      <div className="contentMain">
        <div className="searchWrap">
          <div className="searchInfo">
            국내 모든 임상시험 검색하고 <br />
            온라인으로 참여하기
          </div>
          <div>
            <div className="searchBox">
              <input
                type="text"
                placeholder="질환명을 입력해 주세요."
                className="searchInput"
                onFocus={handleFocus}
                onChange={(e) => handleInput(e)}
              />
              <button className="searchBtn">
                <SearchIcon />
              </button>
            </div>
            {isFocus && (
              <div className="searchDropBox space-y-3">
                {/* <div className="searchKeyword">
              <SearchResultIcon />
              <div className="keyword">검색어</div>
            </div> */}

                <div className="recentSearch">
                  {isTyping ? '추천' : '최근'} 검색어
                </div>
                <div>
                  <div className="searchKeyword">
                    <SearchResultIcon />
                    <div className="keyword">검색어</div>
                  </div>
                  <div className="searchKeyword">
                    <SearchResultIcon />
                    <div className="keyword">검색어</div>
                  </div>
                  <div className="searchKeyword">
                    <SearchResultIcon />
                    <div className="keyword">검색어</div>
                  </div>
                  <div className="searchKeyword">
                    <SearchResultIcon />
                    <div className="keyword">검색어</div>
                  </div>
                </div>

                {/* <div className="noRecentSearch">최근 검색어가 없습니다. </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="resultWrap">
        <div className="noResultIcon">
          <FileUnknownOutlined />
        </div>
        <div>현재 모집 중인 임상 시험이 없습니다.</div>
        <div className="noResultText">
          원하시는 결과가 없나요? <br />
          아래 &lsquo;임상시험 소식받기&rsquo;를 통해 간단한 정보만 입력해주시면
          해당 조건에 맞는
          <br />
          새로운 임상시험이 등록되었을 때 빠르게 알려드리겠습니다.
        </div>
      </div>
    </main>
  );
}
