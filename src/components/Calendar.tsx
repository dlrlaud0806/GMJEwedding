import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { MessageFilled, LinkOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import CalendarContainer from './CalendarContainer';

declare global {
  interface Window {
    Kakao: any;
  }
}

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 10% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const ButtonGroup = styled('div', {
  width: '100%',
  textAlign: 'center',
  paddingBottom: isPortrait ? '10%' : '5%',
});

const KakaoTalkCalendarButton = styled(Button, {
  background: '#fee500',
  borderColor: '#fee500',
  color: '#181600',
  '&:hover': {
    backgroundColor: '#fcf07e !important',
    borderColor: '#fcf07e !important',
    color: '#17160b !important',
  },
  '&:focus': {
    backgroundColor: '#fcf07e !important',
    borderColor: '#fcf07e !important',
    color: '#17160b !important',
  },
});

const LinkCalendarButton = styled(Button, {
  background: '#53acee',
  borderColor: '#53acee',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#9fcbed !important',
    borderColor: '#9fcbed !important',
    color: '#ffffff !important',
  },
  '&:focus': {
    backgroundColor: '#9fcbed !important',
    borderColor: '#9fcbed !important',
    color: '#ffffff !important',
  },
});

type CalendarProps = {
  config: ConfigsType;
};

const MyCalendar = ({ config }: CalendarProps) => {
  const [calendarCount, setcalendarCount] = useState<number>(0);

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(config.kakaoToken);
  }

  useEffect(() => {
    if (calendarCount !== 0) {
      window.Kakao.Calendar.createDefaultButton({
        objectType: 'calendar',
        container: '#sendKakao',
        content: {
          title: `${config.groom.name}❤${config.bride.name} 결혼식에 초대합니다`,
          description: "아래의 '일정 등록하기' 버튼을 눌러 캘린더에 써주세요🤵👰",
          imageUrl: config.kakaoImage,
          link: {
            mobileWebUrl: config.url,
            webUrl: config.url,
          },
        },
        buttons: [
          {
            title: '청첩장 열기',
            link: {
              mobileWebUrl: config.url,
              webUrl: config.url,
            },
          },
        ],
        installTalk: true,
      });
      setTimeout(() => {
        document.getElementById('sendKakao')?.click();
        message.success('카카오톡으로 청첩장을 공유합니다!');
      }, 100);
    }
  }, [config, calendarCount]);

  return (
    <Section>
      <Layout>
        <Title>달력</Title>
      </Layout>
      <CalendarContainer />
      <ButtonGroup>
        <KakaoTalkCalendarButton
          style={{ margin: 8 }}
          icon={<MessageFilled />}
          id="sendKakao"
          size="large"
          onClick={() => setcalendarCount(calendarCount + 1)}
        >
          카카오톡으로 공유하기
        </KakaoTalkCalendarButton>
        <CopyToClipboard text={config.url}>
          <LinkCalendarButton
            style={{ margin: 8 }}
            icon={<LinkOutlined />}
            size="large"
            onClick={() => message.success('청첩장 링크가 복사되었습니다.')}
          >
            링크로 공유하기
          </LinkCalendarButton>
        </CopyToClipboard>
      </ButtonGroup>
    </Section>
  );
};

export default MyCalendar;
