import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'

import { Button } from 'components/Button'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    disabled: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    disableBackgroundColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    buttonRef: { control: false },
  },
} as ComponentMeta<typeof Button>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// 👇 Each story then reuses that template
export const PrimaryLuvly = Template.bind({})
PrimaryLuvly.args = {
  isFullWidth: true,
  children: 'Ok, Got it!',
  height: '50px',
  lineHeight: '50px',
  borderRadius: '12px',
  padding: '0 15px',
  maxWidth: '320px',
  fontSize: '17px',
  backgroundColor: 'rgb(255, 130, 118)',
}

export const PrimaryDancebit = Template.bind({})
PrimaryDancebit.args = {
  isFullWidth: true,
  children: 'Continue',
  height: '56px',
  lineHeight: '56px',
  borderRadius: '30px',
  padding: '0 16px',
  maxWidth: '327px',
  fontSize: '17px',
  backgroundColor: '#03AAF5',
  disableBackgroundColor: '#CACACA',
  fontWeight: '700',
}
