import {
  InfoBlockContainer,
  InfoContainer,
  NameBlockContainer,
  OneWord,
} from '../styles/page_about';

export default function InfoLine({ name, src, img, info }) {
  return (
    <InfoContainer>
      <InfoBlockContainer>
        <NameBlockContainer>
          <img src={img} />
          <p>{name}</p>
          <p>{info}</p>
        </NameBlockContainer>
        <OneWord>{src}</OneWord>
      </InfoBlockContainer>
    </InfoContainer>
  );
}
