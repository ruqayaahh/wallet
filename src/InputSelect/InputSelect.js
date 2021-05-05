import { forwardRef } from 'react';
// import './input.css'
const InputSelect = forwardRef(({label, id, value, name, onChange, onBlur, className, placeholder, styles}, ref) => {
   return (
       <div>
           <label className="text-label">{label}</label>
           <select placeholder={placeholder} name={name} ref={ref} id={name} onBlur={onBlur} className={className} style={styles}>
               <option value="">Gender</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
           </select>
           {/* { error && <div className={styles.inputError}></div>} */}
       </div>
   );
});

export default InputSelect;