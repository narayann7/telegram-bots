# Steps to host your Telegram bot
## Heroku:

- [ ] Create a Telegram bot with Telegraf API.
- [ ] Create account on [Heroku](http://heroku.com/).
- [ ] Install [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).
- [ ] Install and [setup git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- [ ] Add **micro-bot** to the project
    ```bash
    npm i micro-bot 
    ```
- [ ] Remove Telegraf dependency from **package.json**.
- [ ] set the start command in **package.json**:
    ```javascript
    ...
    "main": "index.js",
    "scripts": {
    "start": "micro-bot"
    }
    ...
    ```
- [ ] Make changes in the code.
    - [ ] Change the telegraf import to:
        ```javascript
        const { Composer } = require('micro-bot')
        ```
    - [ ] Create bot from **Composer:**
        ```javascript
        const bot = new Composer()
        ```
    - [ ] Finally remove bot.launch() line instead use:
        ```javascript
        module.exports = bot
        ```
- [ ] Init a new git repo:
    ```bash
    git init
    ```
- [ ] make **.gitignore** file with following content:
    ```
    node_modules
    .env
    ```
- [ ] Login to Heroku:
    ```bash
    heroku login
    ```
- [ ] Create a Heroku app:
    ```bash
    heroku create
    ```
- [ ] After creating a Heroku app
```bash
Creating app... done, ⬢ ex-example-10101
https://ex-example-10101.herokuapp.com/ | https://git.heroku.com/ex-example-10101.git
```
here AppId = ex-example-10101,<br>
       BOT_DOMAIN = 'https://ex-example-10101.herokuapp.com/', <br>
       BOT_TOKEN , the token will get when you will create bot using bot_father <br>


- [ ] Update Heroku config
    ```bash
    heroku config:set --app AppId BOT_TOKEN='YOUR BOT TOKEN'
    heroku config:set --app AppId BOT_DOMAIN='https://AppId.herokuapp.com'
    ```
- [ ] Create a **Procfile** in the root of the project with the following content:
    ```
    web: micro-bot -p $PORT
    ```
- [ ] Finally use git to deploy:
    ```bash
    git add .
    git commit -m 'commit message'
    git push heroku master
    ```

- [ ] How to make changes and redeploy the code:
 - [ ] Just save all changes.
 - [ ] Run following commands:
    ```bash
    git add .
    git commit -m 'commit message'
    git push heroku master
    ```
- [ ] How to see log of heroku , just run following command:
```bash
heroku logs --tail 
```

- [ ] How to turn on / off bot in heroku: 
    - [ ] For turning OFF:
        ```bash
       heroku maintenance:on
        ```
    - [ ] For turning ON:
        ```bash
       heroku maintenance:off   
       ```



