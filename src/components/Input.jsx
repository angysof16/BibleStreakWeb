// src/components/Input.jsx
const Input = ({ type = 'text', name, placeholder, value, onChange, style = {} }) => {
  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#0D1521',
    border: 'none',
    borderRadius: '12px',
    color: '#FFFFFF',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    ...style
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
};

export default Input;