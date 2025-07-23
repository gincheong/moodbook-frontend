import { StarFilled, StarOutlined } from '@ant-design/icons';
import { CSSProperties } from 'react';
import styled from 'styled-components';

const MAX_SCORE = 5;

interface ScoreStarsProps {
  reputation: number;
}
export const ScoreStars = (props: ScoreStarsProps) => {
  const { reputation } = props;

  // * 정수로 가정하고 작업
  const filledStarCount = Math.min(MAX_SCORE, reputation);
  const outlinedStarCount = MAX_SCORE - filledStarCount;

  return (
    <Container>
      {Array.from({ length: filledStarCount }).map((_, index) => (
        <StarFilled key={index} style={StarStyles} />
      ))}
      {Array.from({ length: outlinedStarCount }).map((_, index) => (
        <StarOutlined key={index} style={StarStyles} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 4px;
`;

const StarStyles: CSSProperties = {
  color: '#FFD400',
};
