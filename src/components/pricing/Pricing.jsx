import React, { useState, useEffect } from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { toast } from 'react-toastify';

const Pricing = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/pricing.json')
            .then((res) => res.json())
            .then((data) => {
                setPlans(data);
                setLoading(false);
            })
            .catch(() => {
                toast.error('Failed to load pricing plans.');
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-16 px-4">
            
            <div className="text-center mb-10">
                <h2 className="font-bold text-3xl sm:text-4xl mb-2">Simple, Transparent Pricing</h2>
                <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

           
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <span className="loading loading-spinner loading-lg text-[#4f39f6]"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow ${
                                plan.highlight
                                    ? 'bg-linear-to-b from-[#4f39f6] to-[#9514fa] text-white'
                                    : 'bg-base-200'
                            }`}
                        >
                            
                            {plan.badge && (
                                <span className="absolute top-4 right-4 bg-amber-200 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full">
                                    {plan.badge}
                                </span>
                            )}

                            
                            <div>
                                <h3 className={`font-bold text-2xl ${plan.highlight ? 'text-white' : ''}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm mt-1 ${plan.highlight ? 'text-purple-100' : 'text-gray-500'}`}>
                                    {plan.subtitle}
                                </p>
                            </div>

                            
                            <div>
                                <span className={`font-bold text-3xl ${plan.highlight ? 'text-white' : ''}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-sm ml-1 ${plan.highlight ? 'text-purple-100' : 'text-gray-500'}`}>
                                    /{plan.period}
                                </span>
                            </div>

                           
                            <ul className="flex flex-col gap-2 flex-grow">
                                {plan.features.map((f, i) => (
                                    <li key={i} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-white' : ''}`}>
                                        <MdOutlineDone className={`shrink-0 text-base ${plan.highlight ? 'text-white' : 'text-[#4f39f6]'}`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                          
                            <button
                                className={`btn w-full rounded-full mt-2 border-none font-semibold ${
                                    plan.highlight
                                        ? 'bg-white text-[#4f39f6] hover:bg-purple-50'
                                        : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'
                                }`}
                            >
                                {plan.btnLabel}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Pricing;