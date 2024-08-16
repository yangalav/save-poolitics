import Button from '@mui/material/Button';

export default function ButtonComponent({ variant, buttonStyles, label }) {
  return (
    <>
      <Button disableElevation variant={variant} sx={{ ...buttonStyles }}>{label}</Button>
    </>
  )
}