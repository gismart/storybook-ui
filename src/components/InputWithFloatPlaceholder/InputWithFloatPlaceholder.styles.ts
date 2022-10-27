import styled from 'styled-components'
import { CommonColorsStyles } from 'styles/CommonColors.styles'
import { CommonFontsStyles } from 'styles/CommonFonts.styles'
import { CommonDimensionsStyles } from 'styles/CommonDimensions.styles'
import {
  ILabelProps,
  IProps,
} from 'components/InputWithFloatPlaceholder/InputWithFloatPlaceholder'

export const StyledInputWithFloatPlaceholder = {
  Wrapper: styled.div<IProps>`
    ${CommonDimensionsStyles};
    position: relative;
    display: block;
    margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  `,
  Input: styled.input<IProps>`
    display: block;
    ${CommonColorsStyles};
    ${CommonFontsStyles};
    width: 100%;
    border: none;
    outline: none;
    transition: border 0.2s ease-out;

    &:valid,
    &:focus {
      & + span {
        top: 20px;
        color: ${({ focusedLabelColor }) => focusedLabelColor || '#000'};
        font-size: ${({ focusedLabelFontSize }) =>
          focusedLabelFontSize || '13px'};
        line-height: 1;
      }
    }

    &:focus {
      border-color: ${({ focusedBorderColor }) =>
        focusedBorderColor || '#ff9a90'};
    }
  `,
  Label: styled.span<ILabelProps>`
    position: absolute;
    top: ${({ hasValue }) => (hasValue ? '20px' : '50%')};
    transform: translateY(-50%);
    left: ${({ leftLabelPosition }) => leftLabelPosition || '16px'};
    color: ${({ labelColor }) => labelColor || '#81848c'};
    font-size: ${({ labelFontSize }) => labelFontSize || '16px'};
    transition-property: top, color, font-size, line-height;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    pointer-events: none;
    cursor: text;
  `,
  Icon: styled.img`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  `,
}
