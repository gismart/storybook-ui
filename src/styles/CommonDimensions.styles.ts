import { css } from 'styled-components'

import { IDimensionsProps } from 'models/dimensions'

export const CommonDimensionsStyles = css<IDimensionsProps>`
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'auto')};
  width: ${({ width, isFullWidth }) =>
    // eslint-disable-next-line no-nested-ternary
    isFullWidth ? '100%' : width ? `${width}px` : 'auto'};
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
`
