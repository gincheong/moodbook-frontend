import { Image, Typography } from 'antd';
import styles from './TrendingNow.module.css';

const SAMPLE_IMAGE_PLACEHOLDER_SRC = 'https://placehold.co/300x400';

export const TrendingNow = () => {
  return (
    <li className={styles.container}>
      {Array.from({ length: 20 }).map((_, index) => (
        <ol key={index} className={styles.item}>
          <Typography.Text>{`책이름 ${index}`}</Typography.Text>
          <Image src={SAMPLE_IMAGE_PLACEHOLDER_SRC} alt={`image-alt-${index}`} />
        </ol>
      ))}
    </li>
  );
};
