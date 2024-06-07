import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { Option } from '../Option'
import { IOptionProps } from '../Option/Option'

import checkIconWhite from '../../assets/images/check-icon-white.svg'

import { StyledAnswerWithCheckbox as S } from './AnswerWithCheckbox.styles'

export interface IAnswerWithCheckboxContentProps {
  spacingBetweenCheckboxAndContent?: string

  contentHorizontalAlign?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
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
  checkboxBorderRadius?: string
  /**
   * What checkbox border radius to use
   */
}

export interface IAnswerWithCheckboxProps extends IAnswerButtonProps {
  reverse?: boolean
}

export const enum answerWithCheckboxTheme {
  DANCEBIT = 'dancebit',
}

const answerWithCheckboxThemes: Record<
  string,
  Record<string, string | boolean>
> = {
  dancebit: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#F5F6F7',
    color: '#17202A',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '6px',
    padding: '0 16px',
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    checkboxWidth: '24px',
    checkboxHeight: '24px',
    checkboxBorderRadius: '8px',
    checkboxBorder: '1.5px solid #CACACA',
    checkboxBackgroundActiveColor: '#03AAF5',
    reverse: true,
    activeBackgroundColor: '#EAF7FF',
    activeColor: '#17202A',
    border: '2px solid transparent',
    iconSrc: checkIconWhite,
    boxShadow: '0 0 0 1px #E9E9E9',
    activeBoxShadow: '0 0 0 2px #03AAF5',
    checkboxActiveBorder: '1px solid transparent',
  },
}

const AnswerWithCheckboxBase: React.FC<
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
  checkboxBorderRadius,
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
          checkboxBorderRadius={checkboxBorderRadius}
        />
        <S.Content
          spacingBetweenCheckboxAndContent={spacingBetweenCheckboxAndContent}
          contentHorizontalAlign={contentHorizontalAlign}
        >
          <div>{children}</div>
        </S.Content>
      </S.Root>
    </Option>
  )
}

export const AnswerWithCheckbox: React.FC<
  IAnswerWithCheckboxProps &
    IOptionProps &
    ICheckboxProps &
    IAnswerWithCheckboxContentProps &
    IThemedComponent
> = ({ theme, ...props }) => (
  <AnswerWithCheckboxBase
    {...(theme && answerWithCheckboxThemes[theme])}
    {...props}
  />
)
