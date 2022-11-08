import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import checkIcon from 'assets/images/check-icon-pink.svg'

import { ListItemWithIcon } from 'components/ListItemWithIcon'
import { COMMON_STYLES_CONTROLS } from 'constants/controls'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ListItemWithIcon',
  component: ListItemWithIcon,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
  },
} as ComponentMeta<typeof ListItemWithIcon>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ListItemWithIcon> = (args) => (
  <>
    <ListItemWithIcon {...args} />
    <ListItemWithIcon {...args} />
  </>
)

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  children: (
    <span>
      Short yet effective workouts. Just 5 minutes a day to burn fat quickly
    </span>
  ),
  maxWidth: '320px',
  padding: '0 0 0 34px',
  margin: '0 0 20px 0',
  color: '#2d3240',
  lineHeight: '20px',
  iconWidth: 24,
  iconHeight: 24,
  iconSrc: checkIcon,
}
