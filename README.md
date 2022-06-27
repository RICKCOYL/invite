# Invitation App

## Front End built with react and material ui

To Access the frontend 

```
$ git clone https://github.com/RICKCOYL/invite.git
$ cd invite
$ cd client
$ npm install
$ npm run start
```

And the app should open on http://localhost:3006/ automatically


## Backend End built with Rails

To access the backend run the following commands

```
$ git clone https://github.com/RICKCOYL/invite.git
$ cd invite
$ cd server
$ bundle install
$ rails db:create
$ rails db:migrate
$ bundle exec figaro install
```

### Now open up server folder and open the config/application.yml here will setup enviroment variablles for the app

```yaml
# config/application.yml

gmail_username: 
gmail_password: 

```

### For the `gmail_username` please assign your gmail email address

### For the `gmail_password` we will have to generate it from our gmail dashboard. Please follow the instructions below in order

- Log in into your gmail account
- At the top right click your image or avatar and click on `Manage your Google account`
- On the left navigation click on `Security`
- Scroll down and look for `Signing in to Google` please make sure  2 step verification is checked blue or turn on as indicated in the image below

![screenshot1](./images/google%20signin.png)

- Click on `App Passwords` you might be prompted to verify your email. please do so! and you will directed to a page similar to one shown below


![screenshot1](./images/app%20password.png)

- Next select `App` and choose `Mail`
- Next select `select device` and choose `other(custom name)`
- Next you will be given an input where you will add a custom name example `Rails app` add  the name and click `Generate`
- Finally you will be prompted with a 16 digit password copy it and paste it into your `gmail_password`


### Your application.yml should look something like this


```yaml
# config/application.yml

gmail_username: <YourPersonalEmail@gmail.com>
gmail_password: <And Password Generated from Gmail.com>

```

- ### Now ``` rails s``` and enjoy the app







