import styled from 'styled-components'

import { TextAlignment, IProps as IButtonProps } from './Button'

export const StyledButton = styled.button<IButtonProps>`
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  transition: 0.2s ease-out;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  background-color: ${({ backgroundColor }) => backgroundColor || '#000000'};
  background-image: ${({ backgroundGradientColor }) => backgroundGradientColor};
  color: ${({ color }) => color || '#ffffff'};
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  min-width: ${({ minWidth }) => `${minWidth}px` || 'auto'};
  padding: ${({ padding }) => padding || 0};
  text-align: ${({ textAlign }) => textAlign || TextAlignment.CENTER};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  font-size: ${({ fontSize }) => `${fontSize}px` || '16px'};
  line-height: ${({ lineHeight }) => `${lineHeight}px` || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};

  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    pointer-events: none;
    background-color: ${({ disableBackgroundColor }) =>
      disableBackgroundColor || '#000000'};
  }
`
