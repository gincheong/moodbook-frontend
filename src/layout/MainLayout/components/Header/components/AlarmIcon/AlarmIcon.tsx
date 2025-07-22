import { Dropdown } from 'antd';
import { useNavigate } from 'react-router';
import { AlarmImage } from './AlarmIcon.styles';
import profileImage from '@/assets/profile.png';

export const AlarmIcon = () => {
  const navigate = useNavigate();

  return (
    <Dropdown
      menu={{
        items: [
          { key: '알람1', label: '알람1' },
          { key: '알람2', label: '알람2' },
          { key: '알람3', label: '알람3' },
        ],
      }}
    >
      <AlarmImage src={profileImage} alt='profile image' />
    </Dropdown>
  );
};
