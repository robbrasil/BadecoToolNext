import { PrismaClient } from "@prisma/client";

export default async function handle(req, res) {
  const prisma = new PrismaClient();
  // const router = useRouter();
  // console.log(router);
  const { userid } = req.query;

  const getUser = await prisma.users.findUnique({
    where: {
      id: parseInt(userid),
    },
    include: {
      company: true,
      profile: true,
      entries: true,
      
    },
  })
  res.json(getUser)
}