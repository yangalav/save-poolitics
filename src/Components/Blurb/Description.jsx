
import { Typography } from "@mui/material";
import FigtreeLite from '@fontsource/figtree/300.css';
export default function Description({ description, styles }) {
  return (
    <>
      <Typography sx={{ fontFamily: 'Figtree', ...styles }}>{description}</Typography>
    </>
  )
}