import { Divider, Typography } from 'antd';
import { useProfile } from './hooks/useProfile';
import {
  Container,
  ProfileImage,
  ProfileSection,
  ProfileTexts,
} from './MyPage.styles';
import { BookmarkSection } from './components/BookmarkSection';

export const MyPage = () => {
  const { profile } = useProfile();

  if (!profile) {
    return <></>;
  }
  return (
    <Container>
      <ProfileSection>
        <ProfileImage src={profile.myImage} alt='profileImage' />
        <ProfileTexts>
          <Typography.Title
            level={3}
          >{`${profile.name}님, 오늘도 편안한 독서 되세요.`}</Typography.Title>
          {/* 가입일? 데이터 없음 */}
          {/* <Typography.Paragraph>
            오늘은 Mookbook과 함께한지 ?일 되는 날이예요.
          </Typography.Paragraph> */}
        </ProfileTexts>
      </ProfileSection>
      <Divider />
      <BookmarkSection />
    </Container>
  );
};
