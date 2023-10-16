import { useParams } from 'react-router-dom';
import { Detail } from '../../components/Detail';
import { handlePodcast } from '../../hooks/handlePodcast';
import { Episodes } from './Episodes';
import { Title } from './Title';
import { Styles } from './styles';

export const PodcastPage = () => {
  const { podcastId }: any = useParams();
  const podcast: any = handlePodcast(podcastId);

  return (
    <Styles className="PodcastPage">
      <Detail podcast={podcast} info={podcast.info}></Detail>

      <div className="right">
        <Title total={podcast.resultCount}></Title>
        <Episodes episodes={podcast.results} podcastId={podcastId}></Episodes>
      </div>
    </Styles>
  );
};
