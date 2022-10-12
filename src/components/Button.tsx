import React, { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './Button.styles'

export const enum TextAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Ref object for best interaction
   */
  buttonRef?: React.Ref<HTMLButtonElement>
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * What background gradient color to use
   */
  backgroundGradientColor?: string
  /**
   * What text color to use
   */
  color?: string
  /**
   * Minimum button width in px
   */
  minWidth?: number
  /**
   * Button padding
   */
  padding?: string
  /**
   * Should button fill the available width
   */
  isFullWidth?: boolean
  /**
   * How text will alignment horizontally
   */
  textAlign?: TextAlignment
  /**
   * Is button disable
   */
  isDisabled?: boolean
  /**
   * What background color to use when disable
   */
  disableBackgroundColor?: string
  /**
   * Button border radius
   */
  borderRadius?: string
  /**
   * Text size in px
   */
  fontSize?: number
  /**
   * Line height in px
   */
  lineHeight?: number
  /**
   * Text weight
   */
  fontWeight?: number
}

export const Button: React.FC<IProps> = ({
  children,
  backgroundColor,
  backgroundGradientColor,
  color,
  minWidth,
  padding,
  buttonRef = null,
  isFullWidth = false,
  textAlign,
  isDisabled,
  disableBackgroundColor,
  borderRadius,
  fontSize,
  lineHeight,
  fontWeight,
  ...props
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    backgroundGradientColor={backgroundGradientColor}
    color={color}
    ref={buttonRef}
    minWidth={minWidth}
    padding={padding}
    isFullWidth={isFullWidth}
    textAlign={textAlign}
    disabled={isDisabled}
    disableBackgroundColor={disableBackgroundColor}
    borderRadius={borderRadius}
    fontSize={fontSize}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    {...props}
  >
    {children}
  </StyledButton>
)
