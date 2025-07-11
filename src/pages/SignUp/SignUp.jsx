import { useNavigate } from 'react-router';
import styles from './SignUp.module.css';
import moodBookLogo from '@/assets/moodbook_logo.png';

export const SignUp = () => {
  const navigate = useNavigate();

  const onSignUpSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirm = event.target.passwordConfirm.value;
    const phone = event.target.phone.value;

    console.log(email, password, passwordConfirm, phone);

    if (password !== passwordConfirm) {
      alert('비밀번호 불일치');
      return;
    }

    const response = await fetch('/api/oauth/signUp', { method: 'POST' });
    if (response.status === 200) {
      navigate('/');
    } else {
      alert('회원가입 실패');
    }
  };

  return (
    <section className={styles.container}>
      <img className={styles.logo} src={moodBookLogo} alt='MoodBook Logo' />
      <form className={styles.inner} onSubmit={onSignUpSubmit}>
        <label htmlFor='email' className={styles.inputContainer}>
          이메일
          <input required id='email' type='email' className={styles.input} />
        </label>
        <label htmlFor='password' className={styles.inputContainer}>
          비밀번호
          <input required id='password' type='password' className={styles.input} />
        </label>
        <label htmlFor='passwordConfirm' className={styles.inputContainer}>
          비밀번호 확인
          <input required id='passwordConfirm' type='password' className={styles.input} />
        </label>
        <label htmlFor='phone' className={styles.inputContainer}>
          전화번호
          <input required id='phone' type='tel' className={styles.input} />
        </label>
        <button type='submit' className={styles.signUpButton}>
          회원가입
        </button>
      </form>
    </section>
  );
};
