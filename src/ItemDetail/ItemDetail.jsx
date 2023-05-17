import React from "react";
import "./ItemDetail.css";
import { Box, Button, CardActions, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../components/Counter/Counter";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <Grid container spacing={2} className="detailContainer">
      <Grid item xs={12} sm={6}>
        <img src={product.img} alt="" className="itemDetailImg" />
      </Grid>
      <Grid item xs={12} sm={6}>
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
            <CounterContainer stock={product.stock} onAdd={onAdd} />
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
