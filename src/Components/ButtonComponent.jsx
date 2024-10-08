import Button from '@mui/material/Button';

export default function ButtonComponent({ href, onClick, buttonStyles, label, disabled }) {
  return (
    <>
      <Button 
        disableElevation
        disabled={disabled}
        href={href}
        variant="contained"
        onClick={onClick}
        sx={{ 
          fontFamily: 'Figtree',
          fontSize: '16px',
          padding: '16px 24px',
          textTransform: 'none',
          marginTop: 5,
          fontWeight: 700,
          borderRadius: '10px',
          ...buttonStyles
        }}
      >
        {label}
      </Button>
    </>
  )
}