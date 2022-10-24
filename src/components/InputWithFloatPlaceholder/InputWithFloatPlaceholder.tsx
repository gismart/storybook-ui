import React, { InputHTMLAttributes, RefObject } from 'react'

import { StyledInputWithFloatPlaceholder as S } from './InputWithFloatPlaceholder.styles'
import { IInputProps } from 'models/input'

export interface TLabelProps {
  leftLabelPosition?: string
  labelColor?: string
  labelFontSize?: string
  hasValue?: boolean
}

export interface TProps
  extends IInputProps,
    TLabelProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  inputRef?: RefObject<HTMLInputElement>
  className?: string
  allowFloatNumbers?: boolean
  isContentCentered?: boolean
  iconSrc?: string
  marginBottom?: number
  checkIconSvg?: string
  crossIconSvg?: string
}

export const InputWithFloatPlaceholder: React.FC<TProps> = ({
  value,
  label,
  isValid = true,
  validationText = '',
  type = 'text',
  iconSrc,
  marginBottom = 0,
  height = '60px',
  hasValidationIcon = false,
  checkIconSvg,
  crossIconSvg,
  ...props
}) => (
  <S.Wrapper
    data-valid={isValid}
    data-validation-text={validationText}
    marginBottom={marginBottom}
    {...props}
  >
    <S.Input required type={type} height={height} value={value} {...props} />
    <S.Label hasValue={!!value}>{label}</S.Label>
    {hasValidationIcon && (
      <>
        {value && isValid && <S.Icon src={checkIconSvg} alt="check-icon" />}
        {value && !isValid && <S.Icon src={crossIconSvg} alt="cross-icon" />}
      </>
    )}
    {iconSrc && <S.Icon src={iconSrc} alt="input-icon" />}
  </S.Wrapper>
)
