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
import { useEffect, useState, useCallback, useMemo } from "react";
import { formFields } from "../utils/constants";
import { useTheme } from "../context/ThemeContext";

export default function Form() {
  const { isDark } = useTheme(); // Get current theme state
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    allowCheckBox: false,
  });

  // Create MUI theme that responds to your dark/light mode
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: {
            main: isDark ? '#60a5fa' : '#3b82f6', // Blue colors
          },
          secondary: {
            main: isDark ? '#34d399' : '#10b981', // Green colors
          },
          background: {
            default: isDark ? '#111827' : '#ffffff',
            paper: isDark ? '#1f2937' : '#ffffff',
          },
          text: {
            primary: isDark ? '#f9fafb' : '#111827',
            secondary: isDark ? '#d1d5db' : '#6b7280',
          },
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: isDark ? '#4b5563' : '#d1d5db',
                  },
                  '&:hover fieldset': {
                    borderColor: isDark ? '#6b7280' : '#9ca3af',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: isDark ? '#60a5fa' : '#3b82f6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: isDark ? '#d1d5db' : '#6b7280',
                },
                '& .MuiInputBase-input': {
                  color: isDark ? '#f9fafb' : '#111827',
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              contained: {
                background: isDark 
                  ? 'linear-gradient(45deg, #3b82f6 30%, #1d4ed8 90%)'
                  : 'linear-gradient(45deg, #3b82f6 30%, #1e40af 90%)',
                '&:hover': {
                  background: isDark 
                    ? 'linear-gradient(45deg, #2563eb 30%, #1e40af 90%)'
                    : 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
                },
              },
            },
          },
          MuiCheckbox: {
            styleOverrides: {
              root: {
                color: isDark ? '#9ca3af' : '#6b7280',
                '&.Mui-checked': {
                  color: isDark ? '#60a5fa' : '#3b82f6',
                },
              },
            },
          },
          MuiFormControlLabel: {
            styleOverrides: {
              label: {
                color: isDark ? '#d1d5db' : '#374151',
              },
            },
          },
        },
      }),
    [isDark]
  );

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
    <ThemeProvider theme={muiTheme}>
      <Container 
        component="main" 
        maxWidth="xs"
        className="bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <CssBaseline />
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: 'transparent',
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
                    variant="outlined"
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
