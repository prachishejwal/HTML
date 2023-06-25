// The module.exports in Node.js is used to export any literal,
//  function or object as a module. It is used to include JavaScript file into node.js applications.
exports.addition=function(a,b){
    return a+b;
}

exports.factorial=function(x){
    f=1;
    for(i=1;i<=x;i++){
        f=f*i;
    }
    return f;
}