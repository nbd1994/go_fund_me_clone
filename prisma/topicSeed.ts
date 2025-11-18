import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const topics = [
  {
    title: "GoFundMe Giving Funds",
    description:
      "A brand new product to make a bigger impact on the nonprofits you care about. The only Donor-Advised Fund backed by the world leader in giving.",
    badge: "New",
    badgeColor: "bg-purple-300",
    image: "/gofundme-giving-funds-app.jpg",
    action: "Learn more",
    bgColor: "bg-green-100",
  },
  {
    title: "Hurricane Melissa",
    image: "/hurricane-melissa-disaster.jpg",
    badge: "Natural disaster",
    badgeColor: "bg-cyan-300",
    action: "Donate now",
    bgColor: "bg-white-200",
  },
  {
    title: "Feeding communities",
    image: "/feeding-communities-food.jpg",
    badge: "Urgent cause",
    badgeColor: "bg-red-300",
    action: "Donate now",
    bgColor: "bg-white",
  },
  {
    title: "Fundraising FAQs: Israel/Gaza",
    description: "Learn more about fundraising during the Israel-Gaza conflict.",
    badge: "Urgent cause",
    badgeColor: "bg-purple-300",
    image: "/faq-help.jpg",
    action: "Learn more",
    bgColor: "bg-white",
  },
];

async function main() {
  for (const topic of topics) {
    await prisma.topic.create({ data: topic });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });