import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectSearch, setSearchString } from './filters.slice';

type UseSearchHook = () => [string, (text: string) => void];

export const useSearch: UseSearchHook = () => {
    const dispatch = useAppDispatch();
    const search = useAppSelector(selectSearch);

    const changeSearch = (text: string) => {
        dispatch(setSearchString(text));
    }

    return [search, changeSearch];
}