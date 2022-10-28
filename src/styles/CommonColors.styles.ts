import { css } from 'styled-components'

import { IColorsProps } from 'models/colors'

export const CommonColorsStyles = css<IColorsProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#000000'};
  background-image: ${({ backgroundGradientColor }) => backgroundGradientColor};
  color: ${({ color }) => color || '#ffffff'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
`
