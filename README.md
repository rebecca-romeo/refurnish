# LHL Node Skeleton

# re-furnish

**Where pre-loved furniture finds a new home!**

re-furnish is a full stack, multi-page web application that allows users to post furniture that they want to sell and contact sellers for items they are interested in. Our website promotes sustainability and buying secondhand.

Users:

- can see list of featured items on home page
- can filter items by a price range
- can "like" items to refer to later
- can send an email to the seller for an item listed

Admins:

- can post items for sale
- can delete items from the site
- can mark items as "Sold" or "Unsold"
- can send a message by email to negotiate with buyers

## Final Product

Users can view items on the homepage and filter them through

- see homepage + filter price // gif
- item description page + email // picture
- favourites + like + favorites page // gif
- sell an item // picture
- my listings page // gif

You can hover over the tweets and the flag, retweet, and like icons in the tweet box.

!["Hover over the tweet to see a box-shadow and color change for the icons."](https://github.com/Shamayal/tweeter/blob/master/docs/tweet-hover.gif)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
6. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Warnings & Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- bootstrap
- chalk
- cookie-session
- dotenv
- ejs
- express
- morgan
- pg
- sass
- typewriter-effect
