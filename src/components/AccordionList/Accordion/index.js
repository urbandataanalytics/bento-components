import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../../../themes/defaultTheme';
import { IconArrowClose } from '../../../icons';
import useBoundingRect from '../../../hooks/useBoundingRect';

const StyledAccordionLabel = styled.div`
  width: 100%;
  cursor: pointer;
  height: ${({ theme }) => theme.components.accordionMinHeight};
  border-bottom: ${({ theme, expanded }) =>
    expanded ? '1px solid transparent' : theme.components.accordionBorder};
  padding: ${({ theme }) => theme.components.accordionPadding};
  display: flex;
  align-items: center;
  align-content: center;
`;

StyledAccordionLabel.defaultProps = {
  theme: defaultTheme
};

const StyledAccordionContent = styled.div`
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  max-height: ${({ expanded, maxHeight }) => (expanded ? `${maxHeight}px` : '0')};
  visibility: ${({ expanded }) => (expanded ? 'visible' : 'hidden')};
`;

StyledAccordionContent.defaultProps = {
  theme: defaultTheme
};

const StyledAccordionChildren = styled.div`
  padding: 0 25px 25px;
`;

StyledAccordionChildren.defaultProps = {
  theme: defaultTheme
};

const StyledAccordionHeader = styled.div`
  color: ${({ theme }) => theme.components.accordionColor};
`;

StyledAccordionHeader.defaultProps = {
  theme: defaultTheme
};

const StyledLeftContent = styled.div`
  margin-right: 15px;
  color: ${({ theme }) => theme.components.accordionColor};

  > svg {
    fill: ${({ theme }) => theme.components.accordionColor};
  }
`;

StyledLeftContent.defaultProps = {
  theme: defaultTheme
};

const StyledRightContent = styled.div`
  margin-left: auto;
`;

StyledRightContent.defaultProps = {
  theme: defaultTheme
};

const StyledHeaderContent = styled.div`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.components.accordionHeaderFontSize};
  font-weight: ${({ theme }) => theme.components.accordionHeaderFontWeight};
`;

StyledHeaderContent.defaultProps = {
  theme: defaultTheme
};

const StyledSubHeaderContent = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.components.accordionSubHeaderColor};
  font-size: ${({ theme }) => theme.components.accordionSubHeaderFontSize};
  font-weight: ${({ theme }) => theme.components.accordionSubHeaderFontWeight};
`;

StyledSubHeaderContent.defaultProps = {
  theme: defaultTheme
};

const StyledArrowIcon = styled(({ className }) => (
  <IconArrowClose color={'secondary'} className={className} />
))`
  margin-left: 10px;
  transition: transform 300ms ease-in-out;
  transform: rotate(${props => (props.expanded ? '180deg' : '0')});
`;

StyledArrowIcon.defaultProps = {
  theme: defaultTheme
};

const Accordion = props => {
  const {
    children,
    expanded = false,
    leftContent,
    rightContent,
    header,
    subHeader,
    isDefaultExpanded,
    onClick = () => {},
    ...other
  } = props;
  const [{ height }, childNode] = useBoundingRect();

  return (
    <>
      <StyledAccordionLabel expanded={expanded} onClick={onClick} {...other}>
        {leftContent && <StyledLeftContent>{leftContent}</StyledLeftContent>}

        <StyledAccordionHeader>
          <StyledHeaderContent>{header}</StyledHeaderContent>
          {subHeader && <StyledSubHeaderContent>{subHeader}</StyledSubHeaderContent>}
        </StyledAccordionHeader>

        <StyledRightContent>
          {rightContent}
          <StyledArrowIcon expanded={expanded} />
        </StyledRightContent>
      </StyledAccordionLabel>

      <StyledAccordionContent maxHeight={height} expanded={expanded}>
        <StyledAccordionChildren ref={childNode}>{children}</StyledAccordionChildren>
      </StyledAccordionContent>
    </>
  );
};

Accordion.defaultProps = {
  expanded: false
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  header: PropTypes.node.isRequired,
  subHeader: PropTypes.node,
  isDefaultExpanded: PropTypes.bool
};

export default Accordion;
