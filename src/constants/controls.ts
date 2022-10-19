import { ControlsCategories } from './rootConstants'

export const COMMON_STYLES_CONTROLS = {
  backgroundColor: {
    control: 'color',
    table: {
      category: ControlsCategories.COLORS,
    },
  },
  backgroundGradientColor: {
    control: 'text',
    table: {
      category: ControlsCategories.COLORS,
    },
  },
  color: {
    control: 'color',
    table: {
      category: ControlsCategories.COLORS,
    },
  },
  boxShadow: {
    control: 'text',
    table: {
      category: ControlsCategories.COLORS,
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
      category: ControlsCategories.SIZES,
    },
  },
  width: {
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  maxWidth: {
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  minHeight: {
    control: {
      type: 'number',
      min: 1,
      max: 2560,
      step: 1,
    },
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  height: {
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  maxHeight: {
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  isFullWidth: {
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  padding: {
    control: 'text',
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  margin: {
    control: 'text',
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  borderRadius: {
    control: 'text',
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  border: {
    control: 'text',
    table: {
      category: ControlsCategories.SIZES,
    },
  },
  textAlign: {
    control: 'select',
    table: {
      category: ControlsCategories.ALIGNMENT,
    },
  },
  fontSize: {
    control: 'number',
    table: {
      category: ControlsCategories.FONTS,
    },
  },
  lineHeight: {
    control: 'number',
    table: {
      category: ControlsCategories.FONTS,
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
      category: ControlsCategories.FONTS,
    },
  },
}
