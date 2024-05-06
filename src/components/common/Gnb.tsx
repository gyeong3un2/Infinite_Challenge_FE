'use client';
import { Flex, Layout } from 'antd';
import { noto_sans_kr } from '@/utils/fonts';
import clsx from 'clsx';
import { ExperimentTwoTone } from '@ant-design/icons';

const Header = Layout;

function Gnb() {
  return (
    <Header className="header">
      <Flex justify="space-between" className="px-3">
        <div className={clsx('headerLeft', noto_sans_kr.className)}>
          <ExperimentTwoTone className="logo" />
          한국임상정보
        </div>
        <div className={clsx('headerRight', noto_sans_kr.className)}>
          즐겨찾기
        </div>
      </Flex>
    </Header>
  );
}

export default Gnb;
