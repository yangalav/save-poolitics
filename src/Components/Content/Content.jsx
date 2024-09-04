import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ButtonComponent from '../ButtonComponent';
import Blurb from '../Blurb/Blurb';

export default function Content({ img, headline, description, footNote, buttonLabel }) {
  return (
    <>
      <Box
        sx={{
          marginTop: 7,
          marginBottom: 15,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
          paddingLeft: '8%',
          paddingRight: '8%'
        }}
      >
        <Grid>
          <Grid>
            <img src={img} alt="" />
          </Grid>
          <Grid>
            <Blurb
              headline={headline}
              description={description}
              descriptionStyles={{ fontWeight: 400 }}
            />
          </Grid>
          {footNote &&
            <Grid>
              <Blurb
                description={footNote}
                descriptionStyles={{ fontSize: 15, color: 'grey', fontWeight: 400 }}
              />
            </Grid>
          }
          <Grid>
            <ButtonComponent
              label={buttonLabel}
              href="/Intro"
              buttonStyles={{
                color: 'white',
                backgroundColor: '#6C2023',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}