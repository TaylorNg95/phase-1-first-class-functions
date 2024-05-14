function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return function samplefn(){
        return 'Hello World!';
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'Hello World!';
    }
}