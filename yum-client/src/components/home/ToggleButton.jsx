import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.module.css";

const ToggleButton = ({ isOnLoginForm, setIsOnLoginForm }) => {
  const handleChange = () => {
    setIsOnLoginForm(!isOnLoginForm);
  };

  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            // color: "#FF8B13",
            color: "#4d7e3e",
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: "#4d7e3e",
            },
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.2,
            backgroundColor: "#FF8B13",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.7,
              backgroundColor: "#FF8B13",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={handleChange}
              name="checkedA"
              sx={{
                "--Switch-track-width": "61px",
                "--Switch-track-height": "35px",
                "--Switch-thumb-size": "29px",
              }}
            />
          }
          label={isOnLoginForm ? "Login to account" : "Register new account"}
        />
      </FormGroup>
    </ThemeProvider>
  );
};

export default ToggleButton;
