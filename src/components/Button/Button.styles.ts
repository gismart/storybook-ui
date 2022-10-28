import styled from 'styled-components'

import { TextAlignment } from 'constants/rootConstants'
import { CommonFontsStyles } from 'styles/CommonFonts.styles'
import { CommonColorsStyles } from 'styles/CommonColors.styles'
import { CommonDimensionsStyles } from 'styles/CommonDimensions.styles'
import { IButtonProps } from './Button'

export const StyledButton = styled.button<IButtonProps>`
  ${CommonFontsStyles};
  ${CommonColorsStyles};
  ${CommonDimensionsStyles};

  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  transition: 0.2s ease-out;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  overflow-wrap: break-word;

  text-align: ${({ textAlign }) => textAlign || TextAlignment.CENTER};

  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    pointer-events: none;
    background-color: ${({ disableBackgroundColor }) =>
      disableBackgroundColor || '#e1e1e1'};
  }
`
