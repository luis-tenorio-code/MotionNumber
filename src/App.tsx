import { useEffect, useReducer } from 'react';
import './App.css';
import Actions from './components/Actions';
import Count from './components/Count';
import Details from './components/Details';
import { initialConfig, reducer } from './reducers/reducer';

function Counter({ value }: { value: number }) {
  return (
    <div>
      <Count value={value} />
      <Count value={value} />
    </div>
  );
}

function MotionNumber() {
  const [state, dispatch] = useReducer(reducer, initialConfig);

  useEffect(() => {
    const docEl = document.documentElement;

    docEl.style.setProperty('--transition', `${state.transition}`);
    docEl.style.setProperty('--ease', `var(--${state.ease})`);
  }, [state.transition, state.ease]);

  return (
    <div className='gap-4 flex flex-col w-fit mx-auto'>
      <Actions dispatch={dispatch} state={state} />
      <div className='p-4 grid border place-content-center'>
        <Counter value={state.value} />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Details />
      <MotionNumber />
    </div>
  );
};

export default App;
