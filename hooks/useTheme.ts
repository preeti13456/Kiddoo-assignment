import { useContext } from 'react';
import { ThemeContext } from '../components/shared/ThemeProvider';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;