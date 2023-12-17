const initialConfig = {
  min: 0,
  max: 99,
  step: 0.01,
  value: 94,
  explode: false,
  transition: 2,
  ease: 'elastic',
  easeOptions: [
    'back',
    'basic',
    'bounce',
    'circ',
    'elastic',
    'expo',
    'power',
    'sine',
  ],
  isEase: false,
};

export type stateType = typeof initialConfig;
export type actionType =
  | { type: 'UPDATE_VALUE'; payload: number }
  | { type: 'UPDATE_EASE'; payload: string }
  | { type: 'TOOGLE_EASE' };

const reducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return { ...state, value: action.payload };
    case 'UPDATE_EASE':
      return { ...state, ease: action.payload };
    case 'TOOGLE_EASE':
      return { ...state, isEase: !state.isEase };

    default:
      return state;
  }
};

export { initialConfig, reducer };
