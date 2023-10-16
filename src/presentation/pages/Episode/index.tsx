import { useParams } from 'react-router-dom';
import { Description } from './Description';
import { Detail } from '../../components/Detail';
import { handleEpisode } from '../../hooks/handleEpisode';

export const EpisodePage = () => {
  const { podcastId, episodeId }: any = useParams();
  const episode: any = handleEpisode(podcastId, episodeId);

  return (
    <div>
      <Detail info={episode.podcastInfo}></Detail>
      <Description episode={episode}></Description>
    </div>
  );
};
