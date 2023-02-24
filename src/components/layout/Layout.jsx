import Header from './Header';
import Box from '@mui/material/Box';

const Layout = (props) => {
  return (
    <Box minHeight={'100vh'} paddingX="20px">
      <Header />
      <Box>{props.children}</Box>
    </Box>
  );
};

export default Layout;
