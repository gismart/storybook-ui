import React, { ButtonHTMLAttributes } from 'react'

import { IFontsProps } from '../../models/fonts'
import { IColorsProps } from '../../models/colors'
import { IDimensionsProps } from '../../models/dimensions'
import { TextAlignment } from '../../constants/root-constants'
import { StyledButton } from './Button.styles'

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IFontsProps,
    IColorsProps,
    IDimensionsProps {
  /**
   * Ref object for best interaction
   */
  buttonRef?: React.Ref<HTMLButtonElement>
  /**
   * How text will alignment horizontally
   */
  textAlign?: TextAlignment
  /**
   * Is button disable
   */
  disabled?: boolean
  /**
   * What background color to use when disable
   */
  disableBackgroundColor?: string
}

export const Button: React.FC<IButtonProps> = ({
  children,
  buttonRef,
  textAlign,
  disabled,
  disableBackgroundColor,
  ...props
}) => (
  <StyledButton
    ref={buttonRef}
    textAlign={textAlign}
    disabled={disabled}
    disableBackgroundColor={disableBackgroundColor}
    {...props}
  >
    {children}
  </StyledButton>
)
