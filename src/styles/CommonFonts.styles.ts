import { css } from 'styled-components'

import { IFontsProps } from 'models/fonts'

export const CommonFontsStyles = css<IFontsProps>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: ${({ lineHeight }) => lineHeight || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`
