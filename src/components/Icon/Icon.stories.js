import React from 'react';
import Icon from './index';
import * as Icons from '../../icons';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    icon: {
      name: 'Choose icon to display',
      control: { type: 'select', options: Object.keys(Icons) },
      table: { category: 'testing data' }
    },
    size: {
      description: 'Allows to choose between available sizes defined in default theme',
      table: { category: 'format' }
    },
    ariaHidden: {
      description: ' Includes `aria-hidden` attribute to icon',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    ariaLabel: {
      description: ' Includes `aria-label` attribute to icon',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    children: {
      description: ' Children for the Icon. For adding `<p>` for example ',
      control: 'none',
      table: {
        category: 'content'
      }
    },
    className: {
      description: 'Adds class for this element',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    color: {
      description:
        "Offers color variants from default theme. When `custom color` is not informed, `color` will be taken into account. Won't work if `custom-color` is defined.",
      table: {
        category: 'format'
      }
    },
    customColor: {
      description:
        " Allows picking a custom color in CSS format (#hexadecimal or RGB). Takes priority in front of `color`. When defined, `color` won't work.",
      control: 'color',
      table: {
        category: 'format'
      }
    },
    size: {
      description: 'Allos to choose between available sizes defined in the default theme',
      table: {
        category: 'format'
      }
    },
    viewBox: {
      description:
        ' Sets custom defined "viewBox" attribute to apply to icon SVG if desired, in order to manage scaling and aspect ratio. Expected format: ("0 0 0 0")',
      control: 'text',
      table: {
        category: 'format'
      }
    }
  },
  args: {
    size: 'medium'
  }
};

export const Playground = ({ icon, ...args }) => {
  const CustomIcon = Icons[icon];
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  };

  return (
    <div style={containerStyle}>
      <CustomIcon {...args} />
    </div>
  );
};

Playground.args = {
  icon: 'IconWarning'
};

export const AllIcons = args => {
  const iconListStyle = {
    ul: {
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      listStyle: 'none',
      height: '100vh',
      gridGap: '2rem',
      backgroundColor: '#f8f8f8'
    },
    li: {
      padding: '1rem',
      backgroundColor: 'white',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: '0px 8px 16px rgba(54, 60, 75, 0.1)',

      pre: {
        marginTop: '.5rem',
        fontFamily: 'monospace'
      }
    }
  };

  return (
    <ul style={iconListStyle.ul}>
      {Object.entries(Icons).map(([iconName, Icon]) => (
        <li key={iconName} style={iconListStyle.li}>
          <Icon {...args} />
          <pre style={iconListStyle.li.pre}>&lt;{iconName}/&gt;</pre>
        </li>
      ))}
    </ul>
  );
};

export const ChangeViewBox = ({ icon, ...args }) => {
  const CustomIcon = Icons[icon];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  };

  return (
    <div style={containerStyle}>
      <CustomIcon {...args} />
    </div>
  );
};

ChangeViewBox.args = {
  size: 'large',
  color: 'secondary',
  viewBox: '3 3 25 25',
  icon: 'IconWarning'
};
