import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const StyledAccordionList = styled.div``;

const AccordionList = props => {
  const { children, toggleOnExpand, ...other } = props;
  const [expandedIndex, setExpandedIndex] = useState();

  useEffect(() => {
    if (toggleOnExpand)
      React.Children.forEach(children, (child, childIndex) => {
        if (child.props.isDefaultExpanded) setExpandedIndex(childIndex);
      });
    // eslint-disable-next-line react-hooks/exhaustive-depsyar
  }, []);

  let childs = React.Children.map(children, (child, childIndex) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    if (!toggleOnExpand) return React.cloneElement(child, {});

    const expandedChild = child.props.expanded;

    const onClick = event => {
      if (child.props.onClick) child.props.onClick(event, !expandedChild);
      if (!expandedChild) setExpandedIndex(childIndex);
    };

    return React.cloneElement(child, {
      expanded: childIndex === expandedIndex,
      onClick: onClick
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
