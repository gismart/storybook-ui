import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { IOptionProps } from '../Option/Option'
import { Option } from '../Option'
import { StyledAnswer as S } from './Answer.styles'

export const enum answerTheme {
  DANCEBIT = 'dancebit',
  LUVLY = 'luvly',
  NUTRIMATE = 'nutrimate',
  FITME = 'fitme',
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
    activeBorder: '2px solid #8378EF',
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
    activeBoxShadow: 'none',
    borderRadius: '16px',
    padding: '0 16px',
    type: 'checkbox',
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
