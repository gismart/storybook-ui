import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { COMMON_STYLES_CONTROLS } from 'constants/controls'
import { ControlsCategories } from 'constants/rootConstants'

import { AnswerAccordion } from 'components/AnswerAccordion'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/AnswerAccordion',
  component: AnswerAccordion,
  argTypes: {
    ...COMMON_STYLES_CONTROLS,
    textAlign: {
      control: false,
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
    iconSrc: {
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconWidth: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconHeight: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    iconAlignSelf: {
      table: {
        category: ControlsCategories.ALIGNMENT,
      },
    },
    reverse: {
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    spacingBetweenIconAndContent: {
      control: 'text',
      table: {
        category: ControlsCategories.ADDON,
      },
    },
    activeBorder: {
      control: 'text',
      table: {
        category: ControlsCategories.SIZES,
      },
    },
  },
} as ComponentMeta<typeof AnswerAccordion>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AnswerAccordion> = (args) => (
  <AnswerAccordion {...args} />
)

// 👇 Each story then reuses that template
export const Simple = Template.bind({})
Simple.args = {
  children: 'Answer Accordion',
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
  padding: '16px',
  margin: '0 0 16px',
  maxWidth: '343px',
  value: 'User answer',
  hiddenText:
    'A sculpted, elegant chin can really boost your confidence, and Luvly will help you achieve it',
  iconSrc: 'https://cdn-icons-png.flaticon.com/512/1791/1791311.png',
  iconHeight: '24px',
  spacingBetweenIconAndContent: '12px',
}
