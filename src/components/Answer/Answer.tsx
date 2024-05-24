import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { IOptionProps } from '../Option/Option'
import { Option } from '../Option'
import { StyledAnswer as S } from './Answer.styles'

const themes: Record<string, Record<string, string | boolean>> = {
  girlish: {
    boxShadow: '0px 8px 20px #F2E6E1',
    isFullWidth: true,
    maxWidth: '320px',
    height: '64px',
    backgroundColor: '#ffffff',
    activeBackgroundColor: '#D0DDD7',
    activeColor: '#2C3131',
    color: '#2C3131',
    fontSize: '18px',
    lineHeight: '24px',
    borderRadius: '20px',
    margin: '0 0 16px',
    padding: '0 16px',
  },
  luvlySimple: {
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
    <S.Root style={style} {...(theme && themes[theme])} {...props}>
      <div>{children}</div>
    </S.Root>
  </Option>
)
