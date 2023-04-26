import React from "react";
import "./ItemCard.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 300, height: 600 }}>
      <CardMedia
        className="cardMedia"
        sx={{ height: 350, objectFit: "unset" }}
        component="img"
        image={item.img}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="primary">
          usd {item.price}
        </Typography>
      </CardContent>
      <Box
        sx={{
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button variant="contained" size="small">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ItemCard;
