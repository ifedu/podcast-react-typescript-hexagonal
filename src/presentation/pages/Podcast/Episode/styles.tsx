import styled from 'styled-components';

export const Styles: any = styled.div`
  background-color: ${({ index }: any) => (index % 2 === 0 ? '#fff' : '#eee')};

  .episode {
    border-bottom: 1px solid #ccc;
    display: grid;
    grid-template-columns: 1fr 120px 80px;
    padding: 12px;

    span:nth-child(1) {
      color: #2777bf;
    }
  }
`;
