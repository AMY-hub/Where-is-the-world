import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
    color: var(--colors-text);
    text-align: center;
    margin: 0;
`
const Header = styled.h1`
    font-size: 3rem;
    color: var(--colors-text);
    opacity: 0.4;
    text-shadow: var(--shadow);
    text-align: center;
`

export const NotFound = () => {
  return (
    <Wrapper>
      <Header>404</Header>
      <Title>Sorry, this page doesn't exist.</Title>
    </Wrapper>
  )
};
