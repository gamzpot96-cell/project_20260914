function fungusip() {
    for ( dan = 11; dan < 20; dan++) {
        console.log(dan + "단")
        for (i=1; i<10; i++)
        console.log( dan + " * " + i + "=" + dan*i)
        console.log("===")
    }
}

function funguchil(dan, m, j) {
    console.log(dan + "단")
    for (i=1; i<10; i++) console.log( dan + " * " + i + "=" + dan*i )
    console.log("===")
    return "성공"
}