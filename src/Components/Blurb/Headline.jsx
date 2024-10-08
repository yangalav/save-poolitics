import { Typography } from "@mui/material";

export default function Headline({ headline, styles }) {
  return (
    <>
      <Typography
        variant="h3"
        style={{
          fontFamily: 'Figtree',
          fontWeight: 700,
          color: '#6C2023',
          fontSize: '2.5rem',
          ...styles
        }}>
        {headline}
      </Typography>
    </>
  )
}