import styled from 'styled-components'

import { StyledAnswerBased } from '../Answer/Answer.styles'
import {
  IAnswerWithIconProps,
  IAnswerWithIconContentProps,
} from './AnswerWithIcon'

export const StyledAnswerWithIcon = {
  Root: styled.div<IAnswerWithIconProps>`
    ${StyledAnswerBased};
    flex-wrap: nowrap;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

    input:checked + & > * > * {
      color: ${({ activeColor }) => activeColor || '#fff'};
    }
  `,
  Content: styled.div<IAnswerWithIconContentProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    margin: ${({ spacingBetweenIconAndContent }) =>
      spacingBetweenIconAndContent ? `0 ${spacingBetweenIconAndContent}` : 0};
  `,
  Icon: styled.img`
    max-width: 100%;
    height: auto;
  `,
}
