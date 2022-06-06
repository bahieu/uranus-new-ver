import member01 from 'src/assets/imgs/members/member01.png';
import member02 from 'src/assets/imgs/members/member02.png';
import member03 from 'src/assets/imgs/members/member03.png';

type Member = {
  img: string;
  title: string;
  position: string;
  description: string;
};

export const members: Member[] = [
  {
    img: member01,
    title: 'Christana D.',
    position: 'LEADER',
    description:
      'Creating a next-generation money-transfer service to transform the way money moves.',
  },
  {
    img: member02,
    title: 'Christana D.',
    position: 'LEADER',
    description:
      'Creating a next-generation money-transfer service to transform the way money moves.',
  },
  {
    img: member03,
    title: 'Christana D.',
    position: 'LEADER',
    description:
      'Creating a next-generation money-transfer service to transform the way money moves.',
  },
];
