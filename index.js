import express from "express";

const app = express();

app.use(express.json());
let products = [
  {
    id: 1,
    name: "Sumsung Galaxy S26 Ultra",
    price: 15000,
    imageURL:
      "https://images.samsung.com/is/image/samsung/p6pim/pk/s2602/gallery/pk-galaxy-s26-ultra-s948-sm-s948bzvopkd-thumb-550917052",
    description: "This is the Samsung Galaxy S26 Ultra",
  },
  {
    id: 2,
    name: "Sumsung Galaxy A56 5G",
    price: 20000,
    imageURL:
      "https://qmart.pk/wp-content/uploads/2025/04/Samsung-Galaxy-A56-5G-Qmart-1.png",
    description: "This is the Samsung Galaxy A56 5G",
  },
];
app.get("/products", (req, res) => {
  res.json(products);
});


app.post("/products", (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

app.delete("/products/:id", (req, res) => {
    const{id} = req.params;
    products = products.filter((product) => product.id !== parseInt(id));
    res.status(204).send();
  });
  
 app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    products = products.map((product) =>
      product.id === parseInt(id) ? updatedProduct : product
    );
    res.json(updatedProduct);
  });
 

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
