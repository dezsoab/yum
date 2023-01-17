import React, { useState } from "react";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { AlertTitle } from "@mui/material";

const OkAlert = ({
  width = "30rem",
  message = "Everything is OK!",
  fontSize = "1.8rem",
}) => {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{ width }}
      style={{ position: "fixed", top: "20px", right: "20px" }}
    >
      <Collapse in={open}>
        <Alert
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
          <AlertTitle>Success</AlertTitle>
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default OkAlert;
