import React, {
  InputHTMLAttributes,
  KeyboardEvent,
  RefObject,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { IInputProps } from 'models/input'
import { StyledInput as S } from './Input.styles'

export const NumericKeypadRegex = /([0-9]{1}|Backspace|Enter)/
export const NumericKeypadFloatRegex = /([0-9.,]{1}|Backspace|Enter)/

export interface IWrapperProps {
  width?: string
  validationText?: string
  validationTextColor?: string
  validationTextSize?: string
  validationTextLineHeight?: string
}

export interface ILabelProps {
  leftLabelPosition?: string
  labelColor?: string
  labelFontSize?: string
}

export interface IProps
  extends IInputProps,
    ILabelProps,
    IWrapperProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  hasVisibilityControl?: boolean
  inputRef?: RefObject<HTMLInputElement>
  className?: string
  allowFloatNumbers?: boolean
  isContentCentered?: boolean
}

export const Input: React.FC<IProps> = ({
  label,
  hasVisibilityControl = false,
  isValid = true,
  validationText = '',
  inputRef,
  className,
  type,
  allowFloatNumbers = true,
  maxLength = 30,
  isContentCentered = false,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const inputType = useMemo(() => {
    if (!hasVisibilityControl) return type

    return isVisible ? 'text' : 'password'
  }, [hasVisibilityControl, isVisible, type])

  const handleNumberKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        !(
          allowFloatNumbers ? NumericKeypadFloatRegex : NumericKeypadRegex
        ).test(event.key)
      ) {
        event.preventDefault()
      }
    },
    [allowFloatNumbers],
  )

  return (
    <S.Wrapper
      data-valid={isValid}
      data-validation-text={validationText}
      {...props}
    >
      <S.Input
        className={className}
        hasVisibilityControl={hasVisibilityControl}
        isContentCentered={isContentCentered}
        required
        type={inputType}
        ref={inputRef}
        spellCheck={false}
        maxLength={maxLength}
        onKeyDown={inputType === 'number' ? handleNumberKeyDown : undefined}
        {...props}
      />
      {label && <S.Label {...props}>{label}</S.Label>}
      {hasVisibilityControl && (
        <S.VisibilityButton
          type="button"
          onClick={() => setIsVisible((prevValue) => !prevValue)}
          data-visible={isVisible}
        />
      )}
    </S.Wrapper>
  )
}
