// function to reverse string in groups of four

function reverse_string(str) {
    let result = ""
    let parts = str.match(/.{1,4}/g)

    for (let i = 0; i < parts.length; i++) {
        let reversed = parts[i].split("").reverse().join("")
        result += reversed
    }

    console.log(result)
    return result
}

reverse_string("Lorem at")