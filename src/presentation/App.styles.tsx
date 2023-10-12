import styled from 'styled-components';

export const Styles = styled.div`
  padding: 8px;

  a {
    color: inherit;
    text-decoration: none;
  }

  hr {
    border: 1px solid #ddd;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    > div {
      width: 1200px;
    }
  }
`;
