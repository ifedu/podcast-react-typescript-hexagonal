import { Styles } from './styles';
import { Episode } from '../Episode';

export const Episodes: any = ({ episodes = [], podcastId }: any) => {
  return (
    <Styles className="episodes">
      <div className="table">
        <div className="head">
          <span>Title</span>
          <span>Date</span>
          <span>Duration</span>
        </div>

        <div className="body">
          {episodes.map((episode: any, i: number) => (
            <Episode key={episode.trackId} podcastId={podcastId} episode={episode} index={i}></Episode>
          ))}
        </div>
      </div>
    </Styles>
  );
};
