import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'

import arrowIcon from 'src/assets/images/arrow-right-icon.svg'

import { ButtonWithIcon } from 'components/ButtonWithIcon'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/ButtonWithIcon',
  component: ButtonWithIcon,
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
} as ComponentMeta<typeof ButtonWithIcon>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonWithIcon> = (args) => (
  <ButtonWithIcon {...args} />
)

// 👇 Each story then reuses that template
export const Regular = Template.bind({})
Regular.args = {
  isFullWidth: true,
  children: (
    <div>
      Continue
      <img src={arrowIcon} alt="" />
    </div>
  ),
  height: '52px',
  lineHeight: '52px',
  borderRadius: '32px',
  padding: '0 16px',
  maxWidth: '320px',
  fontSize: '18px',
  fontWeight: '700',
  backgroundColor: '#628F7B',
  iconHeight: '24px',
  iconWidth: '24px',
  iconPositionRight: '14px',
  style: {
    letterSpacing: '0.2px',
  },
}
