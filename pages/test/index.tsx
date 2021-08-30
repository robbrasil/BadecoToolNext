import { PrismaClient } from '@prisma/client';

function Blog({ data }) {
  console.log(JSON.stringify(data))
  return (
    <div>
      <ul>
    {data.map(item =>
        <li>{ item.name}</li>
      )}
      </ul>
      </div>
      )
    }
    
export async function getServerSideProps() {
      const prisma = new PrismaClient()
      const entries = await prisma.users.findMany()
      const data = JSON.parse(JSON.stringify(entries))

  return {
    props: {
      data
    },
  }
}

export default Blog