// function to return missing integer

function missing_integer(arr) {
    let missing = 0
    arr.sort(function(a, b) {
        return a - b;
    })

    for (let i = 0; i < arr.length; i++) {
        missing++
        if (arr[i] != missing) {
            console.log(missing)
            return (missing)
        }
    }
}

missing_integer([3, 5, 4, 1])