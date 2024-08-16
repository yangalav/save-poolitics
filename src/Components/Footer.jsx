import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import PoopMob from '../Assets/poopMob.svg';
import PoopMobSmall from '../Assets/poopMobSmall.svg';
export default function Footer() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box
      sx={{ width: '100%', marginBottom: '2rem' }}
      component="img"
      src={matches ? PoopMob : PoopMobSmall}
      alt=""
    />
  )
}