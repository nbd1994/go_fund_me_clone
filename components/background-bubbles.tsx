import Image from "next/image";

export default function BackgroundBubbles() {
  const bubbles = [
    { id: 1, top: "10%", left: "5%", size: "80px", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80" },
    { id: 2, top: "20%", left: "70%", size: "100px", src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=150&q=80" },
    { id: 3, top: "50%", left: "15%", size: "90px", src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=150&q=80" },
    { id: 4, top: "70%", left: "60%", size: "120px", src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=150&q=80" },
    { id: 5, top: "80%", left: "30%", size: "70px", src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=150&q=80" },
  ];

  return (
    <div className="h-110 absolute inset-0 bg-white overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full overflow-hidden opacity-30 hover:opacity-50 transition-opacity duration-300"
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
          }}
        >
          <Image
            src={bubble.src}
            alt={`bubble-${bubble.id}`}
            fill
            className="object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  );
}