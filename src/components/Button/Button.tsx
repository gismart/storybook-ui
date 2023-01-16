import React, { ButtonHTMLAttributes } from 'react'

import { IFontsProps } from 'models/fonts'
import { IColorsProps } from 'models/colors'
import { IDimensionsProps } from 'models/dimensions'
import { IThemedComponent } from 'models/common'
import { TextAlignment } from '../../constants/rootConstants'
import { StyledButton } from './Button.styles'

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IFontsProps,
    IColorsProps,
    IDimensionsProps,
    IThemedComponent {
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
  /**
   * Custom styles
   */
  style?: {
    [key: string]: any
  }
}

const themes: Record<string, any> = {
  girlish: {
    display: 'block',
    isFullWidth: true,
    height: '52px',
    lineHeight: '52px',
    borderRadius: '32px',
    padding: '0 16px',
    maxWidth: '320px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#fff',
    disableBackgroundColor: '#CACACA',
    backgroundColor: '#628F7B',
    style: {
      letterSpacing: '0.2px',
    },
  },
}

export const Button: React.FC<IButtonProps> = ({
  children,
  buttonRef,
  textAlign,
  disabled,
  disableBackgroundColor,
  style,
  theme,
  ...props
}) => (
  <StyledButton
    ref={buttonRef}
    textAlign={textAlign}
    disabled={disabled}
    disableBackgroundColor={disableBackgroundColor}
    style={style}
    {...(theme && themes[theme])}
    {...props}
  >
    {children}
  </StyledButton>
)
