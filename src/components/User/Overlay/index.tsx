import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import UserOverlayRecord from "./Record";
import type { IUser } from "@_types/user";
import type { FunctionComponent } from "react";
import type { NoneToVoidFunction } from "@_types/index";

interface UserOverlayProps {
  user: IUser | null;
  onClose: NoneToVoidFunction;
}
const UserOverlay: FunctionComponent<UserOverlayProps> = (props) => {
  const { user, onClose } = props;

  if (!user) return null;

  return (
    <Dialog open={!!user} fullWidth onClose={onClose}>
      <Box p={2}>
        <Typography variant="h6">User Details</Typography>
        <Divider />
        <Box mt={2}>
          <UserOverlayRecord label="Name" value={user.name} />
          <UserOverlayRecord label="Email" value={user.email} />
          <UserOverlayRecord label="Phone" value={user.phone} />
          <UserOverlayRecord label="Website" value={user.website} />
          <UserOverlayRecord label="Username" value={user.username} />
          <UserOverlayRecord label="Company Name" value={user.company.name} />
          <UserOverlayRecord label="City " value={user.address.city} />
          <UserOverlayRecord label="Zipcode " value={user.address.zipcode} />
        </Box>
      </Box>
    </Dialog>
  );
};

export default UserOverlay;
