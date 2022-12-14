import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeTheme, selectTheme } from './theme.slice';
import { Theme } from './theme.types';

type UseThemeHook = () => [theme: Theme, setTheme: () => void];

export const useTheme: UseThemeHook = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const setTheme = () => {
        dispatch(changeTheme());
    };

    return [theme, setTheme];
}