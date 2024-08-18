import { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Blurb from '../../../Components/Blurb/Blurb';
import BallotContent from './BallotContent';
import ButtonComponent from '../../../Components/ButtonComponent';
import Horns from '../../../Assets/horns.svg';
import Prune from '../../../Assets/prune.svg';
import Stain from '../../../Assets/stain.svg';

const candidates = [
  { name: 'Two Horns', img: Horns },
  { name: 'Wrinkled Prune', img: Prune },
  { name: 'Slight Stain', img: Stain }
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 679,
  height: 519,
  bgcolor: '#FCFCFC',
  borderRadius: '10px',
  p: 6,
};

export default function Ballot({ open, handleClose }) {
  const [ selectedCandidate, setSelectedCandidate ] = useState(null);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container direction="column" sx={{ justifyContent: 'center', textAlign: 'center' }}>
            <Grid>
              <Blurb headline="Vote" description="Select one candidate only" />
            </Grid>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'black',
              }}
            >
              <CloseIcon />
            </IconButton>
            <Grid sx={{ paddingTop: 3 }}>
              {candidates.map((candidate) => {
                const { name, img } = candidate;
                return (
                  <>
                    <BallotContent 
                      key={name}
                      name={name} 
                      img={img}
                      selectedCandidate={selectedCandidate} 
                      setSelectedCandidate={setSelectedCandidate}
                    />
                  </>
                )
              })}
            </Grid>
            <Grid>
              <ButtonComponent
                label="Vote"
                buttonStyles={{
                  color: 'white',
                  backgroundColor: '#6C2023',
                  minWidth: 230
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}