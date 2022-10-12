const SteamCommunity = require('steamcommunity');
const config = require('./config');

let community = new SteamCommunity();

function editProfileName(name) {
    community.editProfile({
        name: name
    })
}

function editProfileAvatar(avatar) {
    community.uploadAvatar(avatar, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Updated avatar profile to " + avatar)
        }
    })
}

// Set in config.js
community.login({
    accountName: config.user.name,
    password: config.user.password,
    twoFactorCode: "" // Make sure to set this before starting if you have 2FA Enabled
}, (err, details) => {
    if (err) {
        console.log(err);
    }

    if (details) {
        console.log(details)
        console.log("[INFO] Setting player details back to config default")
        editProfileName(config.defaultProfile.display)
        editProfileAvatar(config.defaultProfile.icon)
    }
});



module.exports = { community }