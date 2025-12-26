// src/components/Button/Button.jsx
import styles from './Button.module.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  className = '',
  disabled = false 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;