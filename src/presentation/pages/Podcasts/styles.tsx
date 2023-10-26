import styled from 'styled-components';

export const Styles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  > div {
    width: 960px;
  }

  .Filter {
    justify-content: end;
    margin-bottom: 24px;
  }

  > .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 100px;
  }
`;
