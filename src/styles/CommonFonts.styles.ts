import { css } from 'styled-components'

import { IFontsProps } from 'models/fonts'

export const CommonFontsStyles = css<IFontsProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '16px')};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`
