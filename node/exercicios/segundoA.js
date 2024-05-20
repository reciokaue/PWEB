console.log(1)
func()
console.log(3)

function func(){
    setTimeout(() => {
        console.log(2)
    }, 10)
}