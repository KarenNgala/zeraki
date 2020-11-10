// function to return the number of different ways the mouse can jump from the beginning of the river to the end of the river



// If the mouse can jump 1 or 2 meters, there is:
// only one way to jump a one meter river(no stones)
// two ways to jump a two meter river(one stone) -> jump 2 one meter hops OR jump 1 two meter hops
// three ways to jump a four meter river(three stone) -> jump 2 two meter hops OR jump 4 one meter hops OR combination of 2-one meter and 1-one meter hops


function ways_to_jump(width_of_river) {
    let remainder = width_of_river % 2
    let count = 1 // every width of the river guarantees a series of 1m jumps
    let max_2m_jumps = Math.trunc(width_of_river / 2)

    if (width_of_river === 1) {
        count // no stones to jump through
    } else if (max_2m_jumps > 3) {
        if (remainder === 0) {
            count += (max_2m_jumps + 2) // series of complete 2m jumps
        } else {
            count += (max_2m_jumps + 1) // series of alternating 2m and 1m hops to complete the distance
        }
    } else {
        count += max_2m_jumps
    }

    console.log(`There are ${count} ways to jump over the river`)
    return count
}

ways_to_jump(21)