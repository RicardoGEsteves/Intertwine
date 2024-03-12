# Intertwine

> **(UPDATE)** - with the latest dependencies updates, you will have to do some small config changes.

`This is an instant messaging and VoIP social platform which allows communication through voice calls, video calls, text messaging, and media and files. Communication can be private or take place in virtual communities called "servers".`

## Themes and Features

### Demo Images

#### Themes

> - Dark Mode
>   <img src="/public/demo-images/textChannels.png"/>
>
> - Light Mode
>   <img src="/public/demo-images/lightMode.png"/>

#### Features

> - Video Channels
>   <img src="/public/demo-images/videoChannels.png"/>
> - Voice Channels
>   <img src="/public/demo-images/voiceChannels.png"/>
> - Text Channels
>   <img src="/public/demo-images/textChannels.png"/>
>
> - Video Calls/Screen Sharing/Chat/Conference
>   <img src="/public/demo-images/videoConference.png"/>
>
> - Shortcut Keys for server navigation
>   <img src="/public/demo-images/shortcutSearch.png"/>
>
> - Upload and share files
>   <img src="/public/demo-images/uploadFiles.png"/>
>
> - Customization and other settings
>   <img src="/public/demo-images/dropdownNav.png"/>

#### Other Features

> - Real-time updates
> - Authentication
> - Instant Messaging
> - Media and Files
> - Servers
> - Channels
> - Roles
> - Permissions
> - Emojis
> - Reactions
> - Mentions
> - Search
> - User Profiles
> - User Settings
> - Server Settings
> - Server Invites
> - Server Bans
> - Server Members
> - Server Roles
> - Server Channels
> - Server Emojis
> - Server Integrations
> - Server Moderation
> - Server Verification

##

## Tech Stack

> React, Next.js, TypeScript, TailwindCSS, Shadcn-iu, Socket.io, Clerk, Prisma, PostgreSQL, Supabase, LiveKit, Tanstack/react-query, Uploadthing/react, Axios, Zod, Zustand

##

#### Install packages

```bash
npm install
```

##

#### Setup .env file

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=

NEXT_PUBLIC_SITE_URL=
```

##

#### Setup Prisma

```bash
npx prisma init
npx prisma generate
npx prisma db push

npm i @prisma/client
npx prisma studio
```

##

#### Setup Supabase

> - Create a new project on [Supabase](https://supabase.io/)
>
> - Add your Supabase URL to the .env file
> - Add your Supabase public key to the .env file

##

#### Setup Clerk

> - Create a new project on [Clerk](https://clerk.dev/)
> - Create a new user pool on [Clerk](https://clerk.dev/)
> - Create a new user on [Clerk](https://clerk.dev/)
>
> - Add your Clerk public key to the .env file
> - Add your Clerk secret key to the .env file
> - Add your Clerk sign in URL to the .env file
> - Add your Clerk sign up URL to the .env file
> - Add your Clerk after sign in URL to the .env file
> - Add your Clerk after sign up URL to the .env file

##

#### Setup Uploadthing

> - Create a new project on [Uploadthing](https://uploadthingy.com/)
> - Create a new app on [Uploadthing](https://uploadthingy.com/)
> - Create a new secret on [Uploadthing](https://uploadthingy.com/)
>
> - Add your Uploadthing secret to the .env file
> - Add your Uploadthing app id to the .env file

##

#### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
