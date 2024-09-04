import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { BarChart } from '@mui/x-charts/BarChart';
import Blurb from '../../Components/Blurb/Blurb';
import Prune from '../../Assets/prune.svg';

export default function Results() {
  const colors = ['green', 'blue', 'red'];
  let candidate1;
  let candidate2;
  let candidate3;

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  };

  const getCandidateResults = () => {
    candidate1 = getRandomIntInclusive(40, 50);
    console.log('candidate1', candidate1);
    candidate2 = candidate1 = getRandomIntInclusive(40, 50);
    console.log('candidate2', candidate2);
    candidate3 = 5;
    console.log('candidate3', candidate3)
  };

  getCandidateResults();

  return (
    <Box sx={{ justifyContent: 'center', textAlign: 'center', paddingTop: 10 }}>
      <Grid container columnSpacing={3} rowSpacing={3} direction="column" sx={{ justifyContent: 'center', textAlign: 'center' }}>
        <Grid>
          <Blurb
            headline="Results"
            description="The winner needs x to win"
          />
        </Grid>
        <Grid container sx={{ justifyContent: 'center', textAlign: 'center' }}>
          <BarChart
            series={[{ data: [candidate1, candidate2, candidate3] }]}
            xAxis={[{
              scaleType: 'band',
              disableTicks: true,
              data: ['Two Horns', 'Wrinkled Poop', 'Slight Stain'],
              colorMap: {
                type: 'piecewise',
                thresholds: ['Two Horns', 'Wrinkled Poop', 'Slight Stain'],
                colors: ['#D13138', '#205894', '#D9D9D9'],
              }
            }]}
            height={300}
            width={500}
            leftAxis={null}
            grid={{ horizontal: true }}
          />
        </Grid>
        <Grid>
          {/* results content */}
        </Grid>
      </Grid>
    </Box>
  )
}