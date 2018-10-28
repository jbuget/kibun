#!/bin/bash

npm install
echo DATABASE_URL="postgres://postgres:mysecretpassword@localhost:5432/kibun" > db/.env
cd db
npm run migrate
cd ..
npm run dev