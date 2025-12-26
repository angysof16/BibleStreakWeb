// src/components/Input/Input.jsx
import styles from './Input.module.css';

const Input = ({ 
  type = 'text', 
  name, 
  placeholder, 
  value, 
  onChange, 
  className = '',
  min,
  max,
  required = false
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      required={required}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;