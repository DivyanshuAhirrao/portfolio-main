import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { formFields } from "../utils/constants";

const theme = createTheme();

export default function Form() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    allowCheckBox: false,
  });

  const handleChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isCheckboxEnabled =
    formData.firstName.trim() && formData.lastName.trim();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {formFields.map(({ id, label, autoComplete, required }) => (
                <Grid item xs={12} key={id}>
                  <TextField
                    fullWidth
                    id={id}
                    label={label}
                    name={id}
                    autoComplete={autoComplete}
                    required={required}
                    value={formData[id]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="allowCheckBox"
                      color="primary"
                      checked={formData.allowCheckBox}
                      onChange={handleChange}
                      disabled={!isCheckboxEnabled}
                    />
                  }
                  label="I hereby confirm that the information provided is accurate, complete, and belongs to me."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formData.allowCheckBox}
            >
              Collaborate
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
