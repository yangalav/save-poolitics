import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Blurb from "../../Components/Blurb/Blurb";
import Card from './Card';
import ButtonComponent from '../../Components/ButtonComponent';
import Horns from '../../Assets/horns.svg';
import Prune from '../../Assets/prune.svg';
import Stain from '../../Assets/stain.svg';

const headline = 'Campaign time';
const description = 'Check out each candidate’s platform.'

const candidates = [
  Horns,
  Prune,
  Stain
];

export default function Election() {
  return (
    <Box sx={{ justifyContent: 'center', textAlign: 'center', paddingTop: 10 }}>
      <Grid container columnSpacing={3} rowSpacing={3} direction="column">
        <Grid>
          <Blurb
            headline={headline}
            description={description}
          />
        </Grid>
        <Grid container rowSpacing={4} sx={{ flexGrow: 1, justifyContent: 'center', minHeight: '10rem' }}>
          {candidates.map((candidate) => {
            return (<Card key={candidate} img={candidate} />)
          })}
        </Grid>
        <Grid>
          <ButtonComponent
            label="Ballot"
            href="/Election"
            buttonStyles={{
              color: 'white',
              backgroundColor: '#6C2023',
              minWidth: 230
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}