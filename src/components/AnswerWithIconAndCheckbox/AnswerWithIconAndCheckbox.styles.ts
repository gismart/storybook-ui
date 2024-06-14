import styled from 'styled-components'

import { CommonAnswerStyles } from '../../styles'
import {
  ICheckboxProps,
  IAnswerWithIconAndCheckboxProps,
  IAnswerWithIconAndCheckboxContentProps,
} from './AnswerWithIconAndCheckbox'

export const StyledAnswerWithIconAndCheckbox = {
  Root: styled.div<IAnswerWithIconAndCheckboxProps & ICheckboxProps>`
    ${CommonAnswerStyles};
    flex-wrap: nowrap;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    transition: 0.2s ease-out;

    input:checked + & > span {
      background-color: ${({ checkboxBackgroundActiveColor }) =>
        checkboxBackgroundActiveColor};
      border: ${({ checkboxActiveBorder }) => checkboxActiveBorder};
      background-image: ${({ iconSrc }) => `url(${iconSrc})`};
      background-repeat: no-repeat;
      background-size: ${({ iconSize }) => iconSize || 'contain'};
    }

    input:checked + & > * > * {
      color: ${({ activeColor }) => activeColor || '#fff'};
    }
  `,
  Checkbox: styled.span<ICheckboxProps>`
    width: ${({ checkboxWidth }) => checkboxWidth || '20px'};
    min-width: ${({ checkboxWidth }) => checkboxWidth || '20px'};
    height: ${({ checkboxHeight }) => checkboxHeight || '20px'};
    border-radius: ${({ checkboxBorderRadius }) =>
      checkboxBorderRadius || '50%'};
    background-position: center;
    background-color: ${({ checkboxBackgroundColor }) =>
      checkboxBackgroundColor};
    mix-blend-mode: normal;
    border: ${({ checkboxBorder }) =>
      checkboxBorder || '1px solid rgba(85, 89, 101, 0.5)'};
    transition: 0.2s ease-out;
  `,
  Content: styled.div<IAnswerWithIconAndCheckboxContentProps>`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: ${({ contentHorizontalAlign }) =>
      contentHorizontalAlign || 'flex-start'};
    align-items: center;
    align-content: center;
    margin: ${({ spacingBetweenCheckboxAndContent }) =>
      spacingBetweenCheckboxAndContent || 0};
  `,
  Icon: styled.img`
    max-width: 100%;
    height: auto;
    vertical-align: top;
  `,
}
