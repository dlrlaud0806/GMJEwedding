import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const DdayLayout = styled('div', {
  width: isPortrait ? '6em' : '8em',
  height: isPortrait ? '2.5em' : '3.5em',
  display: 'flex',
  margin: 0,
  fontWeight: '500',
  alignItems: 'center',
  position: 'fixed',
  top: '2%',
  right: '2%',
});

type DdayProps = {
  config: ConfigsType;
};

const Dday = ({ config }: DdayProps) => {
  return (
    <>
      <DdayLayout> ❤D-100 </DdayLayout>
    </>
  );
};

export default Dday;
