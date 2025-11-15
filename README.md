# all you need:

local setup:
- node
- npm
- turbo

steps to run locally:

in root folder of home app:
- create .env file
- copy and paste, local URL vars:

NEXT_PUBLIC_ASTRO_URL="http://localhost:3001"
NEXT_PUBLIC_ASTRONOMICAL_URL="http://localhost:3002"

in root dir of repo:
- npm i
- turbo run dev

go to:
- localhost:3000

for more info about turbo-repo: https://turborepo.com/
