import { Link } from 'react-router-dom';
import { Styles } from './styles';

export const Episode = ({ podcastId, episode, index }: any) => {
  return (
    <Styles className="Episode" index={index}>
      <Link className="episode" to={`/podcast/${podcastId}/episode/${episode.id}`}>
        <span>{episode.name}</span>
        <span>{episode.releaseDate}</span>
        <span>{episode.trackTimeMillis}</span>
      </Link>
    </Styles>
  );
};
