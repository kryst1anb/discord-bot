## How to add a bot to your own discord channel
- You have to go to ```https://discord.com/oauth2/authorize?client_id={your bot id}&scope=bot```
- Generate TOKEN from ```https://discord.com/developers/applications/{your bot id}/bot```
- Create your own .env file that will allow you to add YOUR token

## Adding a bot to a channel or server
- Edit the index.js file
- Change the id value in guildID and channelID corresponding to server and channel
