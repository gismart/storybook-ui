import styled, { css } from 'styled-components'
import { CommonFontsStyles } from '../../styles/CommonFonts.styles'
import {
  ILabelProps,
  IProps,
  IWrapperProps,
} from '../../components/Input/Input'
import { CommonDimensionsStyles } from '../../styles/CommonDimensions.styles'
import { CommonColorsStyles } from '../../styles/CommonColors.styles'

export const StyledInput = {
  Wrapper: styled.div<IWrapperProps>`
    position: relative;
    display: block;
    width: ${({ width }) => width || '100%'};

    &::after {
      display: block;
      position: absolute;
      left: 16px;
      color: ${({ validationTextColor }) => validationTextColor || '#f37264'};
      font-size: ${({ validationTextSize }) => validationTextSize || '13px'};
      line-height: ${({ validationTextLineHeight }) =>
        validationTextLineHeight || '20px'};
    }

    &[data-valid='false'] {
      &::after {
        content: attr(data-validation-text);
      }
    }
  `,
  Input: styled.input<IProps>`
    display: block;
    ${CommonDimensionsStyles};
    ${CommonFontsStyles};
    ${CommonColorsStyles};
    ${({ label }) =>
      label &&
      css`
        padding-top: 32px;
      `};
    ${({ hasVisibilityControl }) =>
      hasVisibilityControl &&
      css`
        padding-right: 52px;
      `};
    ${({ isContentCentered }) =>
      isContentCentered &&
      css`
        text-align: center;
      `};
    outline: none;
    transition: border 0.2s ease-out;

    &:focus {
      border-color: ${({ focusedBorderColor }) =>
        focusedBorderColor || '#ff9a90'};
    }

    &:valid,
    &:focus {
      & + span {
        top: 10px;
        color: ${({ focusedLabelColor }) => focusedLabelColor || '#000'};
        font-size: ${({ focusedLabelFontSize }) =>
          focusedLabelFontSize || '13px'};
        line-height: 1;
      }
    }

    &[type='number'] {
      /* Hide arrows */
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &::placeholder {
      font-weight: 500;
      line-height: 20px;
      color: rgba(19, 29, 48, 0.5);
    }
  `,
  Label: styled.span<ILabelProps>`
    position: absolute;
    top: 20px;
    left: ${({ leftLabelPosition }) => leftLabelPosition || '16px'};
    color: ${({ labelColor }) => labelColor || '#81848c'};
    font-size: ${({ labelFontSize }) => labelFontSize || '16px'};
    transition-property: top, color, font-size, line-height;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    pointer-events: none;
    cursor: text;
  `,
  VisibilityButton: styled.button`
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 60px;
    border: none;
    outline: none;
    cursor: pointer;
    background-size: 20px 20px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
  `,
}
