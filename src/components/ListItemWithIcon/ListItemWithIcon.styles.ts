import styled from 'styled-components'
import { IListItemWithIconProps } from 'components/ListItemWithIcon/ListItemWithIcon'
import { CommonFontsStyles } from 'styles/CommonFonts.styles'
import { CommonDimensionsStyles } from 'styles/CommonDimensions.styles'

export const StyledListItemWithIcon = styled.li<IListItemWithIconProps>`
  ${CommonFontsStyles};
  ${CommonDimensionsStyles};

  color: ${({ color }) => color || '#ffffff'};
  position: relative;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    width: ${({ iconWidth }) => `${iconWidth || 24}px`};
    height: ${({ iconHeight }) => `${iconHeight || 24}px`};
    background: ${({ iconSrc }) => `url(${iconSrc}) center no-repeat`};
    background-size: contain;
  }
`
