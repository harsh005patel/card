export default function Card({
    icon = "⭐",
    title = "Card Title",
    subtitle = "",
    meta = "",
    color = "bg-blue-500",
    titleColor = "",
    rotation = "0",
    variant = "default"
}) {

    if (variant === "background") {
        return (
            <div
                className={`${color} rounded-full opacity-40 pointer-events-none w-[250px] h-[40px] md:w-[500px] md:h-[70px]`}
                style={{ transform: `rotate(${rotation}deg)` }}
            />
        );
    }

    if (variant === "portal") {
        return (
            <div
                className="px-8 py-4 rounded-full shadow-lg inline-flex w-[300px] h-[70px] items-center bg-[#a4aaef]"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className="flex items-center gap-3">
                    {/* Accent bar */}
                    <div className="w-1 h-10 rounded-full bg-orange-400" />

                    {/* Avatar */}
                    <div className="w-16 h-10.5 rounded-full bg-amber-300 flex items-center justify-center text-sm">
                        {icon}
                    </div>

                    {/* Text */}
                    <div>
                        <div className="text-xs font-bold text-black">
                            {title}
                        </div>
                        <div className="text-xs text-[#797da7]">
                            {subtitle}
                        </div>
                        <div className="text-xs mt-0.5 text-[#797da7]">
                            {meta}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default variant
    const textStyle = titleColor ? { color: titleColor } : {};
    const iconClass = titleColor ? "text-2xl" : "text-2xl text-white";
    const titleClass = titleColor ? "text-2xl font-medium" : "text-white text-2xl font-medium";

    return (
        <div
            className={`${color} px-8 py-4 rounded-full shadow-lg inline-flex w-[300px] h-[70px] items-center`}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <div className="flex items-center gap-3">
                <span className={iconClass} style={textStyle}>{icon}</span>
                <h1 className={titleClass} style={textStyle}>{title}</h1>
            </div>
        </div>
    );
}
