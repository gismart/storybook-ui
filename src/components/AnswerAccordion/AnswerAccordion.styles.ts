import styled from 'styled-components'

import { IAnswerButtonProps } from '../../models/answer'
import { CommonAnswerStyles } from '../../styles'

export const StyledAnswerAccordion = {
  Root: styled.div<IAnswerButtonProps>`
    ${CommonAnswerStyles};

    input:checked + & {
      height: auto;
    }

    input:checked + & > p {
      display: flex;
    }
  `,
  HiddenContent: styled.p`
    flex-basis: 100%;
    margin: 0;
    display: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    padding-top: 12px;
    border-top: 1px solid #d6cfe5;
    margin-top: 12px;
  `,
  Icon: styled.img`
    max-width: 100%;
    height: auto;
  `,
}
