'use client';
import { Flex, Layout } from 'antd';
import { noto_sans_kr } from '../../../assets/fonts';
import clsx from 'clsx';
import LinkButton from '@/components/ui-kit/LinkButton';
import { BeakerIcon } from '@/assets/icons';

const Header = Layout;

function Gnb() {
  return (
    <Header className="header">
      <Flex
        justify="space-between"
        className={clsx('px-3', noto_sans_kr.className)}
      >
        <LinkButton url="/" className="headerLeft" icon={<BeakerIcon />}>
          한국임상정보
        </LinkButton>

        <LinkButton url="/" className="headerRight">
          즐겨찾기
        </LinkButton>
      </Flex>
    </Header>
  );
}

export default Gnb;
