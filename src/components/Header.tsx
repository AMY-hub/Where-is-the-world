import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from './Container';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { useAppDispatch } from '../store/hooks';
import { cleanFilters } from '../features/filters/filters.slice';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {

  const dispatch = useAppDispatch();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={() => dispatch(cleanFilters())}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
