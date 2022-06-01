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
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <Item>Дата создания заявки:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="27.04.2022" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Создатель:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="Ымгыр" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Тип заявки:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="Заявка на артефакты" fullWidth></TextField>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="20px">
        <Item>Содержание заявки</Item>
      </Box>
      <List>
        <Grid container spacing={1} border="solid">
          <Grid item xs={4}>
            <Box>
              <Item>Тип артефактов:</Item>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <TextField placeholder="Батарейка" fullWidth></TextField>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Item>Количество:</Item>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <TextField placeholder="10" fullWidth></TextField>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Item>Место высадки:</Item>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <TextField placeholder="2.345; 4.301" fullWidth></TextField>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              m={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="contained">Показать</Button>
            </Box>
          </Grid>
        </Grid>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box m={1} display="flex" justifyContent="flex-start">
            <Button variant="contained">Назад</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box m={1} display="flex" justifyContent="center">
            <Button variant="contained">Утвердить</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box m={1} display="flex" justifyContent="flex-end">
            <Button variant="contained">Отклонить</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
