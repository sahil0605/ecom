// Get all cart items for a user
const Cart = require("../models/cart");
const Item = require("../models/item");
exports.getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId)
    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId });
    

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for this user" });
    }

    // Extract relevant product details for each cart item
    const cartItems = await Promise.all(
      cart.items.map(async (item) => {
        const product = await Item.findById(item.itemId);
        return {
          productId: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: item.quantity,
        };
      })
    );

    res
      .status(200)
      .json({ message: "Cart items retrieved successfully", cartItems });
  } catch (error) {
    console.error("Error in getCartItems:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addItemToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Find or create a cart for the user
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    // Check if the item is already in the cart
    const existingItem = cart.items.find(
      (item) => item.itemId.toString() === itemId
    );

    if (existingItem) {
      // If the item is already in the cart, increase the quantity
      existingItem.quantity += 1;
    } else {
      // If the item is not in the cart, add it with a default quantity
      cart.items.push({ itemId, quantity: 1 });
    }

    await cart.save();

    res
      .status(200)
      .json({ message: "Item added to the cart successfully", cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove a specific item from the cart
exports.removeCartItem = async (req, res) => {
  try {
    const { userId, itemId } = req.params;
    console.log(userId,itemId)

    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId });

   // Find the index of the item with the specified itemId
const itemIndex = cart.items.findIndex(item => item.itemId.toString() === itemId);

console.log('Item Index:', itemIndex);

if (itemIndex === -1) {
  return res.status(404).json({ message: 'Item not found in the cart' });
}

// Log details of the item before removal
console.log('Item Before Removal:', cart.items[itemIndex]);

// Remove the item with the specified itemId from the items array
cart.items = cart.items.filter(item => item.itemId.toString() !== itemId);

// Log details of the item after removal
console.log('Item After Removal:', cart.items[itemIndex]);

// Save the updated cart
await cart.save();
console.log('Cart saved successfully');



    res.status(200).json({ message: 'Item removed from the cart successfully', cart });
  } catch (error) {
    console.error('Error in removeCartItem:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Increase the quantity of an item in the cart
exports.increaseQuantity = async (req, res) => {
  try {
    const { userId, itemId } = req.params;

    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for this user' });
    }

    // Find the item with the specified itemId
    const selectedItem = cart.items.find(item => item.itemId.toString() === itemId);

    if (!selectedItem) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }

    // Increase the quantity by 1
    selectedItem.quantity += 1;

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Quantity increased successfully', cart });
  } catch (error) {
    console.error('Error in increaseQuantity:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Decrease the quantity of an item in the cart
exports.decreaseQuantity = async (req, res) => {
  try {
    const { userId, itemId } = req.params;

    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found for this user' });
    }

    // Find the item with the specified itemId
    const selectedItem = cart.items.find(item => item.itemId.toString() === itemId);

    if (!selectedItem) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }

    // Decrease the quantity by 1, ensuring it doesn't go below 1
    selectedItem.quantity = Math.max(selectedItem.quantity - 1, 1);

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Quantity decreased successfully', cart });
  } catch (error) {
    console.error('Error in decreaseQuantity:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


