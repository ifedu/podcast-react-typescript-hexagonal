import { Link } from 'react-router-dom';
import { Styles } from './styles';

export const Podcast: any = ({ podcast }: any) => {
  return (
    <Styles className="Podcast">
      <Link className="link" to={`/podcast/${podcast.id.attributes['im:id']}`}>
        <div className="song">
          <div className="background"></div>

          <div className="image">
            <img src={podcast['im:image'][2].label} alt={podcast['im:name'].label} />
          </div>

          <div className="texts">
            <div className="title">{podcast['im:name'].label}</div>
            <div className="author">Author: {podcast['im:artist'].label}</div>
          </div>
        </div>
      </Link>
    </Styles>
  );
};
