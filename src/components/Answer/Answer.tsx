import React from 'react'

import { Option } from 'components/Option'
import { IOptionProps } from 'components/Option/Option'

import { IAnswerButtonProps } from 'models/answer'
import { StyledAnswer as S } from './Answer.styles'

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
