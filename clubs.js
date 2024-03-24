import likelion from './public/likelion.jpg';
import test1 from './public/test1.jpg';
import map1 from './public/map/1.svg';
import map2 from './public/map/2.svg';
import map3 from './public/map/3.svg';
import map4 from './public/map/4.svg';
import map5 from './public/map/5.svg';
import map6 from './public/map/6.svg';
import map7 from './public/map/7.svg';
import map8 from './public/map/8.svg';
import map9 from './public/map/9.svg';
import map10 from './public/map/10.svg';
import map11 from './public/map/11.svg';
import map12 from './public/map/12.svg';
import map13 from './public/map/13.svg';
import map14 from './public/map/14.svg';
import map15 from './public/map/15.svg';

export const clubs = [
  {
    id: '1',
    title: '멋쟁이사자처럼',
    type: 'IT',
    img: likelion,
    description: '아 제발 로또 1등당첨좀',
    activity:
      '매주 1회 필참 파트별 트랙, 자율 스터디, 아이디어톤, 해커톤, 데모데이, 연합해커톤 등등 다양한 IT 주요활동을 경험 할 수 있습니다.',
    representatives: [
      {
        part: '대표',
        name: '황현진',
        phone: '010-2044-3300',
      },
      {
        part: '부대표',
        name: '하경림',
        phone: '010-4353-0366',
      },
    ],
    sns: '인스타그램 (@likelion_skuniv)',
    map: map1,
    clubinfo: {
      menu: [
        {
          name: '달고나',
          price: '3000원',
        },
        {
          name: '사탕',
          price: '3000원',
        },
      ],
      game: [
        {
          name: '동아리 유형 테스트',
          price: '0원',
        },
        {
          name: '운영진과 타자대결',
          price: '0원',
        },
        {
          name: '그림 퀴즈',
          price: '0원',
        },
      ],
    },
  },
  {
    id: '2',
    title: 'CCC',
    type: 'religion',
    img: test1,
    description:
      'Campus Cursade for Christ의 약어로 한국 대학생 선교회이자, 기독교 동아리입니다!',
    activity:
      '1 대 1 맨토링, 가족순모임, 목요 채플, 여름/겨울 수련회, 단기선교 등이 있습니다.',
    representatives: [
      {
        part: '대표',
        name: '김준영',
        phone: '010-5392-6208',
      },
      {
        part: '간사',
        name: '이현우',
        phone: '010-5027-0288',
      },
    ],
    sns: '인스타그램 (@sku_ccc)',
    map: map5,
    clubinfo: {
      menu: [
        {
          name: '팝콘',
          price: '무료',
        },
      ],
      game: [
        {
          name: '더 포 설문조사',
          price: '0원',
        },
      ],
    },
  },
  {
    id: '3',
    title: '적시타',
    type: 'physical activity',
    img: test1,
    description:
      '야구를 좋아한다면 혹은 다양한 학과 사람들과 낭만있는 대학생활을 즐기고 싶다면 누구든지 적시타의 문을 두드려라! 야구를 몰라도 장비가 없어도 "열정"만 있다면 누구나, 언제든 두팔벌려 환영합니다.',
    activity:
      'AUBL(아마추어수도권대학야구리그)참가, 친선경기, 훈련, 프로야구 직관, 소모임, OB와 교류, 각종 파티 및 회식',
    representatives: [
      {
        part: '대표',
        name: '이찬호',
        phone: '010-4184-6214',
      },
      {
        part: '부대표',
        name: '강민교',
        phone: '010-9039-5672',
      },
    ],
    sns: '인스타그램 (@juksita_2024)',
    map: map12,
    clubinfo: {
      menu: [
        {
          name: '소세지',
          price: '3000원',
        },
        {
          name: '소떡소떡',
          price: '3000원',
        },
      ],
      game: [
        {
          name: '페펙트 피쳐',
          price: '1000원',
        },
        {
          name: '스피드킹',
          price: '1000원',
        },
      ],
    },
  },
  {
    id: '4',
    title: '한국기독학생회IVF',
    type: 'religion',
    img: test1,
    description:
      '한국기독학생회 IVF는 북서울 11 개 캠퍼스, 전국 150여 곳의 대학생과  활동하는 대학생 선교단체로, 대학생들이 그리스도의 제자로서  살도록 격려하는 공동체입니다.',
    activity:
      '소그룹모임, 북서울 지방 대학교 연합MT 및 모임, 성균관-서경 지부 모임, 교내활동, 수련회  ',
    representatives: [
      {
        part: '대표',
        name: '이요한',
        phone: '010-6551-7686',
      },
      {
        part: '부대표',
        name: '유태영',
        phone: '010-9552-7290',
      },
    ],
    sns: '인스타그램 (@sku_ivf)',
    map: map9,
    clubinfo: {
      menu: [
        {
          name: '어묵',
          price: '무료',
        },
      ],
      game: [
        {
          name: 'Q&A세션',
          price: '0원',
        },
      ],
    },
  },
  {
    id: '5',
    title: '핀쓰리',
    type: 'physical activity',
    img: test1,
    description:
      '저희 핀쓰리는 유일한 볼링동아리로 볼링 실력 향상과 다양한 사람들과의 친목을 목적으로 하는 동아리입니다.',
    activity:
      '정기전(매주 금요일), 타학교와의 교류전, 이벤트전(1학기당 최소 1번 진행), 번개 모임, 볼린이 프로젝트(볼링 강습) 등',
    representatives: [
      {
        part: '대표',
        name: '박성지',
        phone: '010-3219-5246',
      },
      {
        part: '부대표',
        name: '노희원',
        phone: '010-6674-8083',
      },
    ],
    sns: '인스타그램 (@sku_pinthree_24)',
    map: map6,
    clubinfo: {
      menu: [
        {
          name: '없음',
          price: '없음',
        },
      ],
      game: [
        {
          name: '미니 볼링 게임',
          price: '0원',
        },
        {
          name: '스플릿 메이드 도전',
          price: '0원',
        },
        {
          name: '볼링 퀴즈',
          price: '0원',
        },
        {
          name: '볼링 용품 전시',
          price: '0원',
        },
      ],
    },
  },
  {
    id: '6',
    title: 'UBF',
    type: 'religion',
    img: test1,
    description:
      'University Bible Fellowship 대학생 성경읽기 선교회로 이 시대를 빚어가는 청년들이 말씀을 통해 자신의 정체성을 발견하고 비전을 전하기 위한 선교단체입니다.',
    activity:
      '바이블 아카데미, 1 대 1 멘토링, 다양한 취미생활 공유, 여름/겨울 수련회',
    representatives: [
      {
        part: '대표',
        name: '신유진',
        phone: '010-8030-7469',
      },
      {
        part: '간사',
        name: '안창현',
        phone: '010-8003-5872',
      },
    ],
    sns: '인스타그램 (@sk_ubf)',
    map: map13,
    clubinfo: {
      menu: [
        {
          name: '달고나',
          price: '무료',
        },
      ],
      game: [
        {
          name: '달고나 및 비즈 만들기',
          price: '0원',
        },
        {
          name: '설문조사',
          price: '0원',
        },
      ],
    },
  },
];
