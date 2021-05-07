import React from 'react';
import { forwardRef } from 'react';
import './input.css'
const Input = forwardRef(({label, type, placeholder, name, onChange, handleChange, onBlur, value, className, styles}, ref) => {
    return (
       <div>
           <label className="text-label">{label}</label>
           <input type={type} placeholder={placeholder} name={name} ref={ref} onChange={onChange} onKeyUp={handleChange} onBlur={onBlur} value={value} className={className} style={styles}></input>
       </div>
   );
});

export default Input;