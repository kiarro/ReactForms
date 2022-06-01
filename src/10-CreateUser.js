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
    <Box sx={{ flexGrow: 1 }} margin="10px" padding="10px">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box display="flex" justifyContent="end">
            <Item>Идентификатор:</Item>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <TextField placeholder="Н102" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" justifyContent="end">
            <Item>Роль:</Item>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <TextField placeholder="Исследователь" fullWidth></TextField>
          </Box>
        </Grid>
      </Grid>

      <Box marginTop="20px" marginBottom="0px">
        <Item>Основные данные:</Item>
      </Box>
      <Grid container spacing={1} margin="10px" marginTop="0px" border="solid">
        <Grid item xs={4}>
          <Box>
            <Item>ФИО:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="Ымгыр" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Дата рождения:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="13.09.1980" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Номер договора:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="1860406847" fullWidth></TextField>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="flex-start">
            <Button variant="contained">Создать</Button>
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
