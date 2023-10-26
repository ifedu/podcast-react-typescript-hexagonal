import { Styles } from './styles';

export const Detail: any = ({ info }: any) => {
  return (
    <Styles className="Detail">
      <img src={info?.img}></img>

      <hr></hr>

      <div className="title">
        <div>{info?.name}</div>
        <div>by {info?.author}</div>
      </div>

      <hr></hr>

      <div className="description">
        <span>Description:</span>
        <p>{info?.description}</p>
      </div>
    </Styles>
  );
};
