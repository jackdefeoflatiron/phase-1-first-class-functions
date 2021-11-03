function receivesAFunction(callback){
        callback()
};

function returnsANamedFunction(){
    const aNamedFunction = (x) => x 
    return aNamedFunction
}
function  returnsAnAnonymousFunction(){
    const anonymousFunction =() => '';
    return ()=> ''
}