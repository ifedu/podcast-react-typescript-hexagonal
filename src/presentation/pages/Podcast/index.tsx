import { useParams } from 'react-router-dom';
import { Detail } from '../../components/Detail';
import { usePodcast } from '../../hooks/use-podcast';
import { Episodes } from './Episodes';
import { Title } from './Title';
import { Styles } from './styles';

export const PodcastPage = () => {
  const { podcastId }: any = useParams();
  const podcast: any = usePodcast(podcastId);
  console.log('🚀 ~ file: index.tsx:11 ~ PodcastPage ~ podcast:', podcast);

  return (
    <Styles className="PodcastPage">
      <Detail podcast={podcast} info={podcast.info}></Detail>

      <div className="right">
        <Title total={podcast.count}></Title>
        <Episodes episodes={podcast.episodes} podcastId={podcastId}></Episodes>
      </div>
    </Styles>
  );
};
