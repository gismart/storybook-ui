import { HTMLInputTypeAttribute } from 'react'

import { IDimensionsProps } from './dimensions'
import { IColorsProps } from './colors'
import { IFontsProps } from './fonts'

export interface IInputProps
  extends IColorsProps,
    IFontsProps,
    IDimensionsProps {
  /**
   * Define input validity
   */
  isValid?: boolean
  /**
   * Define if validation icon should be shown
   */
  hasValidationIcon?: boolean
  /**
   * icon?
   */
  iconSrc?: string
  /**
   * Input type
   */
  type?: HTMLInputTypeAttribute
  /**
   * Input label text
   */
  label?: string
  /**
   * Input label short text
   */
  shortLabel?: string
  /**
  /**
   * Label size in px
   */
  labelFontSize?: string
  /**
   * Label line height in px
   */
  labelLineHeight?: string
  /**
   * Label text weight
   */
  labelFontWeight?: string
  /**
   * Label color
   */
  labelColor?: string
  /**
   * Left label position
   */
  leftLabelPosition?: string
  /**
   * Label color when input is focused
   */
  focusedLabelColor?: string
  /**
   * Label font size in px when input is focused
   */
  focusedLabelFontSize?: string
  /**
   * Border color when input is focused
   */
  focusedBorderColor?: string
  /**
   * Input validation text
   */
  validationText?: string
}
