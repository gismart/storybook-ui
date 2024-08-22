import React, { InputHTMLAttributes, RefObject, useMemo } from 'react'

import { IThemedComponent } from '../../models/common'
import { IInputProps } from '../../models/input'
import { StyledInputWithFloatPlaceholder as S } from './InputWithFloatPlaceholder.styles'

export const enum InputWithFloatPlaceholderTheme {
  DANCEBIT = 'dancebit',
  NUTRIMATE = 'nutrimate',
}

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
  backgroundColor?: string
  checkIconSvg?: string
  crossIconSvg?: string
}

const inputThemes: Record<string, any> = {
  dancebit: {
    maxWidth: '320px',
    width: '260px',
    label: 'Your email',
    color: '#000',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '24px',
    borderRadius: '16px',
    backgroundColor: '#FFF',
    border: '1px solid #CACACA',
    padding: '32px 52px 8px 16px',
    hasValidationIcon: true,
    focusedLabelFontSize: '14px',
    focusedLabelColor: '#626262',
    labelColor: '#626262',
    labelFontSize: '16px',
    labelFontWeight: '400',
  },
  nutrimate: {
    maxWidth: '320px',
    width: '260px',
    label: 'Your email',
    color: '#000',
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '24px',
    borderRadius: '16px',
    backgroundColor: '#FFF',
    border: '1px solid #E9E9E9',
    padding: '32px 16px 8px',
    hasValidationIcon: true,
    focusedLabelFontSize: '14px',
    focusedLabelColor: '#626262',
    labelColor: '#626262',
    labelFontSize: '16px',
    labelFontWeight: '400',
    labelLineHeight: '18px',
  },
}

export const InputWithFloatPlaceholderBase: React.FC<IProps> = ({
  value,
  label,
  shortLabel = '',
  isValid = true,
  validationText = '',
  type = 'text',
  iconSrc,
  marginBottom = 0,
  height = '60px',
  hasValidationIcon = false,
  checkIconSvg,
  crossIconSvg,
  backgroundColor = '#fff',
  ...props
}) => {
  const labelToShow = useMemo(() => {
    if (shortLabel) {
      return value ? shortLabel : label
    }
    return label
  }, [label, shortLabel, value])

  return (
    <S.Wrapper
      data-valid={isValid}
      data-validation-text={validationText}
      marginBottom={marginBottom}
      backgroundColor={backgroundColor}
      {...props}
    >
      <S.Input
        required
        type={type}
        height={height}
        value={value}
        ref={props.inputRef}
        backgroundColor={backgroundColor}
        {...props}
      />
      <S.Label hasValue={!!value} {...props}>
        {labelToShow}
      </S.Label>
      {hasValidationIcon && (
        <>
          {value && isValid && checkIconSvg && (
            <S.Icon src={checkIconSvg} alt="check-icon" />
          )}
          {value && !isValid && crossIconSvg && (
            <S.Icon src={crossIconSvg} alt="cross-icon" />
          )}
        </>
      )}
      {iconSrc && <S.Icon src={iconSrc} alt="input-icon" />}
    </S.Wrapper>
  )
}

export const InputWithFloatPlaceholder: React.FC<IProps & IThemedComponent> = ({
  theme,
  ...props
}) => (
  <InputWithFloatPlaceholderBase
    {...(theme && inputThemes[theme])}
    {...props}
  />
)
