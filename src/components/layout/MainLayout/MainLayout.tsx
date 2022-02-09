import { Container } from 'react-bootstrap';
import { Products } from '../../views/Products/Products';
import { Header } from '../Header/Header';

export const MainLayout = (): JSX.Element => (
  <Container>
    <Header />
    <Products />
  </Container>
);
