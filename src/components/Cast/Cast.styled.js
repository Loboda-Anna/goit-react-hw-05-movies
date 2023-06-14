import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  list-style: none;
  margin-left: 0;
  padding: 0;

  > li {
    flex-grow: 1;
    width: 160px;
  }
  > li > img {
    width: 160px;
  }
`;
