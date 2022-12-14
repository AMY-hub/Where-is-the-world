import { Regions } from './filters.types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectRegion, setRegion } from './filters.slice';

interface Option {
    value: Regions,
    label: string
}

type UseRegionHook = () => [Regions | null, (regionObj: unknown) => void];

export const useRegion: UseRegionHook = () => {
    const dispatch = useAppDispatch();
    const region = useAppSelector(selectRegion);

    const changeRegion = (regionObj: unknown) => {
        const option = regionObj as Option;

        if (option && option.value) {
            dispatch(setRegion(option.value));
        } else {
            dispatch(setRegion(null));
        }
    }

    return [region, changeRegion];
}