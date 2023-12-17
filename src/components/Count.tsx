const Character = ({ key, value }: { key: string; value: string }) => {
  return (
    <span data-value={value} className='character'>
      <span
        className='character__track'
        style={{ '--v': value } as React.CSSProperties}
      >
        <span>9</span>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, index) => (
          <span key={`${key}--${index}`}>{val}</span>
        ))}
        <span>0</span>
      </span>
    </span>
  );
};

const Count = ({ value }: { value: number }) => {
  const dijits = value.toString().split('');
  return (
    <div className='counter w-fit h-fit'>
      <fieldset>
        <h2>
          <span aria-hidden='true' className='characters'>
            {dijits.map((dijit, index) => (
              <Character key={`dijit--${index}`} value={dijit} />
            ))}
          </span>
        </h2>
      </fieldset>
    </div>
  );
};

export default Count;
