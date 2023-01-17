import { css } from 'styled-components'
import { IAnswerButtonProps } from 'models/answer'
import { ContentHorizontalAlignment } from '../constants'
import { CommonFontsStyles } from './CommonFonts.styles'
import { CommonColorsStyles } from './CommonColors.styles'
import { CommonDimensionsStyles } from './CommonDimensions.styles'

export const CommonAnswerStyles = css<IAnswerButtonProps>`
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
    box-shadow: ${({ activeBoxShadow }) => activeBoxShadow || 'none'};
  }
  input:checked + & > * {
    color: ${({ activeColor }) => activeColor || '#fff'};
  }
`
