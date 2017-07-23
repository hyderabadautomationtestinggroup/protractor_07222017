var json = require('./generated.json');

describe('Json file ',function(){
    it('all json content', function(){
        // console.log(json);
        console.log('Length of the json array is: '+json.length);
        for(var i = 0;i<json.length;i++){
            // console.log(json[i]._id);
            for(var j = 0; j<json[i].friends.length;j++){
                if(json[i].friends[j].name === 'Francisca Dillon'){
                    console.log('Francisca Dillon is a friend of: '+json[i].name);
                }
            }
        }
    });
})