/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'ALPHA;;;H4sIAAAAAAAAA61V2Y6jOBT9lZZfE3WAsEYqadhCICH7QjKaBwcMcYWtbBNCWvn3Eamq7tJMT0+NNDyBbe49595zrr+BvMAUjVEDBt9ASfAFMtS+sqZEYACMKo4RAV0QQQbBALh2/yWYDNdsrneSsiawGltXXpuE9HC9bWcRdYPFbYokcys+gXsXlNUxxeEvAt56k+io4waW6CZlxzzY+4F47s8WLx2uM1bC5Wa65ZINf82LJ3BvI0JMcJ7Y5QlliMB0jJo5xORz8B3HqIvbGRlIM0RkP8+goZU3my6l4ja6WXbv6KWd644rHfdz8PvFc+dk02BkCKeamjl33DS27jpxFVerzkywe6FQHZ7FsbN5hU9xkqPIjVDOMGs+XXdqyj3x4mWps0/8pNLK58xnk4tqVBPLdfnDnK63+ogfJ8EngStT1qk5EuuXsH+yrJIdELMuVlGatHfsZdIcb+soWAybnfsR+Jy8a+X8X+reDPvbaYw9OcwWhzMxD9eFtrhU81tEzF3PPhnWWPTSi4W5xSfh+8pqEmRbrs+H2EmPQzaDrkXpvA6nC/foU3yobp3G9W/1D/iQVeRXKP0wIuGa4yZ6zsxtMN008qzpV8tRxWWRyM/8s+v5dOSs+SA+LqUdvJ5UeaGbauWhFd64xyQdjSz2HDneWDxUWLvwNtafHozOqHEjMODvXUBQgikjkOEib9dkvgtgdFmhkCD2qC6QpogbTjrT5/nhXJHdquEvxJq4oVTL081k16vGRVqP/XOwCZ9AF5SkCBGlKBphygrS+IhSmCAKBr8/GtVyJigrGPJwBAZAExVF0gReU5Xf6Nf6BBmFZfk1Rwx0QUyKzEdgwEiFuuBxfsgrmikPJUGxhaGh2RovqIrd1zm+Pxwast0SzF5zrnGGKINZCQa8IqqyrGmKeu/+LzBsWzAEVRaHIi+JpqHKtiwqAt8f2pzAS4b6axiqcP+jC3J0Za8ibkvf57sgxoSyTV6VaQGjd4W/b8IwLKqcrZo8NNsXRMDgwzJiDOcJbYlVOSThCV+Q2fIAgximFH3vNiIoeufyNsHMImpF6DmmpR3WGmixt4H+WpoBL/29OjlsDwM3+0JPuIZfIlIkKAddkD5+5xW5L0iKqiqSygtSG6LduH9H3iaKEIM4pWAATHd05SfqyHZ3VKa24+h2opuJDn4wfbfPqz57RVzUS1t2O56ol8MXXrk5RZbu00TKuOK62rzo+/k6yS4L++knQdqJEGcpNz35irieD88vvqVlMVG8BAmBmZLysE/29FAfKsILtH9cx8tqsg/V+SI24wYtznTLnummN8t7Qi7wh6gHPUvQk6c2W4QuOEQfk+nrRc0JXG8HVUV2siD2n9Or7shIa+hWwvQiLWYukYxjVEqFJW/K4yUt1ixYqqZzC7zAq+clFxxXc1rb+zSnE2GzOdWvxn4MlvRtoOM3z+HHZ4zRYz6+NevfevqKu1Ued+9+CPE2cP9haBmxPJJ9eznDc4z08RIypF5fvHLn7WcHNvY36ThxLE70CGeAe2uBMoUsLkjWXivZEYIuIEXV6tjN4+IXmUydc43FK+sUUqb/8MbPXM+/npqTohxBemovy6V26D+E3uhluWKQvVsN6O1j6kNw/xOk64wYkggAAA==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'tru';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'recording';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '🔗';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antimention = process.env.ANTIMENTION || 'true';
const antibot = process.env.ANTIBOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const antibad = process.env.ANTIBAD || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'my owner is unavailable text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'trul';
const voicechatbot2 = process.env.VOICECHATBOT2 || 't';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'true';



module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
