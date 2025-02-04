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
  ACCOUNT_LUVLY = 'accountLuvly',
  DANCEBIT = 'dancebit',
  ACCOUNT_DANCEBIT = 'accountDancebit',
  NUTRIMATE = 'nutrimate',
  ACCOUNT_NUTRIMATE = 'accountNutrimate',
  FITME = 'fitme',
  ACCOUNT_FITME = 'accountFitme',
  CARDIMATE = 'cardimate',
  LUVLY = 'luvly',
}

const answerWithCheckboxThemes: Record<
  string,
  Record<string, string | boolean>
> = {
  accountLuvly: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#f2f3f5',
    activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
    color: '#17202a',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 17px',
    margin: '0 0 16px',
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    checkboxWidth: '22px',
    checkboxHeight: '22px',
    checkboxBorderRadius: '6px',
    checkboxBorder: '1px solid #e9e9e9',
    checkboxBackgroundActiveColor: '#ff8276',
    reverse: true,
    activeColor: '#17202a',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #ff8276',
    iconSrc: checkIconWhite,
    checkboxActiveBorder: '1px solid transparent',
  },
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
  luvly: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#fff',
    color: '#2D3240',
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 16px',
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    checkboxWidth: '24px',
    checkboxHeight: '24px',
    checkboxBorderRadius: '8px',
    checkboxBorder: '1.5px solid #CACACA',
    checkboxBackgroundActiveColor: '#FF7262',
    reverse: true,
    activeBackgroundColor: '#FFEFED',
    activeColor: '#2D3240',
    border: '2px solid transparent',
    iconSrc: checkIconWhite,
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
    activeBoxShadow: '0 0 0 2px #FF7262',
    checkboxActiveBorder: '1.5px solid transparent',
    maxwidth: '375px',
  },
  accountDancebit: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#f2f3f5',
    activeBackgroundColor: '#eaf7ff',
    color: '#17202a',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 17px',
    margin: '0 0 16px',
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    checkboxWidth: '22px',
    checkboxHeight: '22px',
    checkboxBorderRadius: '6px',
    checkboxBorder: '1px solid #e9e9e9',
    checkboxBackgroundActiveColor: '#03aaf5',
    reverse: true,
    activeColor: '#17202a',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #03aaf5',
    iconSrc: checkIconWhite,
    checkboxActiveBorder: '1px solid transparent',
  },
  nutrimate: {
    activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
    activeBorder: '1px solid #a9cd50',
    activeColor: '#2c3131',
    backgroundColor: '#fff',
    border: '1px solid #e9e9e9',
    borderRadius: '16px',
    checkboxActiveBorder: '1px solid #a9cd50',
    checkboxBackgroundActiveColor: '#a9cd50',
    checkboxBackgroundColor: '#fff',
    checkboxBorder: '1px solid #E9E9E9',
    checkboxBorderRadius: '8px',
    checkboxHeight: '24px',
    checkboxWidth: '24px',
    color: '#2c3131',
    fontSize: '17px',
    fontWeight: '600',
    height: '80px',
    iconSrc: checkIconWhite,
    isFullWidth: true,
    lineHeight: '24px',
    maxWidth: '343px',
    padding: '0 16px',
    reverse: true,
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    type: 'checkbox',
  },
  accountNutrimate: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#fff',
    activeBackgroundColor: 'rgba(169, 205, 80, 0.20)',
    color: '#2c3131',
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '24px',
    borderRadius: '48px',
    padding: '0 17px',
    margin: '0 0 16px',
    spacingBetweenCheckboxAndContent: '0 0 0 16px',
    checkboxWidth: '22px',
    checkboxHeight: '22px',
    checkboxBorderRadius: '6px',
    checkboxBorder: '1px solid #e9e9e9',
    checkboxBackgroundActiveColor: '#a9cd50',
    reverse: false,
    activeColor: '#2c3131',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #a9cd50',
    iconSrc: checkIconWhite,
    checkboxActiveBorder: '1px solid transparent',
  },
  fitme: {
    height: '80px',
    isFullWidth: true,
    maxWidth: '343px',
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: '600',
    color: '#17202A',
    activeColor: '#17202A',
    padding: '0 16px',
    reverse: true,
    backgroundColor: '#fff',
    activeBackgroundColor: '#F0ECFF',
    border: '2px solid transparent',
    activeBorder: '2px solid #8378EF',
    borderRadius: '16px',
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03);',
    activeBoxShadow: 'none',
    iconSrc:
      'https://cdn-prod-unified-content.gismart.xyz/95a0f4aac157ae778464868301bbc89a757bbd8234362ef568be31e6d6bf9e38/check-icon-white.webp',
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    checkboxBorder: '1px solid #CACACA',
    checkboxBorderRadius: '50%',
    checkboxActiveBorder: 'none',
    checkboxBackgroundColor: '#fff',
    checkboxBackgroundActiveColor: '#8378EF',
    checkboxHeight: '24px',
    checkboxWidth: '24px',
    type: 'checkbox',
  },
  accountFitme: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#f2f3f5',
    activeBackgroundColor: '#F0ECFF',
    color: '#17202a',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 17px',
    margin: '0 0 16px',
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    checkboxWidth: '24px',
    checkboxHeight: '24px',
    checkboxBorderRadius: '6px',
    checkboxBorder: '1px solid #e9e9e9',
    checkboxBackgroundActiveColor: '#8378EF',
    reverse: true,
    activeColor: '#17202a',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #8378EF',
    iconSrc: checkIconWhite,
    checkboxActiveBorder: '1px solid transparent',
  },
  cardimate: {
    height: '80px',
    isFullWidth: true,
    maxWidth: '343px',
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: '700',
    color: '#2C3131',
    activeColor: '#2C3131',
    padding: '0 16px',
    reverse: true,
    backgroundColor: '#F2F3F5',
    activeBackgroundColor: 'rgba(53, 179, 229, 0.12)',
    border: '1px solid #E9E9E9',
    activeBorder: '1px solid #35B3E5',
    borderRadius: '16px',
    iconSrc: checkIconWhite,
    spacingBetweenCheckboxAndContent: '0 16px 0 0',
    checkboxBorder: '1.5px solid #CACACA',
    checkboxBorderRadius: '6px',
    checkboxActiveBorder: '1.5px solid transparent',
    checkboxBackgroundColor: '#F2F3F5',
    checkboxBackgroundActiveColor: '#35B3E5',
    checkboxHeight: '21px',
    checkboxWidth: '21px',
    type: 'checkbox',
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
