import React from "react";

const ClientStats = () => {
    return (
        <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/man.png"
                    alt="Background"
                    className="hidden md:block w-full h-full object-cover object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/50" />
            </div>

            {/* Stats Content */}
            <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {[
                        { count: "987", label: "Happy Clients" },
                        { count: "112", label: "Completed Projects" },
                        { count: "75", label: "Awards Won" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm
                         border border-white/20 transition-all hover:bg-white/20 hover:transform hover:scale-105"
                        >
                            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 mb-2">
                                {stat.count}
                            </span>
                            <span className="text-lg md:text-xl lg:text-2xl font-medium text-white text-center">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated background elements */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
            </div>
        </section>
    );
};

export default ClientStats;