import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        domain: process.env.AUTH0_DOMAIN
      }),
      Providers.Email({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
      }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 8889,
    username: 'root',
    password: 'admin',
    database: 'nextbadecotool',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    synchronize: true
  }
})