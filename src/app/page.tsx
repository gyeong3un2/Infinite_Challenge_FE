'use client';
import clsx from 'clsx';
import { noto_sans_kr } from '@/assets/fonts';
import { SearchOutlined, FileUnknownOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <main className={clsx('contentsWrap', noto_sans_kr.className)}>
      <div className="contentMain">
        <div className="searchWrap">
          <div className="searchInfo">
            국내 모든 임상시험 검색하고 <br />
            온라인으로 참여하기
          </div>
          <div className="searchBox">
            <input
              type="text"
              placeholder="질환명을 입력해 주세요."
              className="searchInput"
            />
            <button className="searchBtn">
              <SearchOutlined />
            </button>
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
