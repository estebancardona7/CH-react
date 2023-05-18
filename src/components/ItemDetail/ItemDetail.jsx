import React from "react";
import "./ItemDetail.css";
import { Box, Button, CardActions, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../Counter/Counter";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <Grid container spacing={2} className="detailContainer">
      <Grid item md={6} xs={12}>
        <img src={product.img} alt="" className="itemDetailImg" />
      </Grid>
      <Grid item md={6} xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Box>
            <Typography variant="h4">{product.title}</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex="1"
          >
            <Typography variant="body1" paddingLeft={5}>
              {product.description}
            </Typography>
            <Typography variant="h5" pt={10}>
              {product.price} usd.-
            </Typography>
          </Box>
          <Box pb={10}>
            <CounterContainer
              stock={product.stock}
              onAdd={onAdd}
              initial={cantidadTotal}
            />
            <Link to={`/`}>
              <Button variant="contained" size="small">
                Regresar
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
