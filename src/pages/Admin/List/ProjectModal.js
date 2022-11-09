import * as React from "react";
import {
  CssBaseline,
  Box,
  Container,
  Paper,
  Typography,
  Modal,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "6px",
  p: 4,
};

const theme = createTheme();

const ProjectModal = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)} color="primary">
        {props.data.icon}
      </IconButton>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Typography component="h3" variant="h5" align="center">
              {props.data.name} Project
            </Typography>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              >
                <React.Fragment>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="title"
                        name="title"
                        label="Title"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        id="image"
                        name="image"
                        label="Image Url"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        multiline
                        maxRows={4}
                        id="address2"
                        label="Details"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </React.Fragment>
              </Paper>
            </Container>
          </ThemeProvider>
        </Box>
      </Modal>
    </div>
  );
};

export default ProjectModal;
