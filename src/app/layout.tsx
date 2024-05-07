import './globals.css';
import '@/assets/css/ui.basic.css';
import { inter } from '../assets/fonts';

import type { Metadata } from 'next';
import Provider from '@/utils/Provider';
import Gnb from '@/components/shared/layout/Gnb';

export const metadata: Metadata = {
  title: '한국임상정보',
  description: '국내 모든 임상시험 검색하고 온라인으로 참여하기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Provider>
          <Gnb />

          {children}
        </Provider>
      </body>
    </html>
  );
}
