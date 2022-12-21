import styled from 'styled-components'

import { TextAlignment } from 'constants/rootConstants'
import { CommonFontsStyles } from 'styles/CommonFonts.styles'
import { CommonColorsStyles } from 'styles/CommonColors.styles'
import { CommonDimensionsStyles } from 'styles/CommonDimensions.styles'
import { IButtonWithIconProps } from './ButtonWithIcon'

export const StyledButton = styled.button<IButtonWithIconProps>`
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
  position: relative;

  text-align: ${({ textAlign }) => textAlign || TextAlignment.CENTER};

  &:disabled {
    pointer-events: none;
    background-color: ${({ disableBackgroundColor }) =>
      disableBackgroundColor || '#e1e1e1'};
  }
`

export const StyledButtonWithIcon = {
  Button: styled(StyledButton)``,
  Icon: styled.img`
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `,
}
