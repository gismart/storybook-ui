import styled, { css } from 'styled-components'

import { ContentHorizontalAlignment } from 'constants/rootConstants'
import { CommonFontsStyles } from 'styles/CommonFonts.styles'
import { CommonColorsStyles } from 'styles/CommonColors.styles'
import { CommonDimensionsStyles } from 'styles/CommonDimensions.styles'
import { IAnswerButtonProps } from './Answer'

export const StyledAnswerBased = css<IAnswerButtonProps>`
  ${CommonFontsStyles};
  ${CommonColorsStyles};
  ${CommonDimensionsStyles};
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
