import React from 'react'

import { IFontsProps } from '../../models/fonts'
import { IColorsProps } from '../../models/colors'
import { IDimensionsProps } from '../../models/dimensions'
import { ContentHorizontalAlignment } from '../../constants/root-constants'
import { Option } from '../Option'
import { IOptionProps } from '../Option/Option'
import { StyledAnswer as S } from './Answer.styles'

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
}

export const Answer: React.FC<IAnswerButtonProps & IOptionProps> = ({
  children,
  type,
  value,
  name,
  checked,
  disabled,
  onChange,
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
    <S.Root {...props}>{children}</S.Root>
  </Option>
)