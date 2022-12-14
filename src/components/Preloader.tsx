import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const Title = styled.h2`
    color: var(--colors-text);
    opacity: 0.5;
    text-align: center;
    margin: 0;
`

const PreloaderWrapper = styled.div`
    display: inline-block;
    transform: translateZ(1px);
`;

const animation = keyframes`
    0%, 100% { animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5); }
    0% { transform: rotateY(0deg); }
    50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% { transform: rotateY(3600deg); }
`;

const PreloaderChildren = styled.div`
    display: inline-block;
    background: var(--preloader-color);
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    animation: ${animation} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;`

export const Preloader = () => {
    return (
        <Wrapper>
            <PreloaderWrapper>
                <PreloaderChildren />
            </PreloaderWrapper>
            <Title>Loading...</Title>
        </Wrapper>
    )
}