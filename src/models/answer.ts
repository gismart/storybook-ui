import { IDimensionsProps } from 'models/dimensions'
import { IFontsProps } from 'models/fonts'
import { IColorsProps } from 'models/colors'
import React from 'react'
import { ContentHorizontalAlignment } from 'constants/rootConstants'

export interface IAnswerButtonProps
  extends IDimensionsProps,
    IFontsProps,
    IColorsProps {
  children?: React.ReactNode
  /**
   * How content will alignment horizontally
   */
  contentHorizontalAlign?: ContentHorizontalAlignment
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
}
