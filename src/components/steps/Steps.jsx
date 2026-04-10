import React from 'react';
import UserIcon from '../../assets/user.png';
import PackageIcon from '../../assets/package.png';
import RocketIcon from '../../assets/rocket.png';

const steps = [
    {
        number: '01',
        icon: UserIcon,
        title: 'Create Account',
        desc: 'Sign up for free in seconds. No credit card required to get started.',
    },
    {
        number: '02',
        icon: PackageIcon,
        title: 'Choose Products',
        desc: 'Browse our catalog and select the tools that fit your needs.',
    },
    {
        number: '03',
        icon: RocketIcon,
        title: 'Start Creating',
        desc: 'Download and start using your premium tools immediately.',
    },
];

const Steps = () => {
    return (
        <section className="py-16 px-4">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="font-bold text-3xl sm:text-4xl mb-2">Get Started In 3 Steps</h2>
                <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
            </div>

            {/* Cards Grid — 1 col on mobile, 3 on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="bg-base-300 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow"
                    >
                        {/* Step badge */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white font-bold text-sm self-end">
                            {step.number}
                        </div>

                        <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
                        <h3 className="font-bold text-xl">{step.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Steps;