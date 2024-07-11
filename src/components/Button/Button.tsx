import React, { ButtonHTMLAttributes } from 'react'

import { IFontsProps } from '../../models/fonts'
import { IColorsProps } from '../../models/colors'
import { IDimensionsProps } from '../../models/dimensions'
import { IThemedComponent } from '../../models/common'
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

export const enum buttonTheme {
  DANCEBIT = 'dancebitPrimary',
  NUTRIMATE = 'nutrimate',
  FITMI = 'fitmePrimary',
}

const buttonThemes: Record<string, any> = {
  dancebitPrimary: {
    isFullWidth: true,
    height: '56px',
    lineHeight: '56px',
    borderRadius: '30px',
    padding: '0 16px',
    maxWidth: '327px',
    fontSize: '17px',
    backgroundColor: '#03AAF5',
    disableBackgroundColor: '#CACACA',
    fontWeight: '700',
  },
  nutrimatePrimary: {
    backgroundColor: '#a9cd50',
    borderRadius: '30px',
    disableBackgroundColor: '#cacaca',
    fontSize: '17px',
    fontWeight: '700',
    height: '56px',
    isFullWidth: true,
    lineHeight: '24px',
    maxWidth: '343px',
    padding: '10px 16px',
  },
  fitmePrimary: {
    backgroundColor: '#8378EF',
    borderRadius: '30px',
    disableBackgroundColor: '#cacaca',
    fontSize: '17px',
    fontWeight: '700',
    height: '56px',
    isFullWidth: true,
    lineHeight: '24px',
    maxWidth: '343px',
    padding: '10px 16px',
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
    {...(theme && buttonThemes[theme])}
    {...props}
  >
    {children}
  </StyledButton>
)
