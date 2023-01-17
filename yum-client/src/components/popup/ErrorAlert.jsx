import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { AlertTitle } from "@mui/material";

const ErrorAlert = ({
  width = "30rem",
  message = "Something went wrong!",
  fontSize = "1.8rem",
  open,
  setOpen,
}) => {
  return (
    <Box
      sx={{ width }}
      style={{ position: "fixed", top: "20px", right: "20px" }}
    >
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={() => {
                setOpen(false);
              }}
              sx={{ width: "20px !important" }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, fontSize }}
        >
          <AlertTitle>
            <strong>Error</strong>
          </AlertTitle>
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ErrorAlert;
