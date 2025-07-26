import { requestVerifyEmail } from '@/apis/user';
import { Paths } from '@/routes/routes';
import { Button, message, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import styled from 'styled-components';

export const VerifyEmail = () => {
  const [searchParams, _] = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const [isVerifySuccess, setVerifySuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      const response = await requestVerifyEmail(token);
      const json = await response.json();
      if (response.ok) {
        setVerifySuccess(true);
      } else {
        message.error(json);
        setVerifySuccess(false);
      }
    };
    verifyEmail();
  }, []);

  return (
    <Container>
      {!isVerifySuccess && '이메일 인증 대기 중'}
      {isVerifySuccess && (
        <>
          <Typography.Paragraph>
            이메일 인증이 완료되었니니다.
          </Typography.Paragraph>
          <Button type='link' href={Paths.SIGN_IN}>
            로그인 페이지로 이동
          </Button>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;
