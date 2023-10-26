import { useParams } from 'react-router-dom';
import { Description } from './Description';
import { Detail } from '../../components/Detail';
import { useEpisode } from '../../hooks/use-episode';

export const EpisodePage = () => {
  const { podcastId, episodeId }: any = useParams();
  const episode: any = useEpisode(podcastId, episodeId);

  return (
    <div>
      <Detail info={episode.podcastInfo}></Detail>
      <Description episode={episode}></Description>
    </div>
  );
};
