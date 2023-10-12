import { Styles } from './styles';
import { Episode } from '../Episode';

export const Episodes = () => {
  return (
    <Styles className="episodes">
      <div className="table">
        <div className="head">
          <span>Title</span>
          <span>Date</span>
          <span>Duration</span>
        </div>

        <div className="body">
          <Episode index="1"></Episode>
          <Episode index="2"></Episode>
          <Episode index="3"></Episode>
          <Episode index="4"></Episode>
        </div>
      </div>
    </Styles>
  );
};
