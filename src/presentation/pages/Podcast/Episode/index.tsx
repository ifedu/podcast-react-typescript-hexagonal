import { Link } from 'react-router-dom';
import { Styles } from './styles';

export const Episode = ({ index }: any) => {
  return (
    <Styles className="Episode" index={index}>
      <Link className="episode" to={`/podcast/1/episode/1`}>
        <span>Title 1</span>
        <span>01/01/2000</span>
        <span>10:00</span>
      </Link>
    </Styles>
  );
};
