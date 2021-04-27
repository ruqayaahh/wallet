import './input.css'
const Input = ({label, type, placeholder, name, onChange, value, className, styles}) => {
   return (
       <div>
           <label>{label}</label>
           <input type={type} placeholder={placeholder} name={name} required onChange={onChange} value={value} className={className} style={styles}></input>
           {/* { error && <div className={styles.inputError}></div>} */}
       </div>
   );
};

export default Input;