import { Styles } from './styles';

export const Title: any = ({ total }: any) => {
  return <Styles className="Title">Episodes: {total}</Styles>;
};
