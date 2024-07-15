import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { Option } from '../Option'
import { IOptionProps } from '../Option/Option'
import { StyledAnswerWithIcon as S } from './AnswerWithIcon.styles'

export interface IAnswerWithIconContentProps {
  spacingBetweenIconAndContent?: string
}

export interface IAnswerWithIconProps
  extends IAnswerButtonProps,
    IAnswerWithIconContentProps {
  /**
   * Icon path
   */
  iconSrc?: string
  /**
   * Icon width
   */
  iconWidth?: string
  /**
   * Icon min width
   */
  iconMinWidth?: string
  /**
   * Icon height
   */
  iconHeight?: string
  /**
   * Icon min height
   */
  iconMinHeight?: string
  /**
   * Should icon render on the left side
   */
  reverse?: boolean
  /**
   * Define vertical alignment for icon
   */
  iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
}

export const enum answerWithIconTheme {
  DANCEBIT = 'dancebit',
  NUTRIMATE = 'nutrimate',
  FITME = 'fitme',
}

const answerWithIconThemes: Record<string, Record<string, string | boolean>> = {
  dancebit: {
    type: 'radio',
    isFullWidth: true,
    height: '100px',
    backgroundColor: '#f5f6f7',
    activeBackgroundColor: '#eaf7ff',
    boxShadow: '0 0 0 1px#E9E9E9',
    color: '#17202A',
    activeColor: '#17202A',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '16px',
    contentHorizontalAlign: 'flex-start',
    padding: '0 16px 0 8px',
    iconHeight: '100px',
    iconMinHeight: '100px',
    iconMinWidth: '100px',
    spacingBetweenIconAndContent: '16px',
    iconAlignSelf: 'flex-end',
    activeBoxShadow: ' 0 0 0 2px #03AAF5',
  },
  nutrimate: {
    activeBackgroundColor: 'rgba(169, 205, 80, 0.2)',
    activeBorder: '1px solid #a9cd50',
    activeColor: '#2c3131',
    backgroundColor: '#ffffff',
    border: '1px solid #e9e9e9',
    borderRadius: '48px',
    color: '#2c3131',
    fontSize: '17px',
    fontWeight: '600',
    height: '80px',
    iconHeight: '24px',
    isFullWidth: true,
    lineHeight: '24px',
    padding: '0 16px',
    spacingBetweenIconAndContent: '16px',
    type: 'radio',
  },
  fitme: {
    height: '80px',
    isFullWidth: true,
    maxWidth: '343px',
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '24px',
    color: '#17202A',
    activeColor: '#17202A',
    padding: '0 16px',
    backgroundColor: '#fff',
    activeBackgroundColor: '#F0ECFF',
    border: '2px solid transparent',
    activeBorder: '2px solid #8378EF',
    borderRadius: '16px',
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03);',
    activeBoxShadow: 'none',
    iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
    iconHeight: '40px',
    spacingBetweenIconAndContent: '16px',
    type: 'checkbox',
  },
}

const AnswerWithIconBase: React.FC<IAnswerWithIconProps & IOptionProps> = ({
  children,
  type,
  value,
  name,
  checked,
  disabled,
  onChange,
  iconSrc,
  iconWidth,
  iconMinWidth,
  iconMinHeight,
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
      {iconSrc && (
        <S.Icon
          src={iconSrc}
          alt=""
          style={{
            width: iconWidth,
            height: iconHeight,
            alignSelf: iconAlignSelf,
            minHeight: iconMinHeight,
            minWidth: iconMinWidth,
          }}
        />
      )}
      <S.Content spacingBetweenIconAndContent={spacingBetweenIconAndContent}>
        <div>{children}</div>
      </S.Content>
    </S.Root>
  </Option>
)

export const AnswerWithIcon: React.FC<
  IAnswerWithIconProps & IOptionProps & IThemedComponent
> = ({ theme, ...props }) => (
  <AnswerWithIconBase {...(theme && answerWithIconThemes[theme])} {...props} />
)
