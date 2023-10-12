import { Styles } from './styles';

export const Detail = () => {
  return (
    <Styles className="Detail">
      <img src="/logo512.png"></img>

      <hr></hr>

      <div className="title">
        <div>Song Exploder</div>
        <div>by Song Exploder</div>
      </div>

      <hr></hr>

      <div className="description">
        <span>Description:</span>
        <p>A podcast where...</p>
      </div>
    </Styles>
  );
};
