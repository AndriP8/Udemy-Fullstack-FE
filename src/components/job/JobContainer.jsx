import React from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllJobs, fetchJobs } from '../../feature/job/JobSlice';
import JobList from './jobList';
import JobLoadingSkeleton from './JobLoadingSkeleton';
import Button from '@mui/material/Button';

import { styled } from '@mui/material';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  marginTop: '4em',
});

const StyledButton = styled(Button)({
  width: '20%',
  height: '4em',
});

const JobContainer = () => {
  const [filter, setfilter] = React.useState({ limit: 1, offset: 0 });

  const dispatch = useDispatch();
  const jobs = useSelector(selectAllJobs);

  const jobStatus = useSelector((state) => state.jobs.status);

  React.useEffect(() => {
    dispatch(fetchJobs(filter));
  }, [dispatch, filter]);

  const fetchMoreJobs = () => {
    const { limit, offset } = filter;
    setfilter({ limit, offset: offset + limit });
  };

  return (
    <Box color={'black'} marginTop="100px">
      {jobStatus === 'loading' && <JobLoadingSkeleton />}
      <JobList jobs={jobs} />
      <StyledBox>
        <StyledButton
          variant="contained"
          color="primary"
          disabled={jobStatus === 'loading'}
          onClick={fetchMoreJobs}
        >
          Load More
        </StyledButton>
      </StyledBox>
    </Box>
  );
};

export default JobContainer;
