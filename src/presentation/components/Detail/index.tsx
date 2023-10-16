import { Styles } from './styles';

export const Detail: any = ({ info }: any) => {
  return (
    <Styles className="Detail">
      <img src={info?.['im:image'][2].label}></img>

      <hr></hr>

      <div className="title">
        <div>{info?.['im:name'].label}</div>
        <div>by {info?.['im:artist'].label}</div>
      </div>

      <hr></hr>

      <div className="description">
        <span>Description:</span>
        <p>{info?.summary.label}</p>
      </div>
    </Styles>
  );
};
