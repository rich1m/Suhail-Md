const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1441cfb65678dc21d6e5b.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254705529658" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705529658";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/bf82271be590fbe4ec07e.mp4" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_48_04_14_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0o1OXl0ZXpQNHJMNWV3WHNOUWt0cDRhWHhOLzRIclFWK1d2djNLeVBXcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlkvR0pTMkliRWZpcnl4YkpDTzZrelZWc1Y4RlZUZ0tmY3VUQ0E5TDFTbkE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUZqSG1pREJzck5ZNmRnU0REdCtZNFpWNUJuWnN1Sk5vM2VpYkFGbFdtST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlltZExDODI2N1k1MkdKRW5jUEpVNWU5SGowdW0vRWtmenU5cm5jclMwejA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWU1jd0RiYTY4YUliNDFlbnB6QXJ4QSsvbGRuelZKWjREUjNXdnNENVlrRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJPMmN4TlFwZkh2bkdaQUh2YlcrVjZqVnpsM0Z4ai9IS2tWK3VPSUJLU2c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4TXZWM2JNR01CRU9wdC9yeW11QVRRcUFYK0RZYTF5R0E5S1dJbFhWM0ZvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSmFkQ0lsWnQzdnNxd3dvMDZ1K25ERUdyNTMyL3FRcklwSHpBUXpFbFVnST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJvS3ZhWS9aNnJUK0VraDlNdXZOcnRhNHJIUHlEVXdwNlFzOWlFNDd0c29wS0g2M3pNS1J1TGNhbG56ME9zUWkwSGNEVW9NdXFmYkJhOFJGdFI1YWloZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6ODIsXCJhZHZTZWNyZXRLZXlcIjpcIitNemlZSE5zSWRSNmR1RSt6cTI2Wk9raWF5MTQ2aUhGUmxLTkh1RytzRVU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCI0T2RZLUc2N1JOV2YyVExDOGpJLWp3XCIsXCJwaG9uZUlkXCI6XCJhNjFlOGEzYS1iZTVhLTQ5MjAtYmQ1Zi0wMDVjNmUzOGY0YjlcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkdzVWtZaHhRU2lzYjA0eXEwazB0YzBiS2hNWT1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTTQ0RGZRQnMvSjM4bmJ4U3UxVFo2TGtzbTJvPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNQS3Y1ZUVIRUttVTdyQUdHQVFnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiVy9TUDd5RU1BUEg1Z2p0eThKbDVqS0NNRFIzaWExLzM1bFR4QkoxUTVSOD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkdYNjZvRWVLWDNRUE9sOXFGTU9RaGpJYWlQRk5zNlg1bVYzVWVyNEthQWpaMDNTajd4M3FwMXU2dGRUaTJBVGtNZG5FdzV1UngyVEsvdFFpV1N2R0J3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiZmtUamIxN1VmZmFxNWVaOE5PK0pLYjAwb1ZYNGJ6UTFSaytMZSt4WkltZXc5eEJjeVg3b05OekNJRmx0VklXUG9rb1MvTUZLRXJMYllzMWN2ODdQaFE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NDcwNTUyOTY1ODo5NkBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMjExMjY3MDEyNzMxMzM6OTZAbGlkXCIsXCJuYW1lXCI6XCIsXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0NzA1NTI5NjU4Ojk2QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlZ2MGorOGhEQUR4K1lJN2N2Q1plWXlnakEwZDRtdGY5K1pVOFFTZFVPVWZcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEzMDgwODc2LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQVBVbFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBVay5qc29uIjogIntcImtleURhdGFcIjpcIkVkNHJNR3RBNUtrL0FLY0FPWHBaMVBtZE9vVTcrSDMyWDBES0FGSXpQVTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4NDEzMjg1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEzMDc5ODI3ODMxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFVsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGVzdElneUlNSkNRVXpHbGRndWljUmpVVVJQWlJEY3phLytpeFhTWEtXYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDg0MTMyODUwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMwODA3MjczNzVcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".,",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©Hacker" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hacker 』```", //*『sᴜʙsᴄʀɪʙᴇ • Hacker』*\n youtube.com/@Hacker"),
 
  author : process.env.PACK_AUTHER|| "Hacker",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Hacker",
  ownername:process.env.OWNER_NAME|| "It'x Hacker",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
