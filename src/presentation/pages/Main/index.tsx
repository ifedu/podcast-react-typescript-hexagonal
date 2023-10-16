import { Filter } from '../../components/Filter';
import { handlePodcasts } from '../../hooks/handlePodcasts';
import { Podcast } from './Podcast';
import { Styles } from './styles';

export const MainPage = () => {
  const podcasts: any = handlePodcasts();

  return (
    <Styles className="MainPage">
      <Filter></Filter>

      <div className="container">
        {podcasts.map((podcast: any) => (
          <Podcast key={podcast.id.attributes['im:id']} podcast={podcast}></Podcast>
        ))}
      </div>
    </Styles>
  );
};
