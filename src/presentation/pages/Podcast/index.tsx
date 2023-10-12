import { Detail } from '../../components/Detail';
import { Episodes } from './Episodes';
import { Title } from './Title';
import { Styles } from './styles';

export const PodcastPage = () => {
  return (
    <Styles className="PodcastPage">
      <Detail></Detail>

      <div className="right">
        <Title></Title>
        <Episodes></Episodes>
      </div>
    </Styles>
  );
};
