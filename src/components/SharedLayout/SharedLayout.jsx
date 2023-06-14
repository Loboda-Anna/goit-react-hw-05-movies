import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
