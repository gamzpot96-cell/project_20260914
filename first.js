function fgugugu() {
            // 구구단
        for ( dan = 2; dan < 10; dan++) {
            console.log(dan + "단")
            for (i=1 ; i<10; i++)
            console.log( dan + " * " + i + "=" + dan*i)
            console.log("===")
    }
}

function fgugugu2(dan, m, j, e) {
    //구구단
    console.log(dan + "단")
    for ( i=1 ; i<10; i++ ) console.log( dan + " * " + i + "=" + dan*i)
    console.log("===")
    return "성공"
}