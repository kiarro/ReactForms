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
        <Grid item xs={4}>
          <Box>
            <Item>Идентификатор:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="Н102" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Имя:</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <TextField placeholder="Рэдрик Шухарт" fullWidth></TextField>
          </Box>
        </Grid>
      </Grid>

      <Box marginTop="20px" marginBottom="0px">
        <Item>Внешние данные:</Item>
      </Box>
      <Grid container spacing={1} margin="10px" marginTop="0px" border="solid">
        <Grid item xs={4}>
          <Box>
            <Item>Цвет волос:</Item>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <TextField placeholder="Рыжий" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Цвет глаз:</Item>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <TextField placeholder="Серый" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Цвет кожи:</Item>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <TextField placeholder="Светлый" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Особые приметы:</Item>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <TextField
              placeholder="Нет"
              fullWidth
              multiline="true"
              rows="4"
            ></TextField>
          </Box>
        </Grid>
      </Grid>

      <Box marginTop="20px" marginBottom="0px">
        <Item>Основные показатели:</Item>
      </Box>
      <Grid container spacing={1} border="solid" margin="10px" marginTop="0px">
        <Grid item xs={4}>
          <Box>
            <Item>Вес:</Item>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <TextField placeholder="90" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Рост:</Item>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <TextField placeholder="176" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Item>Дата рождения:</Item>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <TextField placeholder="25.06.1950" fullWidth></TextField>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop="20px" marginBottom="0px">
        <Item>Отчеты об анализе:</Item>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Box m={1} display="flex" justifyContent="center">
            <Item>id</Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="center">
            <Item>Анализы</Item>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box m={1} display="flex" justifyContent="center">
            <Item>Дата</Item>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box m={1} display="flex" justifyContent="center">
            <Item>Аналитик</Item>
          </Box>
        </Grid>
      </Grid>
      <List sx={{ m: 0, p: 0 }}>
        <Box sx={{ m: 0, p: 0, border: "1px dashed" }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Box m={1} display="flex" justifyContent="center">
                <Item>1</Item>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box m={1} display="flex" justifyContent="left">
                <Item>Рентген</Item>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box m={1} display="flex" justifyContent="center">
                <Item>02.06.2020</Item>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box m={1} display="flex" justifyContent="left">
                <Item>Умбрхб</Item>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ m: 0, p: 0, border: "1px dashed" }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Box m={1} display="flex" justifyContent="center">
                <Item>2</Item>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box m={1} display="flex" justifyContent="left">
                <Item>Спектрометрия</Item>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box m={1} display="flex" justifyContent="center">
                <Item>18.08.2020</Item>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box m={1} display="flex" justifyContent="left">
                <Item>Хрбанг</Item>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="flex-start">
            <Button variant="contained">Изменить</Button>
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
