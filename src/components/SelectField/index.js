import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOnclickOutside from 'react-cool-onclickoutside';
import defaultTheme from '../../themes/defaultTheme';
import IconArrowClose from '../../icons/ArrowClose/index';
import IconArrowOpen from '../../icons/ArrowOpen/index';
import IconCheck from '../../icons/Check/index';

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
  min-height: 40px;
  min-width: 240px;
  max-width: fit-content;
  border: 1px solid ${({ theme }) => theme.components.inputFieldBorderColor};
  border-radius: ${({ theme }) => theme.components.inputFieldBorderRadius};

  > svg {
    color: ${({ theme }) => theme.components.inputFieldIconColor};
  }
`;

StyledSelectField.defaultProps = {
  theme: defaultTheme
};

const StyledSelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  padding: 14px 22px 14px 24px;
  outline: none;

  > p {
    padding-right: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.active {
      padding-left: 24px;
      > p {
        color: ${({ theme }) => theme.components.inputFieldFocusLabelColor};
      }
    }
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
  padding: 0;
  margin: 0;
  max-height: 320px;
  overflow-y: scroll;
  width: 100%;
  min-width: 240px;
  max-width: fit-content;
  margin-top: 32px;
  position: absolute;
  top: 24px;
  left: 0;
  background-color: ${({ theme }) => theme.components.inputFieldBackgroundColor};
  scrollbar-width: none;
  -ms-overflow-style: none;
  > ::-webkit-scrollbar {
    display: none;
  }
`;

StyledSelectList.defaultProps = {
  theme: defaultTheme
};

const StyledSelectItem = styled.li`
  list-style-type: none;
  white-space: nowrap;

  :first-of-type {
    > button {
      border-top: 1px solid ${({ theme }) => theme.components.inputFieldBorderColor};
      border-top-left-radius: ${({ theme }) => theme.components.inputFieldBorderRadius};
      border-top-right-radius: ${({ theme }) => theme.components.inputFieldBorderRadius};
    }
  }

  :last-of-type {
    > button {
      border-bottom: 1px solid ${({ theme }) => theme.components.inputFieldBorderColor};
      border-bottom-left-radius: ${({ theme }) => theme.components.inputFieldBorderRadius};
      border-bottom-right-radius: ${({ theme }) => theme.components.inputFieldBorderRadius};
    }
  }

  > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.components.inputFieldBackgroundColor};
    font-size: ${({ theme }) => theme.components.inputFieldFontSize};
    padding: 20px;
    line-height: 150%;
    width: 100%;
    text-align: left;
    border: 0;
    border-left: 1px solid ${({ theme }) => theme.components.inputFieldBorderColor};
    border-right: 1px solid ${({ theme }) => theme.components.inputFieldBorderColor};
    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.components.inputFieldIconColor};
    }
  }
`;

StyledSelectItem.defaultProps = {
  theme: defaultTheme
};

const SelectField = ({
  className,
  defaultLabel,
  defaultValue,
  disabled,
  error,
  label,
  name,
  onChange,
  options,
  tabIndex,
  value,
  multiSelect,
  ...other
}) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(defaultLabel);
  const [selection, setSelection] = useState([]);

  const toggleList = () => {
    setListOpen(!listOpen);
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
    return selection.some(current => current === item.value);
  };

  const clearSelection = () => {
    setSelection([]);
    setHeaderTitle(defaultLabel);
    setListOpen(false);
    onChange([]);
  };

  const handleSelect = item => {
    if (!isItemInSelection(item)) {
      if (!multiSelect) {
        setSelection([item.value]);
        setHeaderTitle(item.label);
        setListOpen(false);
        onChange([item.value]);
      } else if (multiSelect) {
        const selectedItems = [...selection, item.value];
        if (selectedItems.length === 1) {
          setHeaderTitle(item.label);
        } else if (selectedItems.length === options.length) {
          setHeaderTitle('All');
        } else if (selectedItems.length > 1) {
          setHeaderTitle(`${selectedItems.length} Selected`);
        }

        setSelection(selectedItems);
        onChange(selectedItems);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(current => current !== item.value);

      if (selectionAfterRemoval.length === 0) {
        setHeaderTitle(defaultLabel);
      } else if (selectionAfterRemoval.length === 1) {
        const onlyOne = options.find(i => i.value === selectionAfterRemoval[0]);
        setHeaderTitle(onlyOne.label);
      } else if (selectionAfterRemoval.length > 1) {
        setHeaderTitle(`${selectionAfterRemoval.length} Selected`);
      }
      setSelection([...selectionAfterRemoval]);
      onChange([...selectionAfterRemoval]);
    }
  };

  return (
    <div className={className}>
      {label && <LabelText disabled={disabled}>{label}</LabelText>}
      <StyledSelectField {...other} ref={container}>
        <StyledSelectHeader
          tabIndex={tabIndex}
          role="button"
          onClick={() => !disabled && toggleList()}
        >
          {headerTitle.length < 24 ? headerTitle : `${headerTitle.substring(0, 21)}...`}
          <StyledSelectHeaderIcon>
            {listOpen ? <IconArrowOpen /> : <IconArrowClose />}
          </StyledSelectHeaderIcon>
        </StyledSelectHeader>
        {listOpen && (
          <StyledSelectList ref={selectList}>
            {options.map(option => {
              const active = isItemInSelection(option);
              return (
                <StyledSelectItem key={option.value}>
                  <button type="button" onClick={() => handleSelect(option)}>
                    {option.label}
                    <span>{active && <IconCheck />}</span>
                  </button>
                </StyledSelectItem>
              );
            })}
          </StyledSelectList>
        )}
      </StyledSelectField>
    </div>
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  defaultLabel: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  tabIndex: PropTypes.string,
  value: PropTypes.string.isRequired,
  multiSelect: PropTypes.bool
};

SelectField.defaultProps = {
  value: '',
  defaultValue: '',
  disabled: false,
  multiSelect: false
};

SelectField.displayName = 'SelectField';

export default SelectField;
