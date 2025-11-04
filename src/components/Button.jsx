// src/components/Button.jsx
const Button = ({ children, onClick, variant = 'primary', type = 'button', style = {} }) => {
  const baseStyle = {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #0D4178 0%, #368EF0 100%)',
      color: '#FFFFFF',
      boxShadow: '0 10px 30px rgba(54, 142, 240, 0.3)',
    },
    secondary: {
      background: 'rgba(54, 142, 240, 0.2)',
      border: '2px solid #368EF0',
      color: '#FFFFFF',
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant], ...style }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(54, 142, 240, 0.5)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = variants[variant].boxShadow || 'none';
      }}
    >
      {children}
    </button>
  );
};

export default Button;