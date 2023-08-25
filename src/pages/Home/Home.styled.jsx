import styled from 'styled-components';

export const HomeSection = styled.section`
  padding: 200px 0px;
`

export const HomeTitle = styled.h1`
  text-align: center;
  width: 800px;
  font-size: 56px;

  font-weight: 500;
  margin: 0 auto;

`

export const Underlined = styled.span`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid hsl(130 80% 50%);
    clip-path: polygon(0 0, 50% 50%, 100% 0);
    }
`
