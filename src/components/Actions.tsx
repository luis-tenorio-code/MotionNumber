import { actionType, stateType } from '@/reducers/reducer';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Actions({
  dispatch,
  state,
}: {
  dispatch: React.Dispatch<actionType>;
  state: stateType;
}) {
  function handleUpdateRange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'UPDATE_VALUE',
      payload: Math.round(Number(value)),
    });
  }

  function handleValueChange(value: string) {
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
  }

  return (
    <div className='flex gap-4'>
      <label className='flex items-center gap-2 slider border p-2'>
        <input
          type='range'
          min={state.min}
          max={state.max}
          step={state.step}
          className='cursor-pointer level w-full h-1.5 appearance-none bg-border overflow-hidden'
          onChange={handleUpdateRange}
          value={state.value}
        />
        <span className='h-full px-2'>{state.value}</span>
      </label>

      <Select onValueChange={handleValueChange} value={state.ease}>
        <SelectTrigger
          data-ease={state.isEase}
          className='w-[110px] data-[ease="true"]:text-cyan-300 data-[ease="true"]:transition-colors data-[ease="true"]:border-cyan-300'
        >
          <SelectValue placeholder='Select' />
        </SelectTrigger>
        <SelectContent className='max-h-[110px] overflow-y-auto'>
          {state.easeOptions.map((ease) => (
            <SelectItem key={ease} value={ease}>
              {ease}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
