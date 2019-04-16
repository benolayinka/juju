import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import triangle from '../images/triangle.svg'

export const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl font-sans mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-sans mb-6 tracking-wide`};
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans mx-12 mt-8 xxl:w-3/4`};
  `

  export const Info = styled.p`
  ${tw`text-2xl lg:text-3xl font-sans mx-12 mt-8 xxl:w-3/4`};
  `