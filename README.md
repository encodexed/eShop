# The Mysterious Stranger - a full-stack eCommerce project

![eshop-banner](https://github.com/encodexed/eShop/assets/107448691/324d18b2-53c2-4320-b8d4-ded935cc5601)

## Demo & Snippets

![eShop-collage](https://github.com/encodexed/eShop/assets/107448691/e7fd7773-1b78-42cb-aa6a-84eb4fc32a4b)

### Full size images
- [Products (Wares) Page](https://res.cloudinary.com/dihtw7wct/image/upload/v1699876978/eShop-wares_lbkdvv.png)
- [Product (Ware) Page](https://res.cloudinary.com/dihtw7wct/image/upload/v1699877229/eShop-item_s0lrnm.png)
- [Cart Page](https://res.cloudinary.com/dihtw7wct/image/upload/v1699877259/eShop-cart_gh0lwm.png)

---

## Requirements / Purpose

The Mysterious Stranger is a mock up eCommerce store built as part of my participation during the _nology bootcamp. We were given two weeks to integrate a NoSQL document database (in this case, Google Firestore) with a React frontend UI that we were to build as part of our React training. Some critical parts of this project include:

- fetching data within a React app
- using react-router-dom
- using Google's Firebase/Firestore

I chose to replicate something similar to Steam, because I am interested in video games. 

**Tech Stack:** HTML, SCSS, React, React-Router, Google Firestore

---

## Build Steps

To get this project running in your local environment, paste this into your terminal:

```bash
git clone git@github.com:encodexed/eShop.git
cd eShop
npm install
npm run dev
```

The Google Firestore being used to host the data is currently set to read-only so you will not be able to perform in CRUD operations other than Read.

---

## Design Goals / Approach

- I focused on getting the frontend up and running first and relying on a [fake backend](https://www.npmjs.com/package/json-server) to simulate the fetching of data for the time being.
- My primary concerns were styling and reusability of components, both of which proved tricky at times.
- I made use of React's `useContext` to store the store's stock data to limit the amount of API calls being made to my (free-tier) backend (see note below). I also stored data about the user's cart. This prevent multiple levels of prop drilling and state lifting.
-   Data was kept in Google Firestore, a NoSQL document database, as per the requirements of the assignment. This was done to help us keep focused on the front-end and not have to worry about the hassles of setting up a functioning back-end. We had not yet covered SQL, Springboot or NestJS.
-   Data requirements as per the assignment: all data was to be fetched from a backend (no static data kept in our React app) and that each item had:
  -   name
  -   quantity
  -   variants (in my case, gaming platforms/console)
  -   price per unit
  -   image URL
  -   favourited or not (boolean)

### A note about the Store Data
The Store data is fetched when visiting the site for the first time and is not updated until the user attempts to buy something, or refreshes/revisits the page. This would not be ideal when there are multiple users, but this is only a project, not a live site relying on a free-tier hosted backend service. To fix this, I would make sure live updates are enabled in Firestore and have more API calls going out.

---

## Features

This projects key features include:
- Routing provided by react-router-dom
- A splash landing page
- A products page, featuring a list of stock items, and a functioning auto-scrolling carousel of items currently featured/on sale
- Individual product pages, featuring an interactive screenshot gallery, extensive information about the products, and an add-to-cart component displaying stock levels
- A checkout/cart page, featuring a list of selected items, buttons for adding/removing items from the cart, and pricing and cart summary components
  
---

## Known issues

-   Some responsiveness issues

---

## Future Goals

This project is wrapped up and I will likely not be working on it anymore, instead focusing on new projects of greater learning potential. If I were to dedicate time to this project, I would:
  -   Write unit tests for the components and scripts
  -   Fix the responsiveness issues
  -   Add the Favourites feature
  -   Write a database seeding function to help work in the development environment
  -   Add more stock to the database, and add a search/filter functionality to the list

---

## Licensing Details

Copyright 2023 Robert Gollan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without limitation in the rights to use, copy, modify, merge, publish, and/ or distribute copies of the Software in an educational or personal context, subject to the following conditions: 

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

Permission is granted to sell and/ or distribute copies of the Software in a commercial context, subject to the following conditions:

- Substantial changes: adding, removing, or modifying large parts, shall be developed in the Software. Reorganizing logic in the software does not warrant a substantial change. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
