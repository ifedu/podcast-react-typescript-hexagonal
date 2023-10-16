import { Styles } from './styles';

export const Description: any = ({ episode }: any) => {
  return (
    <Styles className="Description">
      <span>{episode.trackName}</span>
      <p dangerouslySetInnerHTML={{ __html: episode.description }}></p>
      <hr></hr>
      {episode.episodeUrl && (
        <audio controls>
          <source src={episode.episodeUrl} />
        </audio>
      )}
    </Styles>
  );
};
