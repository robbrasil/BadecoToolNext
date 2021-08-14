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
          host: "smtp.sendgrid.net",
          port: 587,
          auth: {
            user: "apikey",
            pass: "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"
          }
        },
        from: "robbarbosa02@gmail.com"
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