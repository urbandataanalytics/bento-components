import React from 'react';
import { select, color } from '@storybook/addon-knobs';
import * as Icons from '../../icons';

export default {
  title: 'Icon'
};

const getCommonProps = () => {
  return {
    size: select('Size', ['small', 'medium', 'large'], 'large'),
    color: select('Color', [null, 'primary', 'secondary'], null),
    customColor: color('Custom Color', '#000000')
  };
};

export const Normal = () => {
  const source = select('Icon', Object.keys(Icons), 'IconWarning');
  const CustomIcon = Icons[source];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  return (
    <div style={containerStyle}>
      <CustomIcon {...getCommonProps()} />
    </div>
  );
};

export const AllIcons = () => {
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
          <Icon {...getCommonProps()} />
          <pre style={iconListStyle.li.pre}>&lt;{iconName}/&gt;</pre>
        </li>
      ))}
    </ul>
  );
};
