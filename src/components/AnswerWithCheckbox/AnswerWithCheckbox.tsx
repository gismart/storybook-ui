import React from 'react'

import { IFontsProps } from 'models/fonts'
import { IColorsProps } from 'models/colors'
import { IDimensionsProps } from 'models/dimensions'
import { Option } from 'components/Option'
import { IOptionProps } from 'components/Option/Option'
import { ContentHorizontalAlignment } from 'constants/rootConstants'

import { StyledAnswerWithCheckbox as S } from './AnswerWithCheckbox.styles'

export interface IAnswerWithCheckboxContentProps {
  spacingBetweenCheckboxAndContent?: string
  /**
   * How content will alignment horizontally
   */
  contentHorizontalAlign?: ContentHorizontalAlignment
}

export interface ICheckboxProps {
  /**
   * Define checkbox width
   */
  checkboxWidth?: string
  /**
   * Define checkbox height
   */
  checkboxHeight?: string
  /**
   * Path to checkbox active state icon
   */
  iconSrc?: string
  /**
   * Icon size as background
   */
  iconSize?: string
  /**
   * What checkbox background color to use
   */
  checkboxBackgroundColor?: string
  /**
   * What checkbox active state background color to use
   */
  checkboxBackgroundActiveColor?: string
  /**
   * Define checkbox border style
   */
  checkboxBorder?: string
  /**
   * Define checkbox active state border style
   */
  checkboxActiveBorder?: string
  /**
   * What checkbox background color to use
   */
}

export interface IAnswerWithCheckboxProps
  extends IDimensionsProps,
    IFontsProps,
    IColorsProps {
  children?: React.ReactNode
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
   * Should icon render on the left side
   */
  reverse?: boolean
}

export const AnswerWithCheckbox: React.FC<
  IAnswerWithCheckboxProps &
    IOptionProps &
    ICheckboxProps &
    IAnswerWithCheckboxContentProps
> = ({
  children,
  type,
  value,
  name,
  checked,
  disabled,
  onChange,
  checkboxWidth,
  checkboxHeight,
  checkboxBackgroundColor,
  checkboxBorder,
  spacingBetweenCheckboxAndContent,
  contentHorizontalAlign,
  ...props
}) => {
  return (
    <Option
      value={value}
      name={name}
      type={type}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    >
      <S.Root {...props}>
        <S.Checkbox
          checkboxWidth={checkboxWidth}
          checkboxHeight={checkboxHeight}
          checkboxBackgroundColor={checkboxBackgroundColor}
          checkboxBorder={checkboxBorder}
        />
        <S.Content
          spacingBetweenCheckboxAndContent={spacingBetweenCheckboxAndContent}
          contentHorizontalAlign={contentHorizontalAlign}
        >
          {children}
        </S.Content>
      </S.Root>
    </Option>
  )
}
