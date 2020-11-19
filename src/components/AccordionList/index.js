import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAccordionList = styled.div`
  scroll-behavior: smooth;
  height: 100%;
  overflow: auto;
`;

const AccordionList = props => {
  const { children, toggleOnExpand, ...other } = props;
  const [expandedIndex, setExpandedIndex] = useState([]);
  const [containerId, setContainerId] = useState();

  const getId = () =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  useEffect(() => {
    setContainerId(getId());
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

  const onClick = (childIndex, childId) => {
    const element = document.getElementById(childId);
    const container = document.getElementById(containerId);

    container.scrollTop = element.offsetTop;

    element.scrollIntoView({ behavior: 'smooth' });

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

    const id = getId();

    return React.cloneElement(child, {
      expanded: expandedIndex.includes(childIndex),
      onClick: () => onClick(childIndex, id),
      id
    });
  });

  return (
    <StyledAccordionList id={containerId} {...other}>
      {childs}
    </StyledAccordionList>
  );
};

AccordionList.defaultProps = {
  toggleOnExpand: true
};

AccordionList.propTypes = {
  children: PropTypes.node.isRequired,
  toggleOnExpand: PropTypes.bool
};

export default AccordionList;
