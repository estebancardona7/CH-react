import ItemCard from "./ItemCard.jsx";

const ItemList = ({ items, deleteProduct, updateProduct }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        minHeight: "90vh",
        padding: "40px",
        gap: "20px",
      }}
    >
      {items.map((item) => {
        return (
          <ItemCard
            item={item}
            key={item.id}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
