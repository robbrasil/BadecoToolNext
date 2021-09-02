import { PrismaClient } from "@prisma/client";

export default async function handle(req, res) {
  const prisma = new PrismaClient();
  // const router = useRouter();
  // console.log(router);
  const { email } = req.query;

  const posts = await prisma.users.findUnique({
    where: {
        email: email,
    },
  })
  res.json(posts)
}