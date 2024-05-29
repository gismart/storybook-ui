import { css } from 'styled-components'

import { IDimensionsProps } from '../models/dimensions'

export const CommonDimensionsStyles = css<IDimensionsProps>`
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  width: ${({ width, isFullWidth }) =>
    // eslint-disable-next-line no-nested-ternary
    isFullWidth ? '100%' : width || 'auto'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  border: ${({ border }) => border || 'none'};
  box-sizing: border-box;
`
