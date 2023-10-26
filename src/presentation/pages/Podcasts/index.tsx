import { Filter } from '../../components/Filter';
import { usePodcasts } from '../../hooks/use-podcasts';
import { Podcast } from './Podcast';
import { Styles } from './styles';

export const PodcastsPage = () => {
  const { filteredPodcasts, setFilter }: any = usePodcasts();

  return (
    <Styles className="MainPage">
      <Filter setFilter={setFilter}></Filter>

      <div className="container">
        {filteredPodcasts?.map((podcast: any) => <Podcast key={podcast.id} podcast={podcast}></Podcast>)}
      </div>
    </Styles>
  );
};
