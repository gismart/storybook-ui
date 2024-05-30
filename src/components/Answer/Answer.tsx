import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { IOptionProps } from '../Option/Option'
import { Option } from '../Option'
import { StyledAnswer as S } from './Answer.styles'

export const enum answerTheme {
  DANCEBIT = 'dancebit',
  LUVLY = 'luvly',
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
