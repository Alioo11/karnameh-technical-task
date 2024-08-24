import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import type { HOCFunctionalComponent } from "@_types/components";

const Layout: HOCFunctionalComponent = ({ children }): JSX.Element => {
  return (
    <Box p={0} m={0} bgcolor={grey["100"]} height="100vh">
      <Container maxWidth="xl" sx={{ p: "1rem", bgcolor: "white" , height:"100%" }}>
        {children}
      </Container>
    </Box>
  );
};
export default Layout;
