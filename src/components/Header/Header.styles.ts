import styled from 'styled-components'
import { CommonFontsStyles } from '../../styles/CommonFonts.styles'
import { CommonColorsStyles } from '../../styles/CommonColors.styles'
import { IHeaderProps } from '../../components/Header/Header'
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles'

export const StyledHeader = {
  Wrapper: styled.header<IHeaderProps>`
    ${CommonDimensionsStyles};
    ${CommonColorsStyles};
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    span {
      ${CommonFontsStyles}
    }

    img {
      margin-right: ${({ marginRight }) => marginRight || '0px'};
    }
  `,
  Logo: styled.div`
    display: flex;
    align-items: center;

    svg {
      flex-shrink: 0;
      height: 30px;
      width: 30px;
      margin-right: 10px;
    }
  `,
}
