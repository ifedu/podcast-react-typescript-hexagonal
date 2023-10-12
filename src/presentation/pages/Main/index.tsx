import { Filter } from '../../components/Filter';
import { Podcast } from './Podcast';
import { Styles } from './styles';

export const MainPage = () => {
  return (
    <Styles className="MainPage">
      <Filter></Filter>

      <div className="container">
        <Podcast></Podcast>
        <Podcast></Podcast>
        <Podcast></Podcast>
        <Podcast></Podcast>
        <Podcast></Podcast>
        <Podcast></Podcast>
      </div>
    </Styles>
  );
};
