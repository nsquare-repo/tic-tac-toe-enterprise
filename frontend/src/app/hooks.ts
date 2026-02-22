import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// We use a relative path here to ensure the compiler finds the store
import type { RootState, AppDispatch } from './store';

// Explicitly define the hooks to avoid inference errors
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;