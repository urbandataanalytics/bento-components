import styled, { css } from 'styled-components';
import Tag from './Tag';
import { IconArrowOpen, IconArrowClose, IconCheck } from '@uda/bento-components';
import { useState, useEffect, useRef } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useBreakpoint } from '../utils';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';

const StyledContainer = styled.div`
  position: relative;
  height: fit-content;
`;

const StyledAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  cursor: pointer;
  ${({ theme, rounded }) => css`
    gap: ${theme.spacings.small2};
    color: ${theme.color.ocean700};
    border: 1px solid ${theme.color.ocean700};
    padding: ${theme.spacings.small1} ${theme.spacings.small3};
    border-radius: ${rounded ? '50px' : theme.shapes.borderRadiusLarge};
  `}
  ${({ theme, active }) =>
    active &&
    `
			background-color: ${theme.color.ocean200};
			font-weight: ${theme.global.fontWeightMedium};
			border-color: transparent;
		`}
    ${({ theme, disabled }) =>
      disabled &&
      `
			background-color: ${theme.color.charcoal400};
			color: ${theme.color.white};
			border-color: transparent;
			pointer-events: none;
		`}

    svg {
    width: 16px;
  }

  ${({ isMobile, theme }) =>
    !isMobile &&
    css`
      &:hover {
        color: ${theme.color.charcoal700};
        border: 1px solid ${theme.color.charcoal700};
        background-color: ${theme.color.white};
      }
    `}
`;

const StyledClickable = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.small2};
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  z-index: 12;
  ${({ theme }) => `
			gap: ${theme.spacings.small3};
			margin-top: ${theme.spacings.small2};
			padding: ${theme.spacings.small2};
			background-color: ${theme.color.white};
			color: ${theme.color.charcoal600};
			box-shadow: ${theme.components.selectFieldBoxShadow};
		`}
  ${({ isMobile }) =>
    !isMobile &&
    `
    width: 348px;
  `}
`;

const StyledOption = styled.li`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.small2};
  background-color: ${({ theme, active }) => active && theme.color.primary100};

  &:hover {
    div > .title {
      color: ${({ theme }) => theme.color.primary500};
    }
    background-color: ${({ theme }) => theme.color.charcoal300};
  }
`;

const StyledOptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => `{
			color: ${theme.color.charcoal800};
			font-weight: ${theme.global.fontWeightMedium};
		`}
`;

const Chip = React.forwardRef((props, ref) => {
  const {
    iconLeft,
    iconRight,
    iconPressed = <IconCheck />,
    options = [], // structure [{value: '', title: '', description: '', tag: ''},...]
    value = false,
    disabled = false,
    onChange = () => {},
    defaultOption,
    children,
    rounded
  } = props;
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 's';
  const [isShowingList, setIsShowingList] = useState(false);
  const [selected, setSelected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const list = useRef(null);

  useOnclickOutside(
    () => {
      setIsShowingList(false);
    },
    { refs: [list] }
  );

  useEffect(() => {
    if (typeof value !== 'boolean' && value === '') setIsChecked(false);
    setIsChecked(Boolean(value));
    setSelected(value);
  }, [value]);

  const isCheckBox = !Boolean(options.length);
  const selectedOption =
    options.length &&
    (options.find(option => (selected || defaultOption) === option.value) || options[0]);

  const renderLeftIcon = icon => {
    return isChecked && !disabled ? iconPressed : icon;
  };

  const renderRightIcon = icon => {
    const iconDropDown = isShowingList ? <IconArrowOpen /> : <IconArrowClose />;

    return isCheckBox ? icon : iconDropDown;
  };

  const renderOptionsList = options => {
    const isSelected = value => value === selected;
    return options.map(({ title = '', tag = '', description = '', value = '' }, i) => (
      <StyledOption active={isSelected(value)} onClick={() => handleOnChange(value)} key={i}>
        <StyledOptionTitle active={isSelected(value)}>
          <span className="title">{title}</span>
          {tag && <Tag>{tag}</Tag>}
        </StyledOptionTitle>
        <p>{description}</p>
      </StyledOption>
    ));
  };

  const handleIsShowingList = () => {
    setIsShowingList(isShowingList => !isShowingList);
  };
  const handleIsChecked = () => {
    setIsChecked(isChecked => !isChecked);

    if (isCheckBox) {
      setSelected(selected => !selected);
      onChange(!selected);
      return;
    }

    const selectedValue = isChecked ? null : selected || defaultOption;
    onChange(selectedValue);
  };

  const handleOnChange = value => {
    onChange(value);
    setSelected(value);
    setIsChecked(true);
    setIsShowingList(false);
  };

  return (
    <StyledContainer ref={list}>
      <StyledAction
        rounded={rounded}
        disabled={disabled}
        isMobile={isMobile}
        active={isShowingList || isChecked}
        role="button"
      >
        <StyledClickable onClick={handleIsChecked}>
          {renderLeftIcon(iconLeft)}
          {children}
        </StyledClickable>
        {(selectedOption?.tag || iconRight) && (
          <StyledClickable onClick={handleIsShowingList}>
            {selectedOption?.tag && <Tag>{selectedOption.tag}</Tag>}
            {renderRightIcon(iconRight)}
          </StyledClickable>
        )}
      </StyledAction>
      {isShowingList && !isCheckBox && (
        <StyledList isMobile={isMobile}> {renderOptionsList(options)} </StyledList>
      )}
    </StyledContainer>
  );
});
Chip.propTypes = {
  children: PropTypes.node.isRequired,
  customColor: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconCheck: PropTypes.node,
  iconRight: PropTypes.node,
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
  variant: PropTypes.oneOf(['rounded']).isRequired,
  contrast: PropTypes.bool
};

export default Chip;
