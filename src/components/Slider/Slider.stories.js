import React from 'react';
import Slider from './index';

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    disabled: {
      description: 'Disables input and does not allow selection ',
      table: {
        category: 'behaviour'
      }
    },
    isLoading: {
      description: 'Shows a skeleton version of the slider',
      table: {
        category: 'behaviour'
      }
    },
    max: {
      description: 'Maximum value of the range',
      table: {
        category: 'content'
      }
    },
    maxPrefix: {
      description: 'Sets a prefix to the maximum value if `prefix` is not defined',
      table: {
        category: 'content'
      }
    },
    min: {
      description: 'Minimum value of the range',
      table: {
        category: 'content'
      }
    },
    minPrefix: {
      description: 'Sets a prefix to the minimum value if `prefix` is not defined',
      table: {
        category: 'content'
      }
    },
    minSuffix: {
      description: 'Sets a suffix to the minimum value if `suffix` is not defined',
      table: {
        category: 'content'
      }
    },
    name: {
      description: 'Defines a `name` for the input',
      table: {
        category: 'others'
      }
    },
    onChange: {
      description: 'Handles the behaviour when the onChange event is triggered',
      actions: 'onChange action',
      table: {
        category: 'events'
      }
    },
    onAfterChange: {
      description: 'Handles the behaviour when the onAfterChange event is triggered',
      actions: 'onAfterChange action',
      table: {
        category: 'events'
      }
    },
    prefix: {
      description:
        'Sets a prefix both for minimum and maximum values. Overrides `maxPrefix` and `minPrefix`',
      table: {
        category: 'content'
      }
    },
    step: {
      description: 'Sets the increment size (step) of the slider selector',
      table: {
        category: 'content'
      }
    },
    suffix: {
      description:
        'Sets a suffix both for minimum and maximum values. Overrides `maxSuffix` and `minSuffix`',
      table: {
        category: 'content'
      }
    },
    value: {
      description:
        "If initially defined by the user, it expects a number in `slider` variant and a two-element array with minimum value and maximum value like `value = {[0,100]}` in the 'range' variant",
      table: {
        category: 'content'
      }
    },
    variant: {
      description: 'Allows to choose between `slider` or `range`',
      table: {
        category: 'format'
      }
    },
    railSize: {
      description: 'Allows to choose between `regular` or `slim` rail size',
      table: {
        category: 'format'
      }
    },
    size: {
      description:
        'Allows to choose between `medium` or `large` component size, use large for better mobile ux',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    disabled: false,
    onChange: () => {}
  }
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = args => {
  return (
    <div style={decoratorStyles}>
      <Slider {...args} />
    </div>
  );
};

Playground.args = {
  min: 1,
  max: 10,
  step: 1,
  variant: 'slider',
  railSize: 'regular',
  size: 'medium',
  value: 2
};

export const Range = ({ ...args }) => {
  return (
    <div style={decoratorStyles}>
      <Slider {...args} format={value => new Intl.NumberFormat('en').format(value)} />
    </div>
  );
};

Range.args = {
  min: 0,
  max: 200,
  suffix: '€/m2',
  prefix: '',
  variant: 'range',
  step: 5,
  value: [0, 100]
};

export const Loading = args => {
  return (
    <div style={decoratorStyles}>
      <Slider {...args} />
    </div>
  );
};

Loading.args = {
  min: 1,
  max: 10,
  step: 1,
  variant: 'slider',
  value: 2,
  isLoading: true
};

export const SlimVersion = args => {
  return (
    <div style={decoratorStyles}>
      <Slider {...args} />
    </div>
  );
};

SlimVersion.args = {
  min: 1,
  max: 10,
  step: 1,
  variant: 'slider',
  value: 2,
  railSize: 'slim'
};
