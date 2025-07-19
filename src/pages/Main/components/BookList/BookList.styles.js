import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

export const Card = styled(AntdCard)`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding-bottom: 12px;
  width: 150px;
`;

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  font-weight: 500;
`;

export const Description = styled.span`
  font-size: 10px;
  color: #727272;
`;

export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
