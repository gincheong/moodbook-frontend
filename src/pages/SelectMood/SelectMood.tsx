import { Typography } from 'antd';
import { Buttons, Container, Paragraph } from './SelectMood.styles';
import { MoodButton } from './components/MoodButton/MoodButton';
import { Mood, MoodColors, Moods } from './constants';
import { useState } from 'react';

const MOODS_ROW_1 = [Moods.ANXIETY, Moods.DEPRESSION, Moods.ANGER];
const MOODS_ROW_2 = [Moods.JOY, Moods.SIMPLICITY, Moods.ANTICIPATION];
const MOODS_ROW_3 = [Moods.LONELINESS, Moods.DETACHMENT, Moods.LONGING];

export const SelectMood = () => {
  const [selectedMoods, setSelectedMoods] = useState<Mood[]>([]);

  const toggleMood = (mood: Mood) => {
    if (selectedMoods.includes(mood)) {
      const moodSet = new Set([...selectedMoods]);
      moodSet.delete(mood);
      setSelectedMoods([...moodSet]);
    } else {
      setSelectedMoods([...selectedMoods, mood]);
    }
  };

  return (
    <Container>
      <Typography.Title level={2}>
        검색은 차갑고, 독서는 따뜻하다.
      </Typography.Title>
      <Paragraph>
        {
          '지금 당신의 마음은 어떤 빛깔인가요?\n당신의 감정에 어울리는 책을 고르기 위해,\n지금 이 순간의 마음을 들려주세요.'
        }
      </Paragraph>
      <Buttons>
        {MOODS_ROW_1.map((mood) => (
          <MoodButton
            selected={selectedMoods.includes(mood)}
            key={mood}
            color={MoodColors[mood]}
            text={mood}
            onClick={() => toggleMood(mood)}
          />
        ))}
      </Buttons>
      <Buttons>
        {MOODS_ROW_2.map((mood) => (
          <MoodButton
            selected={selectedMoods.includes(mood)}
            key={mood}
            color={MoodColors[mood]}
            text={mood}
            onClick={() => toggleMood(mood)}
          />
        ))}
      </Buttons>
      <Buttons>
        {MOODS_ROW_3.map((mood) => (
          <MoodButton
            selected={selectedMoods.includes(mood)}
            key={mood}
            color={MoodColors[mood]}
            text={mood}
            onClick={() => toggleMood(mood)}
          />
        ))}
      </Buttons>
    </Container>
  );
};
