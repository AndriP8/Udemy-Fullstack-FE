import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)({
  padding: '1em',
  marginBottom: '1em',
});

export const JobLoadingSkeleton = () => {
  return (
    <StyledPaper data-testid="job-container-loading">
      <Grid container>
        <Grid xs={9}>
          <Skeleton variant="text" height="30px" />
          <Skeleton variant="rectangular" height="100px" />
          <Skeleton variant="text" height="30px" />
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={2}>
          <Skeleton variant="rectangular" height="160px" />
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default JobLoadingSkeleton;
