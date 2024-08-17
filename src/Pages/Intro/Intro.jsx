import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ButtonComponent from '../../Components/ButtonComponent';
import IntroContent from './IntroContent';
import introData from './data';

export default function Intro() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', textAlign: 'center', paddingTop: 5 }}>
      <Grid container spacing={2} sx={{ flexGrow: 1, maxWidth: 694, maxHeight: 613, justifyContent: 'center' }} >
        {introData.map((content) => {
          const { headline, description, img } = content;
          return (
            <IntroContent
              headline={headline}
              description={description}
              img={img}
            />
          )
        })}
        <ButtonComponent
         label="Start"
         buttonStyles={{ 
          color: 'white',
          backgroundColor: '#6C2023',
          minWidth: 230
         }}
        />
      </Grid>
    </Box>
  )
}