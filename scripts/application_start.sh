#!/bin/sh

chmod -R 777 /home/ec2-user/express-app
#navigate into our working directory.
cd /home/ec2-user/express-app

#install module

npm install

node app.js > app.out.log 2> app.err.log < /dev/null &