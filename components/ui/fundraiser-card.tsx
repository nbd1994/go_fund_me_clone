import Image from "next/image"
import Link from "next/link"

interface FundraiserCardProps {
  image: string
  title: string
  donations: string
  amount: string
  progress: number // 0-1 or 0-100
  large?: boolean
  href?: string // Add this prop for routing
}

export default function FundraiserCard({
  image,
  title,
  donations,
  amount,
  progress,
  large = false,
  href,
}: FundraiserCardProps) {
  // Normalize progress to 0-1
  const normalizedProgress = progress > 1 ? progress / 100 : progress

  const cardContent = (
    <div className={`${large ? "p-2" : "p-1"} cursor-pointer hover:shadow-lg transition-shadow rounded-2xl`}>
      <div className={`relative w-full ${large ? "h-120" : "h-35"} rounded-2xl overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-full font-semibold">
          {donations} donations
        </div>
      </div>
      <div className="mt-4 mb-2 font-bold text-gray-900 text-lg leading-tight">
        {title}
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-green-500"
          style={{ width: `${normalizedProgress * 100}%` }}
        />
      </div>
      <div className="font-semibold text-gray-800">{amount}</div>
    </div>
  )

  return href ? (
    <Link href={href} passHref>
      {cardContent}
    </Link>
  ) : (
    cardContent
  )
}