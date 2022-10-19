import styled, { css } from 'styled-components'

import { ContentHorizontalAlignment } from 'constants/rootConstants'
import { IAnswerButtonProps } from './Answer'

export const StyledAnswerBased = css<IAnswerButtonProps>`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: ${({ contentHorizontalAlign }) =>
    contentHorizontalAlign || ContentHorizontalAlignment.START};

  cursor: pointer;
  transition: background-color 0.2s ease-out;
  position: relative;
  font-family: sans-serif;
  overflow-wrap: break-word;
  word-break: break-all;

  background-color: ${({ backgroundColor }) => backgroundColor || '#000000'};
  background-image: ${({ backgroundGradientColor }) => backgroundGradientColor};
  color: ${({ color }) => color || '#ffffff'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};

  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'auto')};
  width: ${({ width, isFullWidth }) =>
    // eslint-disable-next-line no-nested-ternary
    isFullWidth ? '100%' : width ? `${width}px` : 'auto'};
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  border: ${({ border }) => border || 'none'};

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '16px')};
  font-weight: ${({ fontWeight }) => fontWeight || 400};

  input:checked + & {
    background-color: ${({
      activeBackgroundColor,
      activeBackgroundGradientColor,
    }) =>
      !activeBackgroundGradientColor && (activeBackgroundColor || '#ff8276')};
    background-image: ${({ activeBackgroundGradientColor }) =>
      activeBackgroundGradientColor};
    color: ${({ activeColor }) => activeColor || '#fff'};
    border: ${({ border, activeBorder }) => activeBorder || border};
  }
  input:checked + & > * {
    color: ${({ activeColor }) => activeColor || '#fff'};
  }
`

export const StyledAnswer = {
  Root: styled.div<IAnswerButtonProps>`
    ${StyledAnswerBased};
  `,
}
