module.exports = mongoose => {
  const Menu = mongoose.model(
    "menu",
    mongoose.Schema(
      {
          item: String,
          category: String,
          price:String,
          Quantity:String,
      },
      { timestamps: true }
    )
  );

  return Menu;
};