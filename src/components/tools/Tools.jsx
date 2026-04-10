import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdOutlineDone } from 'react-icons/md';
import Cart from '../cart/Cart';


const tagStyles = {
    'new':         'bg-green-100 text-green-600',
    'popular':     'bg-blue-100 text-blue-600',
    'best-seller': 'bg-amber-100 text-amber-600',
};

const Tools = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
    const [products, setProducts]   = useState([]);
    const [loading, setLoading]     = useState(true);
    const [activeTab, setActiveTab] = useState('products');
    const [addedIds, setAddedIds]   = useState([]);

    
    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => {
                toast.error('Failed to load products.');
                setLoading(false);
            });
    }, []);

    const handleBuyNow = (product) => {
        addToCart(product);
        if (!addedIds.includes(product.id)) {
            setAddedIds((prev) => [...prev, product.id]);
            toast.success(`"${product.name}" added to cart!`);
        } else {
            toast.info(`"${product.name}" is already in your cart.`);
        }
    };

    return (
        <div className="flex flex-col mx-auto py-10 px-4">
            
            <div className="text-center mb-8">
                <h2 className="font-bold text-4xl mb-2">Premium Digital Tools</h2>
                <p className="text-gray-500">
                    Choose from our curated collection of premium digital products designed
                    <br />to boost your productivity and creativity.
                </p>

               
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`btn w-32 rounded-full transition-all ${
                            activeTab === 'products'
                                ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none'
                                : 'btn-outline'
                        }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`btn w-32 rounded-full transition-all ${
                            activeTab === 'cart'
                                ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none'
                                : 'btn-outline'
                        }`}
                    >
                        Cart ({cartItems.length})
                    </button>
                </div>
            </div>

            
            {activeTab === 'products' && (
                <>
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <span className="loading loading-spinner loading-lg text-[#4f39f6]"></span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                            {products.map((product) => {
                                const isAdded    = addedIds.includes(product.id);
                                const badgeClass = tagStyles[product.tagType] || 'bg-gray-100 text-gray-600';
                                const priceLabel = product.price === 0
                                    ? 'Free'
                                    : `$${product.price}/${product.period === 'monthly' ? 'Mo' : product.period === 'yearly' ? 'Yr' : ''}`;

                                return (
                                    <div
                                        key={product.id}
                                        className="bg-base-200 rounded-2xl shadow-md p-5 flex flex-col gap-3 hover:shadow-xl transition-shadow"
                                    >
                                        
                                        <div className="flex items-start justify-between">
                                            <span className="text-4xl">{product.icon}</span>
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${badgeClass}`}>
                                                {product.tag}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-lg">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{product.description}</p>
                                        <h2 className="font-bold text-xl text-[#4f39f6]">{priceLabel}</h2>

                                       
                                        <ul className="space-y-1 text-sm flex-grow">
                                            {product.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-1">
                                                    <MdOutlineDone className="text-[#4f39f6] shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        
                                        <button
                                            onClick={() => handleBuyNow(product)}
                                            className={`btn w-full rounded-full mt-auto text-white border-none transition-all ${
                                                isAdded
                                                    ? 'bg-green-500'
                                                    : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa]'
                                            }`}
                                        >
                                            {isAdded ? 'Added to Cart' : 'Buy Now'}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </>
            )}

           
            {activeTab === 'cart' && (
                <Cart
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                />
            )}
        </div>
    );
};

export default Tools;