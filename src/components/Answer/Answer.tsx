import React from 'react'

import { Option } from 'components/Option'
import { IOptionProps } from 'components/Option/Option'

import { IAnswerButtonProps } from 'models/answer'
import { IThemedComponent } from 'models/common'
import { StyledAnswer as S } from './Answer.styles'

const answerThemes: Record<string, Record<string, string | boolean>> = {
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
