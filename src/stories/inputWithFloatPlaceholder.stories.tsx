import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import checkIcon from 'assets/images/check-icon-green.svg'
import crossIcon from 'assets/images/cross-icon.svg'

import {
  InputWithFloatPlaceholder,
  InputWithFloatPlaceholderTheme,
} from 'components/InputWithFloatPlaceholder'
import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import dancebitCheckIcon from '../assets/images/dancebit-check-icon.svg'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/InputWithFloatPlaceholder',
  component: InputWithFloatPlaceholder,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
  },
} as ComponentMeta<typeof InputWithFloatPlaceholder>

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
    checkIconSvg: dancebitCheckIcon,
    focusedLabelFontSize: '14px',
    focusedLabelColor: '#626262',
    labelColor: '#626262',
    labelFontSize: '16px',
    labelFontWeight: '400',
  },
}
// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputWithFloatPlaceholder> = (args) => (
  <InputWithFloatPlaceholder {...args} />
)

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  maxWidth: '320px',
  width: '260px',
  label: 'Your email',
  isValid: true,
  color: 'rgb(45, 50, 64)',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '1px',
  borderRadius: '10px',
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid rgb(129, 132, 140)',
  padding: '32px 52px 8px 16px',
  hasValidationIcon: true,
  value: 'example value',
  checkIconSvg: checkIcon,
  crossIconSvg: crossIcon,
}

export const DancebitInput = Template.bind({})
DancebitInput.args = {
  value: 'example value',
  isValid: true,
  ...inputThemes[InputWithFloatPlaceholderTheme.DANCEBIT],
}
