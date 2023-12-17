import { actionType, stateType } from "@/reducers/reducer";

export default function Actions({
  dispatch,
  state,
}: {
  dispatch: React.Dispatch<actionType>;
  state: stateType;
}) {
  return (
    <div className='flex gap-4'>
      <label className='flex items-center gap-2 slider border p-2'>
        <input
          type='range'
          min={state.min}
          max={state.max}
          step={state.step}
          className='cursor-pointer level w-full h-1.5 appearance-none bg-border overflow-hidden'
          onChange={({ target: { value } }) => {
            dispatch({
              type: 'UPDATE_VALUE',
              payload: Math.round(Number(value)),
            });
          }}
          value={state.value}
        />
        <span className='h-full px-2'>{state.value}</span>
      </label>

      <select
        onChange={({ target: { value } }) => {
          dispatch({ type: 'UPDATE_EASE', payload: value });
          dispatch({
            type: 'UPDATE_VALUE',
            payload: state.value + 1,
          });
          dispatch({ type: 'TOOGLE_EASE' });
          const timer = setTimeout(() => {
            dispatch({
              type: 'UPDATE_VALUE',
              payload: state.value - 1,
            });
            dispatch({ type: 'TOOGLE_EASE' });
            clearTimeout(timer);
          }, 3000);
        }}
        data-change={state.isEase}
        className='p-3 bg-background  border outline-none  cursor-pointer data-[change="true"]:border-cyan-300  data-[change="true"]:text-cyan-300 data-[change="true"]:transition-colors'
      >
        {state.easeOptions.map((ease) => (
          <option key={ease} value={ease} selected={state.ease === ease}>
            {ease}
          </option>
        ))}
      </select>
    </div>
  );
}
