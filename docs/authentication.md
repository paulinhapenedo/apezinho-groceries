# Authentication

Oof... this was a hard one.

After a lot of reading, I discovered that [`next-auth`](https://next-auth.js.org/) was the go-to library to add authentication to a NextJS app. I have to admit: I've never done authentication before in my 11 years of programming (the benefits of having great co-workers or working at big companies where things are all set-up).

Since this a playground app using the free tier in MongoDB Atlas, I had to protect how many people could have an account. This lead me to have a MVP approach:

- Use Google Sign-in.
- Have a list of emails that are allowed to have an account are saved on environmental variables.
- On the callback of Google Auth, before the user is authenticated, I'm checking the email against the list of emails. If your email is there, authentication allowed, session created. If not, you get a simple error page that tells you what's happening.

## Lessons Learned

- Even if you're using Mongoose, I've learned that you need to setup and expose a `MongoClient` method in order to use it as an `adapter` on `next-auth` config file. The file is `./lib/mongodb.ts`.
- Google credentials is a pain to configure. Don't forget to add your localhost URL and the production URL on both "JavaScript origins" and "Redirect URIs".
- `next-auth` and OAuth doesn't allow you to configure how are you going to save the User information. There's no way, as far as I know, to model the data you're getting.

## Things to improve

- Have a loading state for all protected pages (maybe for ALL pages?), to avoid flash of unwanted content.
