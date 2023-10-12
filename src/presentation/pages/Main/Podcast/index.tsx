import { Link } from 'react-router-dom';
import { Styles } from './styles';

export const Podcast = () => {
  return (
    <Styles className="Podcast">
      <Link className="link" to={'/podcast/1'}>
        <div className="song">
          <div className="background"></div>

          <div className="image">
            <img src="/assets/logo512.png" alt="All Songs Considered" />
          </div>

          <div className="texts">
            <div className="title">All Songs Considered</div>
            <div className="author">Author: NPR</div>
          </div>
        </div>
      </Link>
    </Styles>
  );
};
