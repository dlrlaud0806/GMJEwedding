import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';

import { ConfigsType } from '../configs';
import ImageGallery from 'react-image-gallery';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '5% 5% 5% 5%' : '5% 5% 5% 5%',
});

const Title = styled('p', {
  color: '#FFFFFF',
  width: '100%',
  fontSize: isPortrait ? '1.5em' : '2.5em',
  margin: 0,
  fontWeight: '100',
});

type GalleryProps = {
  config: ConfigsType;
};

const Gallery = ({ config }: GalleryProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        background: onScreen ? '#212121' : '#EFEBE9',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>사진 앨범</Title>
      </Layout>
      {/* <Row gutter={[16, 16]}>
        {config.galleryImages.map((image, index) => (
          <Col key={index} span={isPortrait ? 6 : 3}>
            <Image width={isPortrait ? width / 4 - 10 : width / 8 - 10} src={image} />
          </Col>
        ))}
        </Row> */}
      <ImageGallery items={config.galleryImages} />
    </section>
  );
};

export default Gallery;
