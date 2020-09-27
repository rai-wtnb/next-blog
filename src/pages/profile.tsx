import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';

import { H1 } from '../styles/globalStyle';

// css
const Profile = styled.div`
  padding-top: 100px;
  text-align: center;
  background-color: #e8e6e2;
  height: 100vh;
`
const ProfileImage = styled.img`
  width: 40%;
  @media (max-width: 835px) {
    width: 80%;
  }
`;
// css

const ProfilePage: NextPage = () => {
  return (
    <Profile>
      <H1>Profile.</H1>
      <ProfileImage src='/profile.png' alt='muku.のプロフィール' loading="lazy" />
      <h2>muku.</h2>
      <p>プロフィール作成中...</p>
      <Link href='/'>
        <a>
          <Button icon>戻る</Button>
        </a>
      </Link>
    </Profile>
  )
}

export default ProfilePage;
