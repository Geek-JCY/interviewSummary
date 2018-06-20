const fn1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(111)
            resolve()
        }, 100);
    })
}

const fn2 = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(222)
            resolve()
        }, 300);
    })
}

const fn3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(333)
            resolve()
        }, 200);
    })
}

const fn4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(444)
            resolve()
        }, 50);
    })
}

fn1()
.then(fn2)
.then(fn3)
.then(fn4)







