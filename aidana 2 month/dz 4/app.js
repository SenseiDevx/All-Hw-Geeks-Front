let arr = [null, 123, undefined, null, "qwerty", "hgcjycykvykg", 34, 65, undefined, null, null, 43, "aerg", "йцукен", null, 'uioo' ]

let groupArr = {}

arr.forEach((val) => {
    let type= typeof  val
    if (type === 'object' && !val) {
        type = 'null'
    }if (!groupArr[type]){
        groupArr[type] = []
    }
    groupArr[type].push(val)
})

let sortArr = Object.values(groupArr).sort((a, b) => b.length)

console.log(sortArr)

