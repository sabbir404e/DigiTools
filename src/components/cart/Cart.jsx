import React from 'react';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleRemove = (item) => {
        removeFromCart(item.id);
        toast.error(`"${item.name}" removed from cart.`);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            toast.warn('Your cart is already empty!');
            return;
        }
        clearCart();
        toast.success('Checkout successful! Cart cleared.');
    };

    return (
        <div className="max-w-xl mx-auto w-full">
            <div className="bg-base-200 shadow-lg rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-base-300">
                    <h2 className="font-bold text-2xl">Your Cart</h2>
                </div>

                
                <div className="flex flex-col divide-y divide-base-300">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                            <p className="text-lg font-semibold">Your cart is empty</p>
                            <p className="text-sm mt-1">Add some products to get started!</p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-4 p-4 hover:bg-base-300 transition-colors"
                            >
                                
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl w-10 h-10 flex items-center justify-center bg-base-100 rounded-xl">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <h4 className="font-semibold text-sm">{item.name}</h4>
                                        <p className="text-[#4f39f6] font-bold text-sm">${item.price}/Mo</p>
                                    </div>
                                </div>

                                
                                <button
                                    onClick={() => handleRemove(item)}
                                    className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50 flex items-center gap-1 rounded-full"
                                >
                                    <MdDelete className="text-lg" />
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                
                <div className="p-5 border-t border-base-300">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-gray-600">Total</span>
                        <span className="font-bold text-xl text-[#4f39f6]">${total}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="btn w-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full border-none hover:opacity-90 transition-opacity"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;