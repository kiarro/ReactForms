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
    <Box sx={{ flexGrow: 1 }} margin="10px">
      <Item>Отчет:</Item>
      <TextField fullWidth multiline="true" rows={10}></TextField>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="flex-start">
            <Button variant="contained">Прикрепить</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="flex-end">
            <Button variant="contained">Назад</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
