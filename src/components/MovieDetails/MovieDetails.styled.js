import styled from 'styled-components';

export const BackBtn = styled.button`
  align-items: center;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  padding: 2px 24px;
  text-align: center;
`;
export const MovieCard = styled.article`
  display: flex;
  gap: 30px;
  > img {
    width: 30%;
  }
`;
export const AdditionalInfo = styled.div`
  > div {
    display: flex;
    gap: 30px;
  }
`;
