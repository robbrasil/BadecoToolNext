import { PrismaClient } from "@prisma/client";
import { useRouter } from 'next/router'

export default async function handle(req, res) {
  const prisma = new PrismaClient();
  // const router = useRouter();
  // console.log(router);
  const { userid } = req.query;

  const posts = await prisma.entries.findMany({
    where: {
        user_id: parseInt(userid),
    },
  })
  res.json(posts)
}