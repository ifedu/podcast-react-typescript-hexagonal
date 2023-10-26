import { Link } from 'react-router-dom';
import { Styles } from './styles';

export const Podcast: any = ({ podcast }: any) => {
  return (
    <Styles className="Podcast">
      <Link className="link" to={`/podcast/${podcast.id}`}>
        <div className="song">
          <div className="background"></div>

          <div className="image">
            <img src={podcast.img} alt={podcast.name} />
          </div>

          <div className="texts">
            <div className="title">{podcast.name}</div>
            <div className="author">Author: {podcast.author}</div>
          </div>
        </div>
      </Link>
    </Styles>
  );
};
