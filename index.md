<img src="doc/landing.png">

Digits is a contact management application built with Next.js that allows users to:

- Create and manage contacts with names, addresses, images, and descriptions.
- Add timestamped notes to each contact.
- Admin users can view all contacts in the system.

## Installation

First, [install PostgreSQL](https://www.postgresql.org/download/). Then create a database for your application.

```
$ createdb digits
```

Second, download a copy of Digits. You can download it as a zip file or clone the repository.

Third, cd into the directory and install dependencies:

```
$ npm install
```

Fourth, create a `.env` file from the `sample.env`. Edit the `DATABASE_URL` line to match your PostgreSQL setup, replacing the database name with `digits` and using your PostgreSQL username and password.

Fifth, run the Prisma migration to set up the database tables:

```
$ npx prisma migrate dev
```

Sixth, generate the Prisma Client:

```
$ npx prisma generate
```

Seventh, seed the database with default data:

```
$ npx prisma db seed
```

## Running the system

Once the libraries are installed and the database seeded, you can run the application:

```
$ npm run dev
```

The application will appear at [http://localhost:3000](http://localhost:3000). You can log in using the credentials in the settings file, or register a new account.

### ESLint

You can verify that the code obeys our coding standards by running ESLint:

```
$ npm run lint
```

## Walkthrough

### Landing Page

When you first visit the app, this is the landing page:
The first step is to use the Login menu to either sign in to an existing account or register a new account.

### Landing Page (after Login)

Once you log in, the navbar changes to show your available options:

<img src="public/Screenshot 2026-11-16 at 10.36.05 PM.png">

You can now add new contacts and list your existing contacts.

### Add Contact Page

This page allows you to add a new contact with a first name, last name, address, image URL, and description:

<img src="public/Screenshot 2026-11-16 at 10.36.14 PM.png">

### List Contacts Page

This page lists all contacts you have created. Each contact card shows the contact's information along with any notes that have been added. You can click the Edit link to modify a contact.

<img src="public/Screenshot 2026-11-16 at 10.36.25 PM.png">

### Edit Contact Page

After clicking the Edit link on a contact card, this page lets you change and save the contact's information:

<img src="public/Screenshot 2026-11-16 at 10.39.00 PM.png">