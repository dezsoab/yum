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
            color: "#4d7e3e",
          },
          colorPrimary: {
            "&.Mui-checked": {
              color: "#4d7e3e",
            },
          },
          track: {
            opacity: 0.2,
            backgroundColor: "#FF8B13",
            ".Mui-checked.Mui-checked + &": {
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
