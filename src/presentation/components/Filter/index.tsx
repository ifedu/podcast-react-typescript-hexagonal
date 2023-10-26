import { Styles } from './styles';

export const Filter = ({ setFilter }: any) => {
  return (
    <Styles className="Filter">
      <span>100</span>

      <input type="text" placeholder="Filter podcasts..." onChange={(e) => setFilter(e.target.value)}></input>
    </Styles>
  );
};
