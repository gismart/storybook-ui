import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { Option } from '../Option'
import { IOptionProps } from '../Option/Option'

import checkIconWhite from '../../assets/images/check-icon-white.svg'

import { StyledAnswerWithIconAndCheckbox as S } from './AnswerWithIconAndCheckbox.styles'

export interface IAnswerWithIconAndCheckboxContentProps {
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

export interface IAnswerWithIconAndCheckboxImageProps {
  /**
    Icon path
*/
  imageSrc?: string
  /**
   * Icon width
   */
  imageWidth?: string
  /**
   * Icon height
   */
  imageHeight?: string
  /**
   * Define vertical alignment for icon
   */
  imageAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
}

export interface IAnswerWithIconAndCheckboxProps extends IAnswerButtonProps {
  reverse?: boolean
}

export const enum answerWithIconAndCheckboxTheme {
  DANCEBIT = 'dancebit',
  NUTRIMATE = 'nutrimate',
  FITME = 'fitme',
  CARDIMATE = 'cardimate',
  LUVLY_SOLID = 'luvlySolid',
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
    spacingBetweenCheckboxAndContent: '0 16px',
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
    imageWidth: '40px',
    imageHeight: '40px',
    imageAlignSelf: 'center',
  },
  nutrimate: {
    activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
    activeBorder: '1px solid #a9cd50',
    activeColor: '#2c3131',
    backgroundColor: '#fff',
    border: '1px solid #e9e9e9',
    borderRadius: '48px',
    checkboxActiveBorder: '1px solid #a9cd50',
    checkboxBackgroundActiveColor: '#a9cd50',
    checkboxBackgroundColor: '#fff',
    checkboxBorder: '1px solid #E9E9E9',
    checkboxBorderRadius: '8px',
    checkboxHeight: '24px',
    checkboxWidth: '24px',
    color: '#2c3131',
    spacingBetweenCheckboxAndContent: '0 16px',
    fontSize: '17px',
    fontWeight: '600',
    height: '80px',
    isFullWidth: true,
    lineHeight: '24px',
    maxWidth: '343px',
    padding: '0 16px',
    reverse: true,
    type: 'checkbox',
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
    spacingBetweenCheckboxAndContent: '0 0 0 16px',
    checkboxBorder: '1px solid #CACACA',
    checkboxBorderRadius: '50%',
    checkboxActiveBorder: 'none',
    checkboxBackgroundColor: '#fff',
    checkboxBackgroundActiveColor: '#8378EF',
    checkboxHeight: '24px',
    checkboxWidth: '24px',
    imageSrc: '',
    imageWidth: '40px',
    imageHeight: '40px',
    imageAlignSelf: 'center',
    type: 'checkbox',
  },
  cardimate: {
    height: '100px',
    isFullWidth: true,
    maxWidth: '343px',
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: '700',
    color: '#2C3131',
    activeColor: '#2C3131',
    padding: '0 16px 0 8px',
    reverse: true,
    backgroundColor: '#F2F3F5',
    activeBackgroundColor: 'rgba(53, 179, 229, 0.12)',
    border: '1px solid #E9E9E9',
    activeBorder: '1px solid #35B3E5',
    borderRadius: '16px',
    iconSrc: checkIconWhite,
    spacingBetweenCheckboxAndContent: '0 16px',
    checkboxBorder: '1.5px solid #CACACA',
    checkboxBorderRadius: '6px',
    checkboxActiveBorder: '1.5px solid transparent',
    checkboxBackgroundColor: '#F2F3F5',
    checkboxBackgroundActiveColor: '#35B3E5',
    checkboxHeight: '21px',
    checkboxWidth: '21px',
    imageSrc:
      'https://cdn-prod-unified-content.gismart.xyz/03df34be4965496c6da922b4a6ec6b446fcb268aea40296954b01bd8af25b272/deli-meat.png',
    imageWidth: '100px',
    imageHeight: '100px',
    imageAlignSelf: 'center',
    type: 'checkbox',
  },
  [answerWithIconAndCheckboxTheme.LUVLY_SOLID]: {
    type: 'checkbox',
    isFullWidth: true,
    maxWidth: '343px',
    height: '80px',
    backgroundColor: '#fff',
    color: '#17202A',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 16px',
    spacingBetweenCheckboxAndContent: '0 16px',
    checkboxWidth: '24px',
    checkboxHeight: '24px',
    checkboxBorderRadius: '50%',
    checkboxBorder: '1.5px solid #CACACA',
    checkboxBackgroundActiveColor: '#2e201e',
    reverse: true,
    activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
    activeColor: '#17202A',
    border: '2px solid transparent',
    activeBorder: '2px solid #ff8276',
    iconSrc: checkIconWhite,
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
    checkboxActiveBorder: '1.5px solid transparent',
    imageSrc: 'https://i.ibb.co/C8zTW2k/break-up-1.png',
    imageWidth: '40px',
    imageHeight: '40px',
    imageAlignSelf: 'center',
  },
}

const AnswerWithIconAndCheckboxBase: React.FC<
  IAnswerWithIconAndCheckboxProps &
    IAnswerWithIconAndCheckboxImageProps &
    IOptionProps &
    ICheckboxProps &
    IAnswerWithIconAndCheckboxContentProps
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
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlignSelf,
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
        <S.Icon
          src={imageSrc}
          alt=""
          style={{
            width: imageWidth,
            minWidth: imageWidth,
            height: imageHeight,
            minHeight: imageHeight,
            alignSelf: imageAlignSelf,
          }}
        />
      </S.Root>
    </Option>
  )
}

export const AnswerWithIconAndCheckbox: React.FC<
  IAnswerWithIconAndCheckboxProps &
    IAnswerWithIconAndCheckboxImageProps &
    IOptionProps &
    ICheckboxProps &
    IAnswerWithIconAndCheckboxContentProps &
    IThemedComponent
> = ({ theme, ...props }) => (
  <AnswerWithIconAndCheckboxBase
    {...(theme && answerWithCheckboxThemes[theme])}
    {...props}
  />
)
