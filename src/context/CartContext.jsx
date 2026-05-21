import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // ➕ Add to cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                toast.info(`${product.name} quantity increased!`);

                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                toast.success(`${product.name} added to cart!`);

                return [...prevCart, { ...product, qty: 1 }];
            }
        });
    };

    // ❌ Remove item
    const removeFromCart = (id) => {
        const item = cart.find((p) => p.id === id);

        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== id)
        );

        if (item) {
            toast.error(`${item.name} removed from cart`);
        }
    };

    // ➕ increment qty
    const incrementQty = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );

        const item = cart.find((p) => p.id === id);
        if (item) {
            toast.success(`${item.name} quantity increased`);
        }
    };

    // ➖ decrement qty
    const decrementQty = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
                .filter((item) => item.qty > 0)
        );

        const item = cart.find((p) => p.id === id);
        if (item) {
            toast.info(`${item.name} quantity decreased`);
        }
    };

    // 🧹 clear cart
    const clearCart = () => {
        setCart([]);
        toast.warn("Cart cleared!");
    };

    // 💰 total price
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                incrementQty,
                decrementQty,
                clearCart,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider };