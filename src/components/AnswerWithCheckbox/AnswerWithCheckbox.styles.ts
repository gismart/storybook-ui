import styled from 'styled-components'

import { StyledAnswerBased } from 'components/Answer/Answer.styles'
import {
  ICheckboxProps,
  IAnswerWithCheckboxProps,
  IAnswerWithCheckboxContentProps,
} from './AnswerWithCheckbox'

export const StyledAnswerWithCheckbox = {
  Root: styled.div<IAnswerWithCheckboxProps & ICheckboxProps>`
    ${StyledAnswerBased}
    flex-wrap: nowrap;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

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
    height: ${({ checkboxHeight }) => checkboxHeight || '20px'};
    border-radius: 50%;
    background-position: center;
    background-color: ${({ checkboxBackgroundColor }) =>
      checkboxBackgroundColor};
    mix-blend-mode: normal;
    border: ${({ checkboxBorder }) =>
      checkboxBorder || '1px solid rgba(85, 89, 101, 0.5)'};
    transition: 0.2s ease-out;
  `,
  Content: styled.div<IAnswerWithCheckboxContentProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin: ${({ spacingBetweenCheckboxAndContent }) =>
      spacingBetweenCheckboxAndContent || 0};
  `,
}
