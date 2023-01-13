import React, { ButtonHTMLAttributes } from 'react'

import { IFontsProps } from 'models/fonts'
import { IColorsProps } from 'models/colors'
import { IDimensionsProps } from 'models/dimensions'
import arrowIcon from 'src/assets/images/arrow-right-icon.svg'
import { TextAlignment } from '../../constants/rootConstants'

import { StyledButtonWithIcon as S } from './ButtonWithIcon.styles'

export interface IButtonWithIconProps
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
  /**
   * Icon path
   */
  iconSrc?: string
  /**
   * Icon width
   */
  iconWidth?: string
  /**
   * Icon height
   */
  iconHeight?: string
  /**
   * Icon position
   */
  iconPositionRight?: string
  /**
   * Icon position
   */
  iconPositionLeft?: string
  /**
   * Custom styles
   */
  style?: {
    [key: string]: any
  }
}

export const buttonWithIconThemes = {
  girlish: {
    isFullWidth: true,
    height: '52px',
    lineHeight: '52px',
    borderRadius: '32px',
    padding: '0 16px',
    maxWidth: '320px',
    fontSize: '18px',
    fontWeight: '700',
    backgroundColor: '#628F7B',
    iconSrc: arrowIcon,
    iconHeight: '24px',
    iconWidth: '24px',
    iconPositionRight: '14px',
    style: {
      letterSpacing: '0.2px',
    },
  },
}

export const ButtonWithIcon: React.FC<IButtonWithIconProps> = ({
  children,
  buttonRef,
  textAlign,
  disabled,
  disableBackgroundColor,
  iconSrc,
  iconWidth,
  iconHeight,
  iconPositionRight,
  iconPositionLeft,
  style,
  ...props
}) => (
  <S.Button
    ref={buttonRef}
    textAlign={textAlign}
    disabled={disabled}
    disableBackgroundColor={disableBackgroundColor}
    style={style}
    {...props}
  >
    {children}
    <S.Icon
      src={iconSrc}
      style={{
        width: iconWidth,
        height: iconHeight,
        right: iconPositionRight,
        left: iconPositionLeft,
      }}
    />
  </S.Button>
)
