import React from 'react';

export default function Number(props) {
  const value = /^\d*$/.test(props.value) ? props.value : '';
  const onChange = (e) => {
    const v = e.target.value;
    if (v === '') {
      props.onChange(null);
    } else if (/^\d*$/.test(v)) {
      props.onChange(parseInt(v, 10));
    }
  };

  const onBlur = (e) => {
    const { min, max } = props;
    const v = e.target.value;
    if (min && v < min) {
      props.onChange(min);
    } else if (max && v > max) {
      props.onChange(max);
    }
  };

  return (
    <input
      {...props}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
