import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Theme } from './theme.types';
import { useTheme } from './useTheme';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const ThemeSwitcher = () => {

    const [theme, setTheme] = useTheme();

    return (
        <ModeSwitcher
            onClick={setTheme}>
            {theme === Theme.LIGHT ? (
                <IoMoonOutline size="14px" />
            ) : (
                <IoMoon size="14px" />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
        </ModeSwitcher>
    )
}
