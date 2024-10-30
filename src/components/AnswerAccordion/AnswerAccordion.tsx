import React from 'react'

import { IAnswerButtonProps } from '../../models/answer'
import { IThemedComponent } from '../../models/common'
import { IOptionProps } from '../Option/Option'
import { Option } from '../Option'
import { StyledAnswerAccordion as S } from './AnswerAccordion.styles'

export const enum answerAccordionTheme {
  LUVLY = 'luvly',
}

const answerAccordionThemes: Record<
  string,
  Record<string, string | boolean>
> = {
  luvly: {
    type: 'checkbox',
    boxShadow: '0px 4px 14px 0px rgba(8, 4, 23, 0.03)',
    isFullWidth: true,
    height: '80px',
    backgroundColor: '#fff',
    activeBackgroundColor: 'rgba(255, 130, 118, 0.12)',
    border: '1px solid transparent',
    activeBorder: '1px solid #ff8276',
    color: '#17202a',
    activeColor: '#17202a',
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '24px',
    borderRadius: '16px',
    padding: '0 17px',
    margin: '0 0 16px',
    maxWidth: '343px',
    iconHeight: '24px',
    spacingBetweenIconAndContent: '12px',
  },
}

export interface IAnswerAccordionProps extends IAnswerButtonProps {
  /**
   * Icon path
   */
  iconSrc?: string
  /**
   * Icon width
   */
  iconWidth?: string
  /**
   * Icon min width
   */
  iconMinWidth?: string
  /**
   * Icon height
   */
  iconHeight?: string
  /**
   * Icon min height
   */
  iconMinHeight?: string
  /**
   * Define vertical alignment for icon
   */
  iconAlignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch'
  /**
   * Define margin between icon and text
   */
  spacingBetweenIconAndContent?: string
}

export const AnswerAccordion: React.FC<
  IAnswerButtonProps & IOptionProps & IThemedComponent & IAnswerAccordionProps
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
  iconSrc,
  iconWidth,
  iconMinWidth,
  iconMinHeight,
  iconHeight,
  spacingBetweenIconAndContent,
  iconAlignSelf,
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
    <S.Root
      style={style}
      {...(theme && answerAccordionThemes[theme])}
      {...props}
    >
      <div>{children}</div>
      <S.HiddenContent>
        {iconSrc && (
          <S.Icon
            src={iconSrc}
            alt=""
            style={{
              width: iconWidth,
              height: iconHeight,
              alignSelf: iconAlignSelf,
              minHeight: iconMinHeight,
              minWidth: iconMinWidth,
              marginRight: spacingBetweenIconAndContent,
            }}
          />
        )}
        A sculpted, elegant chin can really boost your confidence, and Luvly
        will help you achieve it
      </S.HiddenContent>
    </S.Root>
  </Option>
)
