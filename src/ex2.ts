function doSome() {

}


export class EX2 {


    constructor() {
    }

    doSome1() {
        doSome();
        doSome();
/*
        This comment breaks the source map
        doSome();
        doSome();
        doSome();
*/
        console.log("DEBUG!")
        doSome();
        doSome();
        doSome();
        doSome();
        doSome();
    }

}
