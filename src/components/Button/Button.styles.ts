import styled from 'styled-components'

import { TextAlignment } from '../../constants/rootConstants'
import { CommonColorsStyles } from '../../styles/CommonColors.styles'
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles'
import { CommonFontsStyles } from '../../styles/CommonFonts.styles'
import { IButtonProps } from './Button'

export const StyledButton = styled.button<IButtonProps>`
  border: none;
  cursor: pointer;
  display: block;
  outline: none;
  overflow-wrap: break-word;
  text-decoration: none;
  transition: 0.2s ease-out;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  ${CommonFontsStyles};
  ${CommonColorsStyles};
  ${CommonDimensionsStyles};

  text-align: ${({ textAlign }) => textAlign || TextAlignment.CENTER};

  &:disabled {
    background-color: ${({ disableBackgroundColor }) =>
      disableBackgroundColor || '#e1e1e1'};
    color: ${({ disableColor }) => disableColor || '#fff'};
    pointer-events: none;
  }
`
