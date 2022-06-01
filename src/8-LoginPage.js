import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField, List } from "@mui/material";

const Item = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left"
}));

export default function App() {
  return (
    <Box sx={{ flexGrow: 1, width: 400 }} margin="10px" padding="10px">
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box>
            <Item>Логин:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Item>Пароль:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="" fullWidth></TextField>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box m={1} display="flex" justifyContent="flex-end">
            <Button variant="contained">Войти</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
