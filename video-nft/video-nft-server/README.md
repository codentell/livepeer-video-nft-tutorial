
Step 1. Installation
`yarn install`
or 
`npm install`

Step 2. How to run the node server 
`yarn start`
or 
`npm start`


Create heroku account, install CLI
Go to https://www.heroku.com/ and register.

After completing the registration process, login and go to https://dashboard.heroku.com/apps

Before Proceeding any further, make sure you have installed the latest version of Git.


Go to Getting Started on Heroku with Node.js and download the Heroku Cli for your system.

You can check if Heroku CLI is successfully installed or not by typing the command

`heroku -v`

Type 
`heroku login`

heroku create -a gm-livepeer-xyz
heroku git:remote -a gm-livepeer-xyz
Heroku deploy: git subtree push --prefix backend heroku main
