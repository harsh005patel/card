export default function card({
    icon = "⭐",
    title = "Card Title",
    color = "bg-blue-500",
    rotation = "0",
    position = "top-0 left-0"
}) {
    return (
        <div className={`${color} ${position} p-4 rounded-lg shadow-md max-w-xs`} style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="flex items-center gap-3">
                <span className="text-2xl">
                    {icon}
                </span>
                <h3 className="text-white font-medium">{title}</h3>
            </div>
        </div>
    );
}