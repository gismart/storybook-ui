import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/Button'

// eslint-disable-next-line import/no-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: {
        category: 'colors',
      },
    },
    backgroundGradientColor: {
      control: 'text',
      table: {
        category: 'colors',
      },
    },
    color: {
      control: 'color',
      table: {
        category: 'colors',
      },
    },
    minWidth: {
      control: {
        type: 'number',
        min: 1,
        max: 2560,
        step: 1,
      },
      table: {
        category: 'sizes',
      },
    },
    isFullWidth: {
      table: {
        category: 'sizes',
      },
    },
    padding: {
      control: 'text',
      table: {
        category: 'sizes',
      },
    },
    textAlign: {
      control: 'select',
      table: {
        category: 'alignment',
      },
    },
    isDisabled: {
      table: {
        category: 'interaction',
      },
    },
    disableBackgroundColor: {
      control: 'color',
      table: {
        category: 'colors',
      },
    },
    borderRadius: {
      control: 'text',
      table: {
        category: 'visual',
      },
    },
    fontSize: {
      control: 'number',
      table: {
        category: 'fonts',
      },
    },
    lineHeight: {
      control: 'number',
      table: {
        category: 'fonts',
      },
    },
    fontWeight: {
      control: {
        type: 'number',
        min: 100,
        max: 900,
        step: 100,
      },
      table: {
        category: 'fonts',
      },
    },
    buttonRef: { control: false },
  },
} as ComponentMeta<typeof Button>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// 👇 Each story then reuses that template
export const Simple = Template.bind({})
Simple.args = {
  children: 'Button',
  padding: '10px 20px',
  minWidth: 240,
  fontSize: 20,
}
