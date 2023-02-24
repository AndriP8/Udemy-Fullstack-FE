import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const StyledPaper = styled(Paper)({
  padding: '1em',
});

const SkillView = styled(Typography)({
  color: '#333131',
  fontSize: '1.2em',
  fontWeight: 'bold',
  padding: '10px 0px',
});

const DateView = styled(Typography)({
  marginRight: '1em',
  color: '#898686',
  fontSize: '1.2em',
  fontWeight: 600,
});

const StyledVerifiedUser = styled(VerifiedUserIcon)({
  color: '#17d917',
  marginLeft: '1em',
  fontSize: '1em',
});

const BudgetView = styled(Typography)({
  textAlign: 'center',
});

const BidButton = styled(Button)({
  width: '100%',
});

const jobList = ({ jobs }) => {
  return (
    <Grid container spacing={3}>
      {jobs.map((job) => {
        return (
          <Grid key={job.id} item xs={12}>
            <StyledPaper elevation={2}>
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant="h5">
                    {job.title}
                    <Badge component="span">
                      <StyledVerifiedUser />
                    </Badge>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {job.description}
                  </Typography>
                  <SkillView variant="body1" gutterBottom>
                    {job.skills}
                  </SkillView>
                  <DateView variant="span" gutterBottom>
                    Post Date: {job.createdAt}
                  </DateView>
                  <DateView variant="span" gutterBottom>
                    Expired Date: {job.expiredAt}
                  </DateView>
                </Grid>
                <Grid item xs={3}>
                  <Box ml={5}>
                    <BudgetView>{`$${job.minBudget} - $${job.maxBudget}`}</BudgetView>
                    <BidButton variant="text" color="secondary">
                      Place Bid
                    </BidButton>
                  </Box>
                </Grid>
              </Grid>
            </StyledPaper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default jobList;
