import styled from 'styled-components';

export const Styles = styled.aside`
  box-shadow: 0 1px 2px 2px #ddd;
  left: 8px;
  padding: 8px 16px;
  position: fixed;

  img {
    margin: 8px 16px;
    width: 200px;
  }

  hr {
    margin: 16px 0;
  }

  .title {
    padding-left: 8px;

    div:nth-child(1) {
      font-size: 18px;
      font-weight: bold;
    }

    div:nth-child(2) {
      font-style: italic;
    }
  }

  .description {
    width: 230px;

    span {
      font-weight: bold;
    }

    p {
      font-style: italic;
    }
  }
`;
