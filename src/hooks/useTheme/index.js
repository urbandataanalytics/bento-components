import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '../../themes/defaultTheme';

const useTheme = () => useContext(ThemeContext) || defaultTheme;

export default useTheme;
