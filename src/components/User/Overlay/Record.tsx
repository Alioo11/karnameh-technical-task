import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FunctionComponent } from "react";

interface UserOverlayRecordProps {
  label: string;
  value: string;
}

const UserOverlayRecord: FunctionComponent<UserOverlayRecordProps> = (props) => {
  const { label: key, value } = props;

  return (
    <Stack mt={2} justifyContent="space-between" direction="row">
      <Typography variant="body2">{key}:</Typography>
      <Typography variant="body2">{value}</Typography>
    </Stack>
  );
};

export default UserOverlayRecord;
