import { styled } from '@stitches/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

declare global {
  interface Window {
    kakao: any;
  }
}

const Layout = styled('div', {
  textAlign: 'center',
  width: '100%',
  padding: '15px 10%',
  display: 'inline-block',
});

const CalendarContainer = () => {
  const weddingdate = new Date('2023-12-02');
  return (
    <Layout>
      <Calendar
        activeStartDate={weddingdate}
        defaultValue={weddingdate}
        formatDay={(locale, date) => moment(date).format('DD')}
      />
    </Layout>
  );
};

export default CalendarContainer;
