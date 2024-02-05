import { createContext, Dispatch, SetStateAction } from 'react';

interface CountContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const defaultContextValue: CountContextType = {
  count: 0,
  setCount: () => {},
};

const CountContext = createContext<CountContextType>(defaultContextValue);

export default CountContext;
