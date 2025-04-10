const createProduct = (req,res) => {
res.status(200).json({ message: "Demo Product Created"});
};


 const getAllProducts = (req, res) => {
    res.status(200).json({message: "This is backend local hostttttttttttttttt "});
};

 const getProductByID = (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `Product with ID ${id} (demo)` });
};

 const deleteProduct = (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `Product with ID ${id} deleted (demo)` });
};
module.exports = { createProduct, getAllProducts, getProductByID, deleteProduct}