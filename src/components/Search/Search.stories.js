import React, { useState } from 'react';
import Search from './index';
import Button from '../Button';

export default {
  title: 'Search',
  component: Search,
  argTypes: {
    className: {
      description: 'Adds CSS class to the element',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    closable: {
      description: "Has 'X' icon on the right to close the search bar",
      table: {
        category: 'behaviour'
      }
    },
    disabled: {
      description: 'Disables the bar and does not allow editing',
      table: {
        category: 'behaviour'
      }
    },
    enableClickOutside: {
      description: 'Closes the bar when user clicks outside of it',
      table: {
        category: 'behaviour'
      }
    },
    leftContent: {
      description: 'Adds custom text next to the search icon and before the input field',
      table: {
        category: 'content'
      }
    },
    name: {
      description: 'Sets `name`to the input field',
      control: 'none',
      table: {
        category: 'others'
      }
    },
    onChange: {
      description: 'Handles behaviour when input content changes. Usually to perform search',
      action: 'onChange event',
      table: {
        category: 'events'
      }
    },
    onClose: {
      description: 'Handles behaviour when the onClose event is triggered',
      table: {
        category: 'events'
      }
    },
    placeholder: {
      description: 'Temporary text in the input field to assist the user',
      table: {
        category: 'content'
      }
    },
    tabIndex: {
      description: "Specifies the tab order of the element (when the 'tab' key is pressed)",
      control: 'none',
      table: {
        category: 'others'
      }
    },
    value: {
      description: 'Initial value set for the input field',
      table: {
        category: 'content'
      }
    }
  },
  args: {
    placeholder: 'Search any portfolio by name, seller or buyer',
    value: 'Cerberus',
    leftContent: 'Search',
    disabled: false,
    enableClickOutside: true,
    closable: true
  }
};

const decoratorStyles = {
  padding: '2rem'
};

export const Playground = ({ onClose, ...args }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={decoratorStyles}>
      {isOpen ? (
        <Search
          onClose={() => {
            setIsOpen(!isOpen);
          }}
          {...args}
        />
      ) : (
        <Button onClick={setIsOpen}>Open Search Bar</Button>
      )}
    </div>
  );
};
