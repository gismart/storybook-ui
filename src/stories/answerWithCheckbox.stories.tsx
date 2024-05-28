import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'

import { AnswerWithCheckbox } from 'components/AnswerWithCheckbox'

import checkIconWhite from '../assets/images/check-icon-white.svg'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/AnswerWithCheckbox',
  component: AnswerWithCheckbox,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    textAlign: {
      control: 'select',
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    contentHorizontalAlign: {
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    activeBackgroundColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    activeColor: {
      control: 'color',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    activeBackgroundGradientColor: {
      control: 'text',
      table: {
        category: ControlsCategories.COLORS,
      },
    },
    checked: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    disabled: {
      table: {
        category: ControlsCategories.INTERACTION,
      },
    },
    activeBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.SIZES,
      },
    },
    checkboxWidth: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxHeight: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxActiveBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBackgroundColor: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    checkboxBackgroundActiveColor: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconSrc: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconSize: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    reverse: {
      control: 'boolean',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    spacingBetweenCheckboxAndContent: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
  },
} as ComponentMeta<typeof AnswerWithCheckbox>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AnswerWithCheckbox> = (args) => (
  <AnswerWithCheckbox {...args} />
)

// 👇 Each story then reuses that template
export const DancebitCheckbox = Template.bind({})
DancebitCheckbox.args = {
  children: (
    <span>
      Get a smaller <br /> waist
    </span>
  ),
  type: 'checkbox',
  isFullWidth: true,
  maxWidth: '218px',
  height: '80px',
  backgroundColor: '#F5F6F7',
  color: '#17202A',
  fontSize: '17px',
  fontWeight: '700',
  lineHeight: '24px',
  borderRadius: '6px',
  padding: '0 16px',
  value: 'lose_belly_fat',
  spacingBetweenCheckboxAndContent: '0 16px 0 0',
  checkboxActiveBorder: 'none',
  checkboxWidth: '24px',
  checkboxHeight: '24px',
  checkboxBorderRadius: '8px',
  checkboxBorder: '1.5px solid #CACACA',
  checkboxBackgroundActiveColor: '#03AAF5',
  reverse: true,
  activeBackgroundColor: '#EAF7FF',
  activeColor: '#17202A',
  border: '2px solid transparent',
  activeBorder: '2px solid#03AAF5',
  iconSrc: checkIconWhite,
}
