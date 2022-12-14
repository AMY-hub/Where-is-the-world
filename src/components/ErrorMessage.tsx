import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
    color: var(--error-color);
    text-align: center;
`

interface ErrorMessageProps {
    message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <Wrapper>
            <Title>{message}</Title>
        </Wrapper>
    )
}