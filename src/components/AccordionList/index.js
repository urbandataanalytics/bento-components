import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const StyledAccordionList = styled.div``;

const AccordionList = props => {
  const { children, toggleOnExpand, ...other } = props;
  const [expandedIndex, setExpandedIndex] = useState([]);

  useEffect(() => {
    let defaultExpanded = [];
    if (toggleOnExpand) {
      React.Children.forEach(children, (child, childIndex) => {
        if (child.props.isDefaultExpanded) setExpandedIndex([childIndex]);
      });
    } else {
      React.Children.forEach(children, (child, childIndex) => {
        if (child.props.expanded) {
          defaultExpanded.push(childIndex);
        }
      });
      setExpandedIndex(defaultExpanded);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = childIndex => {
    let result = [];
    const expandedChild = ~expandedIndex.indexOf(childIndex);

    if (toggleOnExpand) {
      if (!expandedChild) result = [childIndex];
    } else {
      if (expandedChild) {
        result = expandedIndex.filter(index => index !== childIndex);
      } else {
        result = [...expandedIndex, childIndex];
      }
    }

    setExpandedIndex(result);
  };

  let childs = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      expanded: expandedIndex.includes(childIndex),
      onClick: () => onClick(childIndex)
    });
  });

  return <StyledAccordionList {...other}>{childs}</StyledAccordionList>;
};

AccordionList.defaultProps = {
  toggleOnExpand: true
};

AccordionList.propTypes = {
  children: PropTypes.node.isRequired,
  toggleOnExpand: PropTypes.bool
};

export default AccordionList;
