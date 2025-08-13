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
   * What font color to use when disable
   */
  disableColor?: string
  /**
   * Custom styles
   */
  style?: {
    [key: string]: any
  }
}

export const enum buttonTheme {
  LUVLY = 'luvlyPrimary',
  LUVLY_SECONDARY = 'luvlySecondary',
  DANCEBIT = 'dancebitPrimary',
  NUTRIMATE_PRIMARY = 'nutrimatePrimary',
  NUTRIMATE_DEFAULT = 'nutrimateDefault',
  FITMI = 'fitmePrimary',
  FITMI_DARK = 'fitmeDark',
  CARDIMATE = 'cardimatePrimary',
  FAMIO = 'famioPrimary',
}

const buttonThemes: Record<string, any> = {
  luvlyPrimary: {
    isFullWidth: true,
    height: '56px',
    lineHeight: '56px',
    borderRadius: '30px',
    padding: '0 16px',
    maxWidth: '327px',
    fontSize: '17px',
    backgroundColor: 'rgb(255, 130, 118)',
    disableBackgroundColor: '#CACACA',
    fontWeight: '700',
  },
  luvlySecondary: {
    isFullWidth: true,
    children: 'Next',
    height: '56px',
    lineHeight: '56px',
    borderRadius: '30px',
    padding: '0 16px',
    maxWidth: '327px',
    fontSize: '17px',
    fontWeight: '700',
    backgroundColor: '#FF7262',
    disableBackgroundColor: '#CACACA',
  },
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
  nutrimateDefault: {
    backgroundColor: '#fff',
    border: '1px solid #e9e9e9',
    borderRadius: '30px',
    color: '#98bf36',
    disableBackgroundColor: '#cacaca',
    disableColor: '#fff',
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
  fitmeDark: {
    backgroundColor: '#8378EF',
    borderRadius: '30px',
    disableBackgroundColor: '#4c4c4c',
    disableColor: '#a9a9a9',
    fontSize: '17px',
    fontWeight: '700',
    height: '56px',
    isFullWidth: true,
    lineHeight: '24px',
    maxWidth: '343px',
    padding: '10px 16px',
  },
  cardimatePrimary: {
    backgroundColor: '#E74C3C',
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
  famioPrimary: {
    backgroundColor: '#6336ff',
    borderRadius: '30px',
    disableBackgroundColor: 'rgba(99, 54, 255, 0.3)',
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
