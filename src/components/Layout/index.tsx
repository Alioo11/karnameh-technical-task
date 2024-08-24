import Container from "@mui/material/Container";
import type { HOCFunctionalComponent } from "@_types/components";

const Layout: HOCFunctionalComponent = ({ children }): JSX.Element => {
  return (
    <Container maxWidth="xl" sx={{ p: "1rem", pt: 0 }}>
      {children}
    </Container>
  );
};
export default Layout;
