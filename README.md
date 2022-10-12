## csgo-gamestate-avatar

### Ever wanted to update your steam name and avatar based on the current CS:GO map? 
*No? Well I made it anyway.*

# Getting Started

* Copy the `gamestate_integration_glennserver.cfg` file to your `Steam\SteamApps\common\Counter-Strike Global Offensive\csgo\cfg` folder
* Configure `config.js` and make sure that your twoFactorCode is set in `steam-bot.js`
* Use `npm start` to start the program 

# Config

## user
Uses `node-steamcommunity` to login to steam account through web.
```js
// Your Steam User & Password here
user: {
    name: '',
    password: ''
},
```

## defaultProfile
This is your fallback profile when the program restarts or a game ends.
```js
defaultProfile: {
    display: 'em;',
    icon: "https://stickerly.pstatic.net/sticker_pack/6zMOx6ZOhuUwbQUnmouqPw/6K55MX/3/666280f8-8cdf-4252-9997-808424028304.png"
},
```
## bombPlanted `disabled by default`
Experimental, but changes your name and avatar when the bomb is planted. 

```js
bombPlanted: {
    enabled: false,
    display: "BOMB PLANTED",
    icon: "https://i.ytimg.com/vi/lbBN96Hgdho/maxresdefault.jpg"
},
```

## map
List of maps to change name and avatar by
`id` map name to detect
`display` name to update to 
`icon` avatar that is updated

All active duty maps included by default
```js
map: [
        {
            id: "de_dust2",
            display: "Dust 2",
            icon: "https://liquipedia.net/commons/images/thumb/1/12/Csgo_dust2.0.jpg/800px-Csgo_dust2.0.jpg",
        },

        {
            id: "de_inferno",
            display: "Inferno",
            icon: "https://liquipedia.net/commons/images/thumb/2/2b/De_new_inferno.jpg/600px-De_new_inferno.jpg",
        },

        {
            id: "de_mirage",
            display: "Mirage",
            icon: "https://liquipedia.net/commons/images/thumb/f/f3/Csgo_mirage.jpg/600px-Csgo_mirage.jpg",
        },

        {
            id: "de_ancient",
            display: "Ancient",
            icon: "https://liquipedia.net/commons/images/thumb/3/35/Csgo_ancient.jpeg/600px-Csgo_ancient.jpeg",

        },

        {
            id: "de_nuke",
            display: "Nuke",
            icon: "https://liquipedia.net/commons/images/thumb/5/5e/Nuke_csgo.jpg/600px-Nuke_csgo.jpg",
        },

        {
            id: "de_vertigo",
            display: "Vertigo",
            icon: "https://liquipedia.net/commons/images/thumb/5/59/Csgo_de_vertigo_new.jpg/600px-Csgo_de_vertigo_new.jpg"
        },

        {
            id: "de_cache",
            display: "Cache",
            icon: "https://liquipedia.net/commons/images/thumb/6/60/CSGO_Cache_2019_rework.jpg/600px-CSGO_Cache_2019_rework.jpg"
        },

        {
            id: "de_train",
            display: "Train",
            icon: "https://liquipedia.net/commons/images/thumb/5/56/Train_csgo.jpg/600px-Train_csgo.jpg"
        },

        {
            id: "de_office",
            display: "Office",
            icon: "https://liquipedia.net/commons/images/7/78/Csgo_office.jpg"
        }


    ]
```

## Credit to Authors
* https://github.com/DoctorMcKay/node-steamcommunity (interacting with steam-web)
* https://github.com/glenndehaan/csgo-gamestate (csgo live server)





