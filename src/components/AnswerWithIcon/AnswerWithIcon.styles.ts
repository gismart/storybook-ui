import styled from 'styled-components'

import {
  IAnswerWithIconProps,
  IAnswerWithIconContentProps,
} from './AnswerWithIcon'
import { CommonAnswerStyles } from '../../styles'

export const StyledAnswerWithIcon = {
  Root: styled.div<IAnswerWithIconProps>`
    ${CommonAnswerStyles};
    flex-wrap: nowrap;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    transition: 0.2s ease-out;

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
