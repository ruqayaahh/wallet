import './input-radio.css'
const InputRadio = ({label, placeholder, name, onChange, value, className, styles}) => {
   return (
       <div>
           <input type="radio" placeholder={placeholder} name={name} required onChange={onChange} value={value} className={className} style={styles}></input>
           <label className="radio-label">{label}</label>
           {/* { error && <div className={styles.inputError}></div>} */}
       </div>
   );
};

export default InputRadio;