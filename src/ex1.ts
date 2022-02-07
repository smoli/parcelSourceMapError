function doSome() {
    return new Promise(res => {
        setTimeout(res, 1)
    });
}


export class EX1 {


    constructor() {
    }

    async doSome1() {
        await doSome();
        await doSome();
/*
        This comment breaks the source map
        await doSome();
        await doSome();
        await doSome();
*/
        console.log("DEBUG!")
        alert("You clicked!")
        await doSome();
        await doSome();
        await doSome();
        await doSome();
        await doSome();
    }

}