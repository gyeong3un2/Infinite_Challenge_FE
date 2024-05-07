'use client';
import { Flex, Layout } from 'antd';
import { noto_sans_kr } from '../../../assets/fonts';
import clsx from 'clsx';
import { ExperimentTwoTone } from '@ant-design/icons';
import LinkButton from '@/components/ui-kit/LinkButton';

const Header = Layout;

function Gnb() {
  return (
    <Header className="header">
      <Flex
        justify="space-between"
        className={clsx('px-3', noto_sans_kr.className)}
      >
        <LinkButton
          url="/"
          className="headerLeft"
          icon={<ExperimentTwoTone className="logo" />}
        >
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
