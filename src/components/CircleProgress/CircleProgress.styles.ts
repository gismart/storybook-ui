import styled, { css } from 'styled-components'
import {
  IContainerProps,
  IProgressValueProps,
  ISvgProps,
} from './CircleProgress'

const circleProgress = (isBackground = false) => css<{
  value: number
  radius?: number
}>`
  ${({ value, radius = 45 }) => {
    const length = radius * Math.PI * 2
    return css`
      stroke-dasharray: 0 ${length};
      stroke-width: ${radius / 5};
      stroke-dasharray: ${isBackground ? length : length * (value / 100)}
        ${length};
    `
  }};
  stroke-linecap: round;
  fill: transparent;
  transition: stroke-dasharray 0.2s;
`

export const StyledCircleProgress = {
  Container: styled.div<IContainerProps>`
    position: relative;
    height: ${({ height }) => height || '220px'};
    margin: ${({ margin }) => margin || '0 auto 70px'};
  `,
  Svg: styled.svg<ISvgProps>`
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transform: rotate(-90deg);
    circle {
      ${circleProgress(true)};
      stroke: ${({ strokeColorEmpty }) => strokeColorEmpty || '#ececf9'};
    }
    circle + circle {
      ${circleProgress()};
      stroke: ${({ strokeColorFilled }) => strokeColorFilled || '#ff8276'};
    }
  `,
  Label: styled.div<IProgressValueProps>`
    font-size: ${({ fontSize }) => fontSize || '60px'};
    font-weight: ${({ fontWeight }) => fontWeight || 600};
    color: ${({ color }) => color || '#2d3240'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    strong {
      font-size: ${({ percentageFontSize }) => percentageFontSize || '32px'};
      font-weight: ${({ percentageFontWeight }) => percentageFontWeight || 700};
    }
  `,
}
