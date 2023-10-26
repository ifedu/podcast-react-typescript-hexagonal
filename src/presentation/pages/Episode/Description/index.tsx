import { Styles } from './styles';

export const Description: any = ({ episode }: any) => {
  return (
    <Styles className="Description">
      <span>{episode.name}</span>
      <p dangerouslySetInnerHTML={{ __html: episode.description }}></p>
      <hr></hr>
      {episode.url && (
        <audio controls>
          <source src={episode.url} />
        </audio>
      )}
    </Styles>
  );
};
