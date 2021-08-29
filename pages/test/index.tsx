import { PrismaClient } from '@prisma/client';
// import { useState } from "react";


// export async function getStaticProps() {
  //     return {
    //       props : { data }
    //     }
    //   }
    //   export default ({data}) =>
    
    // posts will be populated at build time by getStaticProps()
    function Blog({ posts }) {
      console.log(typeof posts)
      return (
        <div>
          {/* <ul>
        {data.map(item =>
            <li>{ item.name}</li>
         
          )}
        
          </ul> */}
          </div>
          )
        }
        
        
        export async function getServerSideProps() {

              const prisma = new PrismaClient()
              const posts = await prisma.users.findMany()
              const data = JSON.stringify(posts)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog