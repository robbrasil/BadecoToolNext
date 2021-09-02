// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
// import { PrismaClient } from "@prisma/client";

// export default function ProtectedPage({ user, authenticatedUser,installationEntries }) {
//    console.log("installationEntries: ",installationEntries)
//   return ( <div>
//       {/* <code>{authenticatedUser}</code> */}
//       <code>{installationEntries}</code>
//       </div>
//   )
// }

// export const getServerSideProps = withPageAuthRequired({

//   async getServerSideProps(ctx) {
//     const prisma = new PrismaClient();
//     const { user } = ctx.query;
//     const uniqueUser = await prisma.users.findUnique({
//         where: {
//             email: user as string,
//         },
        
//       })
//       console.log(uniqueUser.id)

//       const entries = await prisma.entries.findMany({
//         where: {
//             id: uniqueUser.id,
//         },
//       })

//       console.log(entries)

//       const authenticatedUser = JSON.stringify(uniqueUser)
//       const installationEntries = JSON.parse(JSON.stringify(entries))

//     return { props: { authenticatedUser, installationEntries } };
//   }
// });
import {
  useSession, signIn, signOut
} from 'next-auth/client'

export default function Component() {
  const [ session, loading ] = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}