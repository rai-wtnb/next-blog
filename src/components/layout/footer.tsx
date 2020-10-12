import AdSense from 'react-adsense';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

// css
const GridFooter = styled.footer`
  content-visibility: auto;
  padding-top: 40px;
  grid-area: footer;
  background-color: #e8e6e2;
  border-radius: 5px;
  text-align: center;
`;
const FooterRight = styled.div`
  color: #115c79;
  font-size: 12.8px;
  margin-top: 40px;
`;
const CategoryWrapper = styled.div`
  margin: 40px 20%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  @media (max-width: 835px) {
    margin: 40px 5%;
  }
`;
const CategoryImageEngineer = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/category_engineer.jpg);
  background-size: cover;
  background-position: center;
  margin-right: 6%;
  width: 47%;
  height: 150px;
  border-radius: 5px;
  h3 {
    border-bottom: solid 1px #fff;
  }
  p {
    font-size: 0.8em;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (max-width: 835px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
const CategoryImageCareer = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/category_career.jpg);
  background-size: cover;
  background-position: center;
  width: 47%;
  height: 150px;
  border-radius: 5px;
  h3 {
    border-bottom: solid 1px #fff;
  }
  p {
    font-size: 0.8em;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (max-width: 835px) {
    width: 100%;
  }
`;
const CategoryImageMono = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url(/category_mono.jpg);
  background-size: cover;
  background-position: center;
  margin-top: 40px;
  margin-right: 6%;
  width: 47%;
  height: 150px;
  border-radius: 5px;
  h3 {
    border-bottom: solid 1px #fff;
  }
  p {
    font-size: 0.8em;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (max-width: 835px) {
    width: 100%;
    margin-right: 0;
    margin-top: 10px;
  }
`;
const CategoryImageBook = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(/category_book.jpg);
  background-size: cover;
  background-position: center;
  margin-top: 40px;
  width: 47%;
  height: 150px;
  border-radius: 5px;
  h3 {
    border-bottom: solid 1px #fff;
  }
  p {
    font-size: 0.8em;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media (max-width: 835px) {
    width: 100%;
    margin-top: 10px;
  }
`;
const ProfileImage = styled.img`
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
  width: 20%;
  @media (max-width: 835px) {
    width: 50%;
  }
`;
const MyName = styled.p`
  font-size: 1.25em;
  padding-bottom: 20px;
`
// css

export const Footer = () => {
  return (
    <GridFooter>
      <AdSense.Google
        style={{ display: "block" }}
        format="auto"
        client='ca-pub-3259446121033659'
        slot='6428872516'
        responsive="true"
      />
      <h2>Category.</h2>
      <CategoryWrapper>
        <Link href={'/category/[slug]'} as={`/category/engineer`}>
          <CategoryImageEngineer>
            <a>
              <h3>エンジニア</h3>
              <p>プログラミング関連・技術・独学</p>
            </a>
          </CategoryImageEngineer>
        </Link>
        <Link href={'/category/[slug]'} as={`/category/career`}>
          <CategoryImageCareer>
            <a>
              <h3>キャリア</h3>
              <p>キャリア・人生についての考え方、目標</p>
            </a>
          </CategoryImageCareer>
        </Link>
        <Link href={'/category/[slug]'} as={`/category/mono`}>
          <CategoryImageMono>
            <a>
              <h3>買って良かったもの</h3>
              <p>おしゃれなもの・センスの良いもの・便利なもの</p>
            </a>
          </CategoryImageMono>
        </Link>
        <Link href={'/category/[slug]'} as={`/category/book`}>
          <CategoryImageBook>
            <a>
              <h3>おすすめの本</h3>
              <p>読んで良かった本・勧めたい本</p>
            </a>
          </CategoryImageBook>
        </Link>
      </CategoryWrapper>
      <div>
        <h2>About me.</h2>
        <Link href={'/profile'}>
          <a>
            <ProfileImage src='/profile.png' alt='muku.のプロフィール' loading="lazy" />
          </a>
        </Link>
        <MyName>muku.</MyName>
        <p>
          <a
            href='https://twitter.com/mmuu_kkuu'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon size='big' name='twitter' />
          </a>
          <a
            href='https://github.com/rai-wtnb'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon size='big' name='github' />
          </a>
        </p>
      </div>
      <div>
        <FooterRight>
          <span>
            &#169;
            {`${new Date().getFullYear()} muku.`}
          </span>
        </FooterRight>
      </div>
    </GridFooter>
  );
};

Footer.displayName = 'Footer';
