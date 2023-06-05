import TitleImage from './resources/Title.png';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';
import { ReactImageGalleryItem } from 'react-image-gallery';

const Configs: ConfigsType = {
  url: 'http://gmjewedding.netlify.app',
  kakaoToken: '${process.env.KAKAO_API_KEY}',
  kakaoImage: './resources/Gallery_Photo_1.png',
  weddingDate: '1994년 08월 06일, 토요일 오후 12시 00분',
  weddingLocation: '사랑의교회 언약채플',
  groom: {
    name: '이기명',
    accountNumber: '신한은행 110-387-813425',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '오재은',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    { original: GalleryPhoto1, thumbnail: GalleryPhoto1 },
    { original: GalleryPhoto2, thumbnail: GalleryPhoto2 },
    { original: GalleryPhoto3, thumbnail: GalleryPhoto3 },
    { original: GalleryPhoto4, thumbnail: GalleryPhoto4 },
    { original: GalleryPhoto5, thumbnail: GalleryPhoto5 },
    { original: GalleryPhoto6, thumbnail: GalleryPhoto6 },
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: ReactImageGalleryItem[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
