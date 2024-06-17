import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from 'components/Input'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Input',
  component: Input,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
  },
} as ComponentMeta<typeof Input>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  maxWidth: '320px',
  width: '260px',
  validationTextSize: '13px',
  validationTextLineHeight: '20px',
  isContentCentered: false,
  validationTextColor: '#ea5873',
  label: 'Your email',
  hasVisibilityControl: false,
  isValid: true,
  validationText: 'Please enter a valid email address',
  color: 'rgb(45, 50, 64)',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '1px',
  borderRadius: '10px',
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid rgb(129, 132, 140)',
  padding: '32px 52px 8px 16px',
  leftLabelPosition: '16px',
  labelColor: 'rgb(129, 132, 140)',
  labelFontSize: '16px',
  focusedLabelFontSize: '13px',
  focusedLabelColor: 'rgb(45, 50, 64)',
}

export const Number = Template.bind({})
Number.args = {
  maxWidth: '320px',
  width: '260px',
  height: '48px',
  isValid: true,
  color: 'rgb(45, 50, 64)',
  fontSize: '15px',
  fontWeight: '500',
  lineHeight: '1px',
  borderRadius: '10px',
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid rgb(129, 132, 140)',
  padding: '8px 25px',
  type: 'number',
  allowFloatNumbers: false,
  isContentCentered: true,
}

export const DancebitNumber = Template.bind({})
DancebitNumber.args = {
  maxWidth: '343px',
  width: '100%',
  height: '64px',
  isValid: true,
  color: '#17202A',
  fontSize: '30px',
  fontWeight: '700',
  lineHeight: '38px',
  borderRadius: '16px',
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid #CACACA',
  padding: '0 16px',
  type: 'number',
  allowFloatNumbers: false,
  isContentCentered: true,
  focusedBorderColor: '#CACACA',
}

export const DancebitText = Template.bind({})
DancebitText.args = {
  maxWidth: '343px',
  width: '100%',
  height: '64px',
  isValid: true,
  color: '#A9A9A9',
  fontSize: '30px',
  fontWeight: '700',
  lineHeight: '38px',
  borderRadius: '16px',
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid #CACACA',
  padding: '0 16px',
  type: 'text',
  allowFloatNumbers: false,
  isContentCentered: true,
  focusedBorderColor: '#CACACA',
  placeholder: 'NAME',
}

export const NutrimateNumber = Template.bind({})
NutrimateNumber.args = {
  allowFloatNumbers: false,
  backgroundColor: '#fff',
  border: '1px solid #cacaca',
  borderRadius: '16px',
  color: '#2c3131',
  focusedBorderColor: '#CACACA',
  fontSize: '30px',
  fontWeight: '700',
  height: '64px',
  isContentCentered: true,
  isValid: true,
  lineHeight: '38px',
  maxWidth: '343px',
  padding: '0 16px',
  placeholder: '–',
  type: 'number',
  width: '100%',
}

export const NutrimateText = Template.bind({})
NutrimateText.args = {
  allowFloatNumbers: false,
  borderRadius: '16px',
  backgroundColor: '#fff',
  border: '1px solid #cacaca',
  color: '#2c3131',
  focusedBorderColor: '#cacaca',
  fontSize: '30px',
  fontWeight: '700',
  height: '64px',
  isContentCentered: true,
  isValid: true,
  lineHeight: '38px',
  maxWidth: '343px',
  padding: '0 16px',
  placeholder: '–',
  type: 'text',
  width: '100%',
}
