const Discord = require("discord.js");
const myid = ['762738292058751016'];// ID Your account
const prefix = ['14']

const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const client50 = new Discord.Client();
const prefixx50 = ['prefix bot help spam'];/// دا برفاكس بوت الهيلم بتاع الاسبام

client50.login("NzYyNzM4MjkyMDU4NzUxMDE2.X3xKwg.eWPfUCYlxtD7K3xThU9wlhXdSF0");// هنا توكين بوتك دسكورد مش حساب الهيلب بتاع الاسبام
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


client.login("NzYyNzM4MjkyMDU4NzUxMDE2.X3xKwg.eWPfUCYlxtD7K3xThU9wlhXdSF0");// 1 token bot

client2.login("NzYzMDIyMzU3MDAyMDU5Nzg2.X3xqRw.IJ_f-zkyZUgm6Y1hzzkyGN4r0p0");// 2 token bot

client3.login("NzYzMDIwNjYzMzgzMzkyMjU2.X3xpLg.5NB1zirn1LRhUpOVVtTiqMP7Qd4");// 3 token bot

client4.login("zYzMDIxOTM5NjE0Njc5MDYz.X3xpsQ.-DguENuh8cx_C3Ga_5-0ysM8R6U");// 4 token bot

client5.login("");// 5 token bot

client6.login("");// 6 token bot


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
client.on('message', message => {
  if (message.content === prefix+'d1') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c1'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p1') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s1')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === prefix+'d2') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c2'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p2') {
message.channel.send('#profile')
  }
   if(message.content === prefix+'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s2')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === prefix+'d3') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c3'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p3') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s3')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === prefix+'d4') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c4'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p4') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s4')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === prefix+'d5') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c5'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p5') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s5')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === prefix+'d6') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c6'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p6') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s6')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
client.on('message', message => {
if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }

});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client2.on('message', message => {
if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }

});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client3.on('message', message => {
if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }

});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client4.on('message', message => {
if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }

});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client5.on('message', message => {
if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }

});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//POULAZ

client6.on('message', message => {
if (message.content === prefix + 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`** --> **[ " ${x} " ]** <-- **`)
          .then(m => {
            count++;
          })
          
        }
      }

});


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

client.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(5);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 5);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 4000);
}
});

client2.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(5);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 5);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 4000);
}
});

client3.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(5);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 5);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 4000);
}
});

client4.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(5);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 5);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 4000);
}
});

client5.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(5);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 5);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 4000);
}
});

client6.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(5);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 5);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 4000);
}
});


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

client.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("انا ماشي سلام")
  }
})
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
client50.on('message', message => {
  var helplist = `**اوامر الاسبام
${prefix}spam دا الامر علشان تعمل الاسبام السريع
${prefix}slow دا الامر علشان تعمل الاسبام البطيق
${prefix}stop 🛑و دا الامر لو عايز توقف الاسبام
اوامر الكريدت
${prefix}c دا الامر علشان تشوف البوت مع كام كريدت
تحذير كل بوت بي الرقم بتاعو مثلن ${prefix}c1 دا لي بوت رقم 1 ⚠ ️️️️️
${prefix}d دا الامر علشان البوت يسحب كريدت من بروبوت
تحذير كل بوت بي الرقم بتاعو مثلن ${prefix}d1 دا لي بوت رقم 1 ⚠ ️️️️️
${prefix}r دا الامر علشان تاخود الريب من البوت بس لازم تكون حاتت الايدي بتاع حسابك في اول البرجكت
{prefix} p دا الامر علشان تشوف البروفايل بتاع البوت
تحذير كل بوت بي الرقم بتاعو مثلن ${prefix}p1 دا لي بوت رقم ⚠
${prefix}s دا الامر علشان البوت يكتب الي انت هتكتبو و الامر الي هيخليك تسحب الكريدت
علشان تسحب الكريدت اكتب ${prefix}s1 #credits و منشن نفسك و شوف عايز تحول كام كريدت
و نفس الامر بتاع الرقم الي بيجبهولك بروبوت ${prefix}s1 و شوف الرقم اية
تحذير كل بوت بي الرقم بتاعو مثلن ${prefix}s1 1 دا لي بوت رقم ⚠
السيرفر دا في بوت حلو اوي معنة البوت دا هوة اب تايم لي جليتش لو عايز تشغل بوتك 24 ساعة خش السيرفر دا و استخدم البوت
https://cdn.probot.io/exh0PtVpVH.png
https://discord.gg/qs95hQm :wave:
**`
  if(message.content === prefixx50 + 'help') {
            message.delete(1000)
    let e = '** جاري الارســال .. :envelope_with_arrow: **'
	  message.reply(e).then(m => m.delete(1000))
	  message.author.send(helplist).catch(error => message.reply('** لم اتمكن من الارسال الاوامر لك , يرجي فتح خاصك :negative_squared_cross_mark:**'))
}
});

client50.on("ready", () => {
console.log(`${client.guilds.size} Servers`);
  console.log(`${client.users.size} Members`);
   console.log(`${client.channels.size} Channels`);
  console.log(`[ ${client.guilds.map(g => g.name).join(", \n ")} ]`);
  client50.user.setActivity(`${prefixx50}help | SPAM`);
});