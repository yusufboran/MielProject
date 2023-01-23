import { Grid, styled } from "@mui/material";
import React, { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useTranslation } from "react-i18next";
import { addMessage } from "../../db";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";
import check from "../../assets/img/check.png";

const From = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({ date: new Date() });
  const [status, setStatus] = useState(false);

  const handleSubmit = () => {
    addMessage(state);
    setStatus(true);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { name, phone, email, message } = state;

  return status == false ? (
    <div>
      <h3>{t("Send us a Message")}</h3>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={8} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              fullwidth
              type="text"
              name="name"
              id="standard-basic"
              value={name || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Name"
              validators={["required", "minStringLength: 3"]}
            />

            <TextField
              fullWidth
              placeholder="05*********"
              type="text"
              name="phone"
              inputProps={{ maxLength: 11, minlength: 11 }}
              value={phone || ""}
              label="Phone Nubmer"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              fullwidth
              type="email"
              name="email"
              label="Email"
              value={email || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              fullwidth
              type="message"
              name="message"
              label="Message"
              value={message || ""}
              onChange={handleChange}
              validators={["required"]}
              multiline
              rows={6}
              errorMessages={["this field is required"]}
            />
          </Grid>
        </Grid>

        <button className={`btn-outline btn-outline`}>{"Send Message"}</button>
      </ValidatorForm>
    </div>
  ) : (
    <Grid container spacing={6} justifyContent={"center"}>
      <Box sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="250"
          image={check}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {state.name + " " + t("success message")}
          </Typography>
        </CardContent>
      </Box>
    </Grid>
  );
};

export default From;

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
