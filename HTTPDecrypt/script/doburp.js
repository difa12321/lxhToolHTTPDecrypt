var retval = null;
var sendback = {};
var recv_data = null;
var signature = "-to0obuooO0rp-";
var datatype = null;

function getDataType(data) {
    if(data === null){
        return 'null';
    } else if(typeof data == 'object'){
        if( typeof data.length == 'number' ){
            return 'Array';
        }else{
            return 'Object';
        }
    }else{
        return 'no object type ';
    }
}

setImmediate(function() {
    Java.perform(function() {
       console.log("In ..");
        {{scripts}}
    });
});


