import styled from 'styled-components'
import {
  ILabelProps,
  IProps,
} from '../../components/InputWithFloatPlaceholder/InputWithFloatPlaceholder'
import { CommonColorsStyles } from '../../styles/CommonColors.styles'
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles'
import { CommonFontsStyles } from '../../styles/CommonFonts.styles'

export const StyledInputWithFloatPlaceholder = {
  Wrapper: styled.div<IProps>`
    ${CommonDimensionsStyles};
    position: relative;
    display: block;
    margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
    background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};

    &::after {
      display: block;
      position: absolute;
      left: 16px;
      color: ${({ errorMessageColor }) => errorMessageColor || '#f83b00'};
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      margin-top: 6px;
    }

    &[data-valid='false']::after {
      content: attr(data-validation-text);
    }
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
