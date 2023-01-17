import React, { InputHTMLAttributes, RefObject } from 'react'

import { IInputProps } from '../../models/input'
import { StyledInputWithFloatPlaceholder as S } from './InputWithFloatPlaceholder.styles'

export interface ILabelProps {
  leftLabelPosition?: string
  labelColor?: string
  labelFontSize?: string
  hasValue?: boolean
}

export interface IProps
  extends IInputProps,
    ILabelProps,
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

export const InputWithFloatPlaceholder: React.FC<IProps> = ({
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
