import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import defaultTheme from '../../themes/defaultTheme';
import IconArrowClose from '../../icons/ArrowClose/index';
import IconArrowOpen from '../../icons/ArrowOpen/index';
import IconCheck from '../../icons/Check/index';
import IconDotLarge from '../../icons/DotLarge/index';

const componentVariant = () => ({
  medium: {
    'flex-direction': 'column'
  },
  small: {
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center'
  }
});

const componentSizes = theme => ({
  small: {
    height: theme.spacings.medium1
  },
  medium: {
    height: theme.spacings.medium3
  }
});

const componentDisabled = theme => ({
  'background-color': theme.components.selectFieldDisabledBackgroundColor
});

const positionList = () => ({
  small: {
    top: '36px'
  },
  medium: {
    top: '52px'
  }
});

const StyledContainer = styled.div`
  display: flex;
  ${({ variant }) => componentVariant()[variant]}
`;

const LabelText = styled.p`
  font-size: ${({ theme }) => theme.components.inputFieldLabelFontSize};
  color: ${({ theme }) => theme.components.inputFieldLabelColor};
  margin-bottom: 4px;
  transition: 300ms ease-in-out;
`;

LabelText.defaultProps = {
  theme: defaultTheme
};

const StyledSelectField = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 40px;
  max-width: 100%;
  color: ${({ theme }) => theme.components.selectFieldColor};
  border: 1px solid
    ${({ active, theme }) =>
      active
        ? theme.components.selectFieldFocusBorderColor
        : theme.components.selectFieldBorderColor};
  border-radius: ${({ theme }) => theme.components.selectFieldBorderRadius};
  ${({ size, theme }) => componentSizes(theme)[size]};
  ${({ disabled, theme }) => disabled && componentDisabled(theme)};
  z-index: 10;
`;

StyledSelectField.defaultProps = {
  theme: defaultTheme
};

const StyledSelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 14px 22px;
  outline: none;
  user-select: none;

  > p {
    padding-right: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ theme, active }) => (active ? theme.texts.p1b : theme.texts.p1)};
  }
`;

StyledSelectHeader.defaultProps = {
  theme: defaultTheme
};

const StyledSelectHeaderIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSelectList = styled.ul`
  z-index: 1;
  padding: 0;
  margin: 0;
  max-height: 320px;
  overflow-y: scroll;
  width: 100%;
  min-width: 192px;
  max-width: fit-content;
  position: absolute;
  ${({ size }) => positionList()[size]};
  left: 0;
  background-color: ${({ theme }) => theme.components.selectFieldBackgroundColor};
  box-shadow: ${({ theme }) => theme.components.selectFieldBoxShadow};
  border: 1px solid ${({ theme }) => theme.components.selectFieldBorderColor};
  border-radius: ${({ theme }) => theme.components.selectFieldBorderRadius};
  animation: ${({ theme }) => theme.animations.dropDownDisplay} 125ms
    cubic-bezier(0.73, 0.005, 0.22, 1);
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

StyledSelectList.defaultProps = {
  theme: defaultTheme
};

const StyledSelectItem = styled.li`
  list-style-type: none;
  white-space: nowrap;
  user-select: none;
  min-width: fit-content;
  background-color: ${({ theme }) => theme.components.selectFieldBackgroundColor};
  padding: 4px 8px;

  :first-child {
    padding-top: 8px;
  }

  :last-child {
    padding-bottom: 8px;
  }

  > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ active, theme }) =>
      active
        ? theme.components.selectFieldFocusBackgroundColor
        : theme.components.selectFieldBackgroundColor};
    border-radius: ${({ theme }) => theme.shapes.borderRadiusSmall};
    padding: 10px 16px;
    height: 40px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    font-weight: ${({ active }) => (active ? '600' : '400')};
    color: ${({ active, theme }) =>
      active ? theme.components.selectFieldFocusColor : theme.components.selectFieldColor};

    &:disabled {
      color: ${({ theme }) => theme.color.charcoal500};
    }
    &:hover {
      background-color: ${({ theme }) => theme.components.selectFieldHoverBackgroundColor};
    }
  }
`;

StyledSelectItem.defaultProps = {
  theme: defaultTheme
};

const StyledLinkText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 52px;
  width: 100%;
  padding: 10px 16px;
  border-top: 1px solid ${({ theme }) => theme.components.selectFieldBorderColor};

  > span {
    ${({ theme }) => theme.texts.p2b};
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary500};
  }
`;

StyledLinkText.defaultProps = {
  theme: defaultTheme
};

