import Gallery from './components/Gallery';
import Dday from './components/Dday';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import MyCalendar from './components//Calendar';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import Share from './components/Share';
import { Layout } from 'antd';

const { Footer } = Layout;
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function App() {
  if (isMobile === false) alert('모바일 최적화 페이지입니다.');

  return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <Gallery config={Configs} />
      <MyCalendar config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Share config={Configs} />
      <Footer
        style={{
          background: '#D7CCC8',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2023 Gimyeong Lee
      </Footer>
      <Dday config={Configs} />
    </main>
  );
}

export default App;
