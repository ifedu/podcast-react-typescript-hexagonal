import styled from 'styled-components';

export const Styles = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  width: 210px;

  > .link {
    width: 100%;
  }

  .song {
    height: 200px;
    position: relative;
    width: 100%;

    .background {
      box-shadow: 0 1px 2px 2px #ddd;
      height: 70%;
      position: absolute;
      top: 30%;
      width: 100%;
    }
    .image {
      display: flex;
      justify-content: center;
      position: relative;

      img {
        border-radius: 100px;
        height: 120px;
        width: 120px;
      }
    }

    .texts {
      padding: 12px;
      text-align: center;

      .title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        max-height: 40px;
        overflow: hidden;
        text-transform: uppercase;
      }

      .author {
        color: #777;
        font-size: 12px;
      }
    }
  }
`;
