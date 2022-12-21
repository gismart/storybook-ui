import React from 'react'

import { IFontsProps } from 'models/fonts'
import { IColorsProps } from 'models/colors'
import { IDimensionsProps } from 'models/dimensions'
import {
  ContentHorizontalAlignment,
  ContentVerticalAlignment,
} from 'constants/rootConstants'
import { Option } from 'components/Option'
import { IOptionProps } from 'components/Option/Option'
import { StyledAnswerWithIcon as S } from './AnswerWithIcon.styles'

export interface IAnswerWithIconContentProps {
  spacingBetweenIconAndContent?: string
}

export interface IAnswerWithIconProps
  extends IDimensionsProps,
    IFontsProps,
    IColorsProps,
    IAnswerWithIconContentProps {
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
   * Should icon render on the left side
   */
  reverse?: boolean
  /**
   * Define border on active element
   */
  activeBorder?: string
  /**
   * Define vertical alignment for icon
   */
  iconAlignSelf?: ContentVerticalAlignment
}

export const AnswerWithIcon: React.FC<IAnswerWithIconProps & IOptionProps> = ({
  children,
  type,
  value,
  name,
  checked,
  disabled,
  onChange,
  iconSrc,
  iconWidth,
  iconHeight,
  spacingBetweenIconAndContent,
  iconAlignSelf,
  ...props
}) => (
  <Option
    value={value}
    name={name}
    type={type}
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  >
    <S.Root {...props}>
      <S.Icon
        src={iconSrc}
        alt=""
        style={{
          width: iconWidth,
          height: iconHeight,
          alignSelf: iconAlignSelf,
        }}
      />
      <S.Content spacingBetweenIconAndContent={spacingBetweenIconAndContent}>
        {children}
      </S.Content>
    </S.Root>
  </Option>
)
