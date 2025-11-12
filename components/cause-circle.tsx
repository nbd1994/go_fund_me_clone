import Image from "next/image";

interface CauseCircleProps {
    label: string;
    image: string;
}

export default function CauseCircle({ label, image }: CauseCircleProps) {
    return (
        <div className="relative flex items-center justify-center w-35 h-35">
            {/* Outer progress ring */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "conic-gradient(rgba(34,197,94,1) 0deg, rgba(34,197,94,0.3) 360deg)",
                    WebkitMaskImage: "radial-gradient(circle, white 70%, transparent 71%)",
                    maskImage: "radial-gradient(circle, white 70%, transparent 71%)"
                }}
            />
            {/* Inner white background (for spacing effect) */}
            <div className="absolute inset-[7px] rounded-full bg-white" />

            {/* Circular image */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden">
                <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#E9E9E9] px-2 py-1 rounded-md shadow text-[#424242] text-xs font-bold">
                {label}
            </div>
        </div>
    );
}