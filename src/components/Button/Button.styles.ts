import styled from 'styled-components'

import { TextAlignment } from '../../constants/root-constants'
import { IButtonProps } from './Button'

export const StyledButton = styled.button<IButtonProps>`
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  transition: 0.2s ease-out;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  overflow-wrap: break-word;

  background-color: ${({ backgroundColor }) => backgroundColor || '#000000'};
  background-image: ${({ backgroundGradientColor }) => backgroundGradientColor};
  color: ${({ color }) => color || '#ffffff'};

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

  text-align: ${({ textAlign }) => textAlign || TextAlignment.CENTER};

  font-size: ${({ fontSize }) => `${fontSize}px` || '16px'};
  line-height: ${({ lineHeight }) => `${lineHeight}px` || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};

  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    pointer-events: none;
    background-color: ${({ disableBackgroundColor }) =>
      disableBackgroundColor || '#e1e1e1'};
  }
`
