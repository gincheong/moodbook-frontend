import { useNavigate } from 'react-router';
import styles from './SignUp.module.css';
import moodBookLogo from '@/assets/moodbook_logo.png';
import { Button, Card, Form, Input, message, Typography } from 'antd';

export const SignUp = () => {
  const navigate = useNavigate();

  const formItemStyle = {
    marginBottom: 0,
  };

  const onSignUpSubmit = async (values) => {
    const { email, password, passwordConfirm, phone } = values;

    console.log(email, password, passwordConfirm, phone);

    if (password !== passwordConfirm) {
      message.error('비밀번호가 서로 다릅니다.');
      return;
    }

    const response = await fetch('/api/oauth/signUp', { method: 'POST' });
    if (response.status === 200) {
      navigate('/');
    } else {
      message.error('가입 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <section className={styles.container}>
      <img className={styles.logo} src={moodBookLogo} alt='MoodBook Logo' />
      <Card>
        <Form id='signUp' className={styles.inner} onFinish={onSignUpSubmit}>
          <div className={styles.formItemContainer}>
            <Typography.Text>Email</Typography.Text>
            <Form.Item name='email' style={formItemStyle}>
              <Input required type='email' />
            </Form.Item>
          </div>
          <div className={styles.formItemContainer}>
            <Typography.Text>비밀번호</Typography.Text>
            <Form.Item name='password' style={formItemStyle}>
              <Input required type='password' />
            </Form.Item>
          </div>
          <div className={styles.formItemContainer}>
            <Typography.Text>비밀번호 확인</Typography.Text>
            <Form.Item name='passwordConfirm' style={formItemStyle}>
              <Input required type='password' />
            </Form.Item>
          </div>
          <div className={styles.formItemContainer}>
            <Typography.Text>전화번호</Typography.Text>
            <Form.Item name='phone' style={formItemStyle}>
              <Input required type='tel' />
            </Form.Item>
          </div>
          <Button type='default' size='large' htmlType='submit' key='submit'>
            회원가입
          </Button>
        </Form>
      </Card>
    </section>
  );
};
