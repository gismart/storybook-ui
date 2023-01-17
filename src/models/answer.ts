import React from 'react'
import { IDimensionsProps } from './dimensions'
import { IColorsProps } from './colors'
import { IFontsProps } from './fonts'

export interface IAnswerButtonProps
  extends IDimensionsProps,
    IFontsProps,
    IColorsProps {
  children?: React.ReactNode
  /**
   * How content will alignment horizontally
   */
  contentHorizontalAlign?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
  /**
   * What background color to use in active statement
   */
  activeBackgroundColor?: string
  /**
   * What color to use in active statement
   */
  activeColor?: string
  /**
   * What background gradient to use in active statement
   */
  activeBackgroundGradientColor?: string
  /**
   * Define border on active element
   */
  activeBorder?: string
  /**
   * Define shadow on active element
   */
  activeBoxShadow?: string
  /**
   * Custom styles
   */
  style?: {
    [key: string]: any
  }
}
