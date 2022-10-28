import React, { InputHTMLAttributes, useMemo } from 'react'
import { StyledOption as S } from './Option.styles'

export const enum OptionType {
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
}

export interface IOptionProps {
  type?: OptionType
  /**
   * Will save as user answer
   */
  value: string
  /**
   * Use it for radio type
   */
  name?: string
  /**
   * Use it in case with controlled component
   */
  checked?: boolean
  /**
   * Should element be disable
   */
  disabled?: boolean
  children?: React.ReactNode
  onChange?: (value: string, isChecked: boolean) => void
}

export const Option: React.FC<IOptionProps> = ({
  type,
  value,
  children,
  name,
  checked,
  disabled,
  onChange,
  ...rest
}) => {
  const inputProps = useMemo((): InputHTMLAttributes<HTMLInputElement> => {
    const props: InputHTMLAttributes<HTMLInputElement> = {
      value,
      type,
      onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(target.value, target.checked),
    }

    if (name) {
      props.name = name
    }

    if (checked !== undefined) {
      props.checked = checked
    }

    return props
  }, [checked, name, onChange, type, value])

  return (
    <S.OptionContainer {...rest}>
      <input disabled={disabled} {...inputProps} />
      {children}
    </S.OptionContainer>
  )
}
