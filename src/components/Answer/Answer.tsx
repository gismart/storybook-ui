import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { IOptionProps } from '../Option/Option'
import { Option } from '../Option'
import { StyledAnswer as S } from './Answer.styles'

export const enum answerTheme {
  DANCEBIT = 'dancebit',
  DANCEBIT_JAPANESE = 'dancebitJa',
  DANCEBIT_ADULT = 'dancebitAdult',
  DANCEBIT_SEXY = 'dancebitSexy',
  ACCOUNT_DANCEBIT = 'accountDancebit',
  LUVLY = 'luvly',
  ACCOUNT_LUVLY = 'accountLuvly',
  NUTRIMATE = 'nutrimate',
  ACCOUNT_NUTRIMATE = 'accountNutrimate',
  FITME = 'fitme',
  FITME_DARK = 'fitmeDark',
  ACCOUNT_FITME = 'accountFitme',
  CARDIMATE = 'cardimate',
  LUVLY_SOLID = 'luvlySolid',
}

const answerThemes: Record<string, Record<string, string | boolean>> = {
  dancebit: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: 'rgb(245, 246, 247)',
    color: '#17202A',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 16px',
    activeBackgroundColor: '#EAF7FF',
    boxShadow: '0 0 0 1px #E9E9E9',
    activeBoxShadow: '0 0 0 2px #03AAF5',
    activeColor: '#17202A',
  },
  dancebitJa: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#FFF',
    color: '#17202A',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 16px',
    activeBackgroundColor: '#EAF7FF',
    activeColor: '#17202A',
    activeBorder: '3px solid #03AAF5',
    border: '3px solid transparent',
    borderGradientColor:
      'linear-gradient(to right, white, white), linear-gradient(to right, #C6E2FF, #F8DAFB)',
  },
  dancebitAdult: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    maxWidth: '180px',
    backgroundColor: '#FFF',
    activeBackgroundColor: '#C6E9FE',
    boxShadow: '0 0 0 1px #C6E0F4',
    border: '2px solid transparent',
    color: '#17202A',
    activeColor: '#17202A',
    activeBoxShadow: '0 0 0 2px #03AAF5',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 16px',
  },
  dancebitSexy: {
    type: 'checkbox',
    isFullWidth: true,
    height: '80px',
    borderRadius: '16px',
    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.25)',
    border: '2px solid transparent',
    activeBorder: '2px solid #C61371',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    activeBackgroundColor: 'rgba(188, 25, 110, 0.25)',
    backdropFilter: 'blur(8px)',
    color: '#fff',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    padding: '0 16px',
    activeColor: '#fff',
  },
  accountDancebit: {
    type: 'checkbox',
    boxShadow: 'none',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#f2f3f5',
    activeBackgroundColor: '#eaf7ff',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #03aaf5',
    color: '#17202a',
    activeColor: '#17202a',
    fontSize: '17px',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 17px',
    margin: '0 0 16px',
    value: 'User answer',
  },
  luvly: {
    type: 'checkbox',
    boxShadow: 'rgb(223 227 243) 0px 8px 20px;',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#ff8276',
    color: 'rgb(45, 50, 64)',
    fontSize: '17px',
    borderRadius: '20px',
    padding: '0 15px',
    value: 'User answer',
  },
  accountLuvly: {
    type: 'checkbox',
    boxShadow: 'none',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#f2f3f5',
    activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #ff8276',
    color: '#17202a',
    activeColor: '#17202a',
    fontSize: '17px',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 17px',
    margin: '0 0 16px',
    value: 'User answer',
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
    isFullWidth: true,
    lineHeight: '24px',
    maxWidth: '343px',
    padding: '0 16px',
    type: 'checkbox',
  },
  accountNutrimate: {
    type: 'checkbox',
    boxShadow: 'none',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#fff',
    activeBackgroundColor: 'rgba(169, 205, 80, 0.20)',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #a9cd50',
    color: '#2c3131',
    activeColor: '#2c3131',
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '24px',
    borderRadius: '48px',
    padding: '0 17px',
    margin: '0 0 16px',
    value: 'User answer',
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
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#F0ECFF',
    border: '2px solid transparent',
    activeBorder: '2px solid #8378ef',
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
    activeBoxShadow: 'none',
    borderRadius: '16px',
    padding: '0 16px',
    type: 'checkbox',
  },
  fitmeDark: {
    height: '80px',
    isFullWidth: true,
    maxWidth: '343px',
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '24px',
    color: '#fff',
    activeColor: '#fff',
    backgroundColor: '#3E3C48',
    activeBackgroundColor: '#25214D',
    border: '2px solid transparent',
    activeBorder: '2px solid #8378ef',
    activeBoxShadow: 'none',
    borderRadius: '16px',
    padding: '0 16px',
    type: 'checkbox',
  },
  accountFitme: {
    type: 'checkbox',
    boxShadow: 'none',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#f2f3f5',
    activeBackgroundColor: '#F0ECFF',
    border: '1px solid #e9e9e9',
    activeBorder: '1px solid #8378ef',
    color: '#17202a',
    activeColor: '#17202a',
    fontSize: '17px',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 17px',
    margin: '0 0 16px',
    value: 'User answer',
  },
  cardimate: {
    height: '80px',
    isFullWidth: true,
    maxWidth: '343px',
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '24px',
    color: '#2C3131',
    activeColor: '#2C3131',
    backgroundColor: '#F2F3F5',
    activeBackgroundColor: 'rgba(53, 179, 229, 0.12)',
    border: '1px solid #E9E9E9',
    activeBorder: '1px solid #35B3E5',
    borderRadius: '16px',
    padding: '0 16px',
    type: 'checkbox',
  },
  luvlySolid: {
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#fff',
    activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
    border: '2px solid transparent',
    activeBorder: '2px solid #FF7262',
    color: '#17202a',
    activeColor: '#17202a',
    fontSize: '17px',
    lineHeight: '24px',
    fontWeight: '500',
    borderRadius: '16px',
    padding: '0 16px',
    margin: '0 0 12px',
    maxWidth: '343px',
  },
}

export const Answer: React.FC<
  IAnswerButtonProps & IOptionProps & IThemedComponent
> = ({
  theme,
  children,
  type,
  value,
  name,
  checked,
  disabled,
  onChange,
  style,
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
    <S.Root style={style} {...(theme && answerThemes[theme])} {...props}>
      <div>{children}</div>
    </S.Root>
  </Option>
)
