import { Link } from 'react-router-dom';
import { Styles } from './styles';

export const Logo = () => {
  return (
    <Styles className="Logo">
      <Link to={'/'}>Podcaster</Link>
    </Styles>
  );
};
