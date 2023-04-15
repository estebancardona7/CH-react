import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 300, height: 600 }}>
      <CardMedia sx={{ height: 350 }} image={item.img} title={item.title} />
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
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ItemCard;