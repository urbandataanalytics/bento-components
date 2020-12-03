import PropTypes from 'prop-types';

export interface AccordionListProps {
  children: React.ReactNode;
  toggleOnExpand?: boolean;
}

declare const AccordionList: React.FunctionComponent<AccordionListProps>;

export default AccordionList;
