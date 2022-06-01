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
          <Box>
            <Item>Идентификатор:</Item>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <TextField placeholder="ЕХ12" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Item>Команда:</Item>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <TextField placeholder="RC1" fullWidth></TextField>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Item>Заголовок:</Item>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box>
            <TextField
              placeholder="Исследование влияния пустышки на человека"
              fullWidth
            ></TextField>
          </Box>
        </Grid>
        <Grid item xs={12} marginBottom="0px" paddingBottom="0px">
          <Box>
            <Item>Описание:</Item>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop="0px" paddingTop="0px">
          <Box>
            <TextField
              placeholder="Данное исследование проводится с целью определить влияние пустышки на человека в естественных условиях"
              fullWidth
              multiline="true"
              rows="6"
            ></TextField>
          </Box>
        </Grid>
        <Grid item xs={12} marginBottom="0px" paddingBottom="0px">
          <Box>
            <Item>Заявки и отчеты:</Item>
          </Box>
        </Grid>
        <Grid container spacing={2} margin="0px">
          <Grid item xs={1}>
            <Box m={1} display="flex" justifyContent="center">
              <Item>id</Item>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box m={1} display="flex" justifyContent="center">
              <Item>Тип</Item>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box m={1} display="flex" justifyContent="center">
              <Item>Заголовок</Item>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box m={1} display="flex" justifyContent="center">
              <Item>Дата</Item>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box m={1} display="flex" justifyContent="center">
              <Item>Исследователь</Item>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop="0px" paddingTop="0px">
          <List sx={{ m: 0, p: 0 }}>
            <Box sx={{ m: 0, p: 0, border: "1px dashed" }}>
              <Grid container spacing={2}>
                <Grid item xs={1}>
                  <Box m={1} display="flex" justifyContent="center">
                    <Item>1</Item>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box m={1} display="flex" justifyContent="left">
                    <Item>Заявка</Item>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box m={1} display="flex" justifyContent="left">
                    <Item>Заявка на анализ человека</Item>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box m={1} display="flex" justifyContent="center">
                    <Item>02.06.2020</Item>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box m={1} display="flex" justifyContent="left">
                    <Item>Ампфу</Item>
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
                <Grid item xs={2}>
                  <Box m={1} display="flex" justifyContent="left">
                    <Item>Отчет</Item>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box m={1} display="flex" justifyContent="left">
                    <Item>Влияние пустышки на человека</Item>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box m={1} display="flex" justifyContent="center">
                    <Item>30.06.2020</Item>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box m={1} display="flex" justifyContent="left">
                    <Item>Ампфу</Item>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="flex-start">
            <Button variant="contained">Создать отчет</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="flex-end">
            <Button variant="contained">Создать заявку</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box m={1} display="flex" justifyContent="flex-start">
            <Button variant="contained">Завершить эксперимент</Button>
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