const SelectField = ({
  className,
  customStyleSelect,
  customStyleLabel,
  defaultLabel,
  defaultValue,
  disabled,
  label,
  name,
  selectedWord,
  allSelectedWord,
  onChange,
  options,
  tabIndex,
  value,
  multiSelect,
  variant,
  size,
  clearButton,
  clearButtonWord,
  ...other
}) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(defaultLabel);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (
      multiSelect &&
      (value === null || value === 'null') &&
      options.some(i => i?.value === null || i?.value === 'null')
    ) {
      return selectAll();
    }
    if (multiSelect && typeof value === 'object') {
      return handleInitialMultiSelect(value);
    }
  }, []);

  useEffect(() => {
    if (multiSelect && (value === null || value === 'null')) {
      return selectAll();
    }
    if (!multiSelect && value) {
      const option = options.find(opt => opt?.value === value);
      setHeaderTitle(option?.label || defaultLabel);
      setSelection([option?.value]);
    }
    if (!value) return clearSelection();
  }, [value]);

  const selectAll = () => {
    const option = options.find(option => option?.value === 'null' || option?.value === null);
    setSelection([option?.value]);
    setHeaderTitle(option?.label || allSelectedWord);
  };

  const toggleList = () => {
    !disabled && setListOpen(!listOpen);
  };

  const container = useRef(null);
  const selectList = useRef(null);

  useOnclickOutside(
    () => {
      setListOpen(false);
    },
    { refs: [container, selectList] }
  );

  const isItemInSelection = item => {
    return selection.some(current => current === item?.value) || false;
  };

  const clearSelection = () => {
    setSelection([]);
    setHeaderTitle(defaultLabel);
    onChange([]);
  };

  const handleInitialMultiSelect = items => {
    if (items.length === 1) {
      setSelection(items);
      const option = options.find(pot => pot?.value === items[0]);
      setHeaderTitle(option?.label);
    } else {
      setSelection(items);
      setHeaderTitle(`${items.length} ${selectedWord}`);
    }
  };

  const handleSelect = item => {
    if (!isItemInSelection(item)) {
      if (!multiSelect) {
        setSelection([item?.value]);
        setHeaderTitle(item?.label);
        setListOpen(false);
        onChange(item?.value);
      } else if (multiSelect) {
        if (item?.value === 'null' || item?.value === null) {
          onChange([item?.value || null]);
          return selectAll();
        }

        const selectedItems = [...selection, item?.value]
          .filter(i => i !== null)
          .filter(i => i !== 'null');
        if (selectedItems.length === 1) {
          setHeaderTitle(item.label);
        } else if (selectedItems.length === options.length) {
          setHeaderTitle(allSelectedWord);
        } else if (selectedItems.length > 1) {
          setHeaderTitle(`${selectedItems.length} ${selectedWord}`);
        }

        setSelection(selectedItems);
        onChange(selectedItems);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(current => current !== item?.value);
      if (selectionAfterRemoval.length === 0) {
        setHeaderTitle(defaultLabel);
      } else if (selectionAfterRemoval.length === 1) {
        const onlyOne = options.find(i => i?.value === selectionAfterRemoval[0]);
        setHeaderTitle(onlyOne.label);
      } else if (selectionAfterRemoval.length > 1) {
        setHeaderTitle(`${selectionAfterRemoval.length} ${selectedWord}`);
      }
      setSelection([...selectionAfterRemoval]);
      onChange([...selectionAfterRemoval]);
    }
  };

  return (
    <StyledContainer className={className} variant={variant}>
      {label && (
        <LabelText style={customStyleLabel} disabled={disabled}>
          {label}
        </LabelText>
      )}
      <StyledSelectField
        {...other}
        size={size}
        disabled={disabled}
        active={listOpen}
        ref={container}
        style={customStyleSelect}
      >
        <StyledSelectHeader
          tabIndex={tabIndex}
          role="button"
          onClick={toggleList}
          active={selection.length >= 1}
        >
          <p>{headerTitle?.length < 24 ? headerTitle : `${headerTitle?.substring(0, 21)}...`}</p>
          <StyledSelectHeaderIcon>
            {listOpen ? <IconArrowOpen /> : <IconArrowClose />}
          </StyledSelectHeaderIcon>
        </StyledSelectHeader>
        {listOpen && (
          <StyledSelectList ref={selectList} size={size}>
            {options.map(option => {
              const active = isItemInSelection(option);
              return (
                <StyledSelectItem key={option?.value} active={active}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    disabled={option.disabled}
                  >
                    {option.label}
                    {active && <span>{multiSelect ? <IconCheck /> : <IconDotLarge />}</span>}
                  </button>
                </StyledSelectItem>
              );
            })}
            {clearButton && (
              <StyledLinkText>
                <span onClick={clearSelection}>{clearButtonWord}</span>
              </StyledLinkText>
            )}
          </StyledSelectList>
        )}
      </StyledSelectField>
    </StyledContainer>
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  customStyleSelect: PropTypes.object,
  customStyleLabel: PropTypes.object,
  defaultLabel: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['small', 'medium']),
  selectedWord: PropTypes.string,
  allSelectedWord: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  multiSelect: PropTypes.bool,
  clearButton: PropTypes.bool,
  clearButtonWord: PropTypes.string
};

SelectField.defaultProps = {
  value: '',
  defaultLabel: '',
  defaultValue: '',
  variant: 'medium',
  size: 'medium',
  selectedWord: 'Selected',
  allSelectedWord: 'All',
  disabled: false,
  multiSelect: false,
  clearButton: false,
  clearButtonWord: 'Clear'
};

SelectField.displayName = 'SelectField';

export default SelectField;
