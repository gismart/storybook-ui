import styled from 'styled-components'

import { IAnswerButtonProps } from '../../models/answer'
import { CommonAnswerStyles } from '../../styles'

export const StyledAnswer = {
  Root: styled.div<IAnswerButtonProps>`
    ${CommonAnswerStyles};
  `,
}
