let matrix = 
[   ["B", "L", "D", "T", "W", "C", "F", "M"],
    ["N", "B", "L"],
    ["J", "C", "H", "T", "L", "V"],
    ["S", "P", "J", "W"],
    ["Z", "S", "C", "F", "T", "L", "R"],
    ["W", "D", "G", "B", "H", "N", "Z"],
    ["F", "M", "S", "P", "V", "G", "C", "N"],
    ["W", "Q", "R", "J", "F", "V", "C", "Z"],
    ["R", "P", "M", "L", "H"]
]

// console.log(matrix)

let raw = `move 5 from 3 to 6
move 2 from 2 to 5
move 1 from 9 to 1
move 1 from 3 to 1
move 5 from 7 to 5
move 2 from 9 to 8
move 1 from 2 to 8
move 1 from 4 to 2
move 8 from 1 to 6
move 4 from 6 to 9
move 1 from 2 to 1
move 2 from 4 to 8
move 2 from 8 to 4
move 3 from 7 to 5
move 6 from 5 to 3
move 1 from 1 to 8
move 1 from 5 to 7
move 5 from 6 to 9
move 3 from 5 to 8
move 2 from 4 to 3
move 1 from 7 to 8
move 2 from 8 to 6
move 2 from 1 to 8
move 8 from 3 to 8
move 11 from 6 to 3
move 1 from 4 to 7
move 1 from 3 to 7
move 2 from 6 to 1
move 7 from 9 to 7
move 10 from 3 to 5
move 1 from 9 to 3
move 2 from 9 to 5
move 5 from 5 to 2
move 19 from 8 to 6
move 1 from 9 to 6
move 1 from 3 to 8
move 4 from 2 to 6
move 1 from 1 to 4
move 5 from 8 to 9
move 1 from 2 to 1
move 6 from 7 to 2
move 3 from 5 to 8
move 3 from 8 to 1
move 2 from 9 to 6
move 1 from 7 to 8
move 6 from 2 to 7
move 1 from 4 to 8
move 3 from 8 to 4
move 2 from 1 to 5
move 7 from 7 to 6
move 1 from 7 to 2
move 3 from 4 to 6
move 2 from 9 to 2
move 1 from 1 to 8
move 2 from 1 to 3
move 1 from 8 to 7
move 3 from 2 to 5
move 5 from 5 to 8
move 4 from 5 to 3
move 1 from 7 to 8
move 2 from 8 to 1
move 1 from 8 to 5
move 5 from 3 to 5
move 13 from 5 to 1
move 1 from 3 to 4
move 2 from 8 to 3
move 3 from 1 to 4
move 1 from 3 to 1
move 1 from 8 to 1
move 5 from 1 to 9
move 1 from 3 to 7
move 2 from 9 to 6
move 2 from 1 to 7
move 3 from 1 to 5
move 3 from 1 to 5
move 1 from 6 to 1
move 4 from 4 to 3
move 3 from 9 to 1
move 5 from 1 to 7
move 7 from 7 to 8
move 1 from 3 to 9
move 28 from 6 to 8
move 5 from 5 to 9
move 6 from 6 to 1
move 4 from 1 to 8
move 5 from 9 to 1
move 12 from 8 to 7
move 1 from 3 to 8
move 6 from 1 to 4
move 5 from 4 to 1
move 3 from 6 to 4
move 2 from 3 to 4
move 3 from 1 to 5
move 6 from 7 to 1
move 2 from 4 to 9
move 2 from 5 to 4
move 19 from 8 to 1
move 4 from 9 to 5
move 5 from 4 to 3
move 4 from 1 to 4
move 5 from 5 to 1
move 3 from 8 to 5
move 7 from 7 to 3
move 14 from 1 to 8
move 5 from 4 to 2
move 12 from 8 to 7
move 1 from 3 to 6
move 3 from 5 to 9
move 1 from 7 to 8
move 8 from 1 to 2
move 5 from 1 to 2
move 9 from 3 to 4
move 8 from 4 to 6
move 2 from 1 to 9
move 3 from 6 to 1
move 5 from 6 to 7
move 14 from 7 to 1
move 1 from 4 to 7
move 6 from 8 to 2
move 14 from 1 to 4
move 13 from 4 to 9
move 2 from 3 to 5
move 3 from 1 to 7
move 1 from 8 to 4
move 1 from 4 to 1
move 1 from 1 to 3
move 1 from 3 to 4
move 1 from 4 to 1
move 1 from 6 to 9
move 1 from 7 to 6
move 1 from 4 to 5
move 11 from 9 to 3
move 6 from 3 to 8
move 5 from 3 to 1
move 2 from 8 to 4
move 1 from 6 to 2
move 7 from 9 to 2
move 1 from 7 to 2
move 1 from 9 to 8
move 2 from 8 to 6
move 30 from 2 to 3
move 2 from 7 to 2
move 2 from 8 to 2
move 3 from 8 to 7
move 6 from 2 to 5
move 1 from 2 to 5
move 3 from 1 to 8
move 2 from 6 to 7
move 1 from 1 to 9
move 1 from 9 to 3
move 7 from 3 to 1
move 6 from 7 to 8
move 8 from 3 to 9
move 7 from 9 to 1
move 1 from 5 to 8
move 7 from 5 to 9
move 2 from 4 to 2
move 11 from 3 to 6
move 2 from 2 to 7
move 11 from 1 to 8
move 2 from 5 to 4
move 11 from 6 to 4
move 12 from 4 to 9
move 4 from 1 to 5
move 3 from 7 to 9
move 12 from 8 to 4
move 1 from 1 to 7
move 6 from 8 to 3
move 2 from 3 to 5
move 3 from 8 to 4
move 3 from 3 to 7
move 9 from 9 to 7
move 5 from 3 to 9
move 1 from 3 to 2
move 13 from 7 to 5
move 1 from 2 to 6
move 1 from 6 to 1
move 1 from 1 to 6
move 16 from 4 to 5
move 1 from 5 to 6
move 16 from 5 to 4
move 13 from 4 to 5
move 3 from 4 to 2
move 1 from 6 to 7
move 3 from 2 to 1
move 8 from 5 to 2
move 3 from 1 to 4
move 1 from 7 to 9
move 14 from 5 to 1
move 10 from 1 to 5
move 1 from 2 to 8
move 19 from 9 to 1
move 1 from 9 to 1
move 6 from 2 to 7
move 4 from 1 to 7
move 1 from 8 to 6
move 16 from 5 to 3
move 1 from 5 to 4
move 2 from 5 to 2
move 1 from 5 to 6
move 1 from 6 to 5
move 1 from 2 to 4
move 7 from 7 to 2
move 4 from 4 to 7
move 2 from 6 to 2
move 8 from 2 to 9
move 4 from 9 to 2
move 16 from 3 to 7
move 4 from 9 to 7
move 14 from 1 to 3
move 26 from 7 to 8
move 1 from 5 to 4
move 20 from 8 to 4
move 5 from 1 to 8
move 2 from 4 to 6
move 4 from 3 to 2
move 1 from 6 to 5
move 8 from 2 to 4
move 1 from 6 to 5
move 1 from 7 to 8
move 8 from 3 to 1
move 6 from 1 to 9
move 1 from 3 to 6
move 14 from 4 to 1
move 1 from 3 to 8
move 2 from 2 to 1
move 1 from 6 to 8
move 1 from 2 to 8
move 5 from 8 to 1
move 2 from 1 to 6
move 2 from 5 to 9
move 1 from 6 to 3
move 1 from 6 to 1
move 5 from 9 to 2
move 5 from 4 to 1
move 5 from 4 to 2
move 16 from 1 to 8
move 9 from 1 to 4
move 24 from 8 to 6
move 1 from 8 to 7
move 7 from 6 to 5
move 1 from 3 to 4
move 3 from 1 to 8
move 3 from 5 to 8
move 10 from 4 to 8
move 3 from 4 to 6
move 1 from 7 to 4
move 20 from 6 to 7
move 1 from 4 to 9
move 1 from 4 to 9
move 7 from 2 to 3
move 13 from 8 to 9
move 4 from 5 to 9
move 4 from 8 to 5
move 18 from 9 to 2
move 14 from 7 to 5
move 6 from 3 to 8
move 1 from 3 to 2
move 1 from 8 to 6
move 4 from 8 to 2
move 1 from 2 to 3
move 17 from 5 to 3
move 18 from 3 to 5
move 6 from 7 to 2
move 3 from 9 to 7
move 1 from 8 to 6
move 5 from 2 to 5
move 26 from 2 to 7
move 1 from 6 to 9
move 29 from 7 to 9
move 15 from 5 to 2
move 1 from 6 to 7
move 8 from 9 to 2
move 14 from 2 to 6
move 16 from 9 to 1
move 6 from 9 to 1
move 1 from 7 to 1
move 3 from 2 to 1
move 5 from 2 to 6
move 15 from 1 to 4
move 1 from 2 to 8
move 1 from 9 to 7
move 1 from 8 to 6
move 19 from 6 to 7
move 10 from 1 to 8
move 4 from 8 to 3
move 1 from 7 to 5
move 3 from 5 to 3
move 13 from 7 to 6
move 2 from 8 to 9
move 7 from 3 to 6
move 5 from 5 to 3
move 1 from 1 to 6
move 2 from 5 to 1
move 4 from 4 to 8
move 7 from 8 to 7
move 8 from 7 to 3
move 1 from 8 to 4
move 2 from 9 to 2
move 8 from 6 to 5
move 1 from 4 to 5
move 4 from 5 to 4
move 2 from 2 to 8
move 9 from 4 to 5
move 2 from 1 to 9
move 2 from 8 to 9
move 14 from 6 to 4
move 5 from 3 to 4
move 3 from 9 to 7
move 3 from 5 to 3
move 2 from 4 to 8
move 2 from 4 to 7
move 2 from 8 to 9
move 4 from 5 to 8
move 16 from 4 to 6
move 1 from 9 to 6
move 3 from 7 to 5
move 7 from 7 to 5
move 10 from 5 to 1
move 6 from 3 to 8
move 2 from 9 to 3
move 3 from 6 to 9
move 3 from 3 to 6
move 2 from 1 to 7
move 13 from 6 to 2
move 2 from 4 to 5
move 2 from 7 to 6
move 2 from 6 to 7
move 2 from 4 to 1
move 3 from 9 to 5
move 1 from 1 to 4
move 3 from 2 to 5
move 2 from 4 to 1
move 2 from 3 to 2
move 5 from 8 to 5
move 1 from 7 to 2
move 1 from 7 to 1
move 1 from 3 to 5
move 1 from 8 to 7
move 1 from 6 to 7
move 1 from 3 to 5
move 12 from 5 to 6
move 6 from 6 to 2
move 1 from 7 to 4
move 1 from 5 to 7
move 2 from 8 to 9
move 1 from 9 to 6
move 1 from 8 to 9
move 5 from 6 to 9
move 1 from 8 to 1
move 14 from 2 to 4
move 1 from 7 to 1
move 1 from 7 to 2
move 3 from 2 to 3
move 2 from 3 to 4
move 1 from 2 to 4
move 4 from 6 to 2
move 8 from 5 to 8
move 15 from 4 to 8
move 3 from 4 to 8
move 7 from 8 to 4
move 6 from 1 to 3
move 1 from 6 to 1
move 5 from 4 to 8
move 7 from 9 to 1
move 1 from 5 to 6
move 4 from 2 to 6
move 10 from 1 to 8
move 29 from 8 to 3
move 1 from 4 to 5
move 1 from 4 to 6
move 6 from 1 to 4
move 1 from 5 to 8
move 3 from 4 to 2
move 27 from 3 to 7
move 18 from 7 to 9
move 5 from 6 to 3
move 7 from 7 to 4
move 1 from 7 to 8
move 9 from 3 to 5
move 5 from 3 to 6
move 3 from 4 to 2
move 1 from 7 to 2
move 2 from 8 to 4
move 2 from 8 to 6
move 2 from 8 to 6
move 8 from 2 to 1
move 7 from 5 to 4
move 1 from 8 to 9
move 4 from 1 to 5
move 1 from 2 to 9
move 8 from 6 to 3
move 3 from 1 to 8
move 1 from 1 to 7
move 8 from 3 to 6
move 2 from 8 to 3
move 1 from 3 to 6
move 4 from 6 to 7
move 16 from 4 to 2
move 1 from 3 to 5
move 2 from 6 to 4
move 1 from 2 to 3
move 2 from 7 to 3
move 2 from 7 to 8
move 3 from 6 to 7
move 4 from 5 to 2
move 2 from 4 to 2
move 4 from 9 to 8
move 3 from 5 to 1
move 3 from 1 to 6
move 6 from 9 to 1
move 4 from 7 to 9
move 8 from 9 to 5
move 4 from 5 to 2
move 7 from 8 to 6
move 11 from 6 to 8
move 4 from 1 to 2
move 3 from 8 to 9
move 5 from 8 to 7
move 2 from 1 to 6
move 4 from 5 to 6
move 2 from 7 to 9
move 2 from 7 to 3
move 5 from 6 to 2
move 4 from 3 to 1
move 1 from 7 to 2
move 1 from 3 to 2
move 2 from 6 to 7
move 1 from 1 to 6
move 6 from 9 to 6
move 1 from 7 to 6
move 1 from 7 to 6
move 2 from 1 to 7
move 2 from 8 to 6
move 4 from 9 to 2
move 17 from 2 to 6
move 1 from 9 to 4
move 1 from 1 to 3
move 1 from 4 to 1
move 20 from 2 to 8
move 2 from 7 to 6
move 2 from 2 to 5
move 1 from 3 to 1
move 1 from 2 to 5
move 6 from 8 to 6
move 2 from 5 to 6
move 3 from 6 to 4
move 1 from 1 to 4
move 15 from 8 to 2
move 11 from 2 to 9
move 1 from 1 to 3
move 10 from 9 to 4
move 1 from 9 to 8
move 12 from 6 to 3
move 1 from 8 to 7
move 1 from 5 to 4
move 8 from 4 to 7
move 5 from 3 to 4
move 7 from 6 to 4
move 3 from 3 to 6
move 3 from 3 to 2
move 1 from 3 to 6
move 17 from 4 to 3
move 1 from 3 to 4
move 2 from 4 to 9
move 14 from 3 to 6
move 2 from 2 to 7
move 1 from 4 to 9
move 8 from 7 to 6
move 1 from 3 to 4
move 9 from 6 to 2
move 1 from 4 to 2
move 26 from 6 to 2
move 27 from 2 to 6
move 10 from 2 to 4
move 1 from 7 to 6
move 28 from 6 to 2
move 21 from 2 to 4
move 2 from 6 to 7
move 3 from 2 to 1
move 5 from 6 to 5
move 3 from 5 to 2
move 1 from 7 to 4
move 11 from 2 to 4
move 21 from 4 to 9
move 1 from 5 to 8
move 1 from 8 to 6
move 18 from 9 to 7
move 1 from 5 to 7
move 3 from 9 to 8
move 1 from 6 to 7
move 1 from 3 to 5
move 1 from 8 to 3
move 22 from 7 to 5
move 13 from 5 to 1
move 16 from 4 to 5
move 3 from 1 to 4
move 2 from 3 to 9
move 3 from 9 to 7
move 6 from 4 to 6
move 1 from 4 to 2
move 2 from 7 to 3`


// Part ONE
let input = raw.split("\n").map(x => {a = x.split(" "); return[a[1], a[3], a[5]]})
// console.log(input)

const processInput = (inputArr) => 
{
    const iter = inputArr[0];
    const sourceIndex = inputArr[1]-1
    const destIndex = inputArr[2]-1

    for (let i = 0; i < iter; i++) {
        let popped = matrix[sourceIndex].pop()
        let pushed = matrix[destIndex].push(popped)
    }
}

const rearrangeMatrix = (input) => {
    input.forEach(element => {
        processInput(element)
    });
    return
}

// console.log(matrix)

const getTopCrates = (input) => {
    let temp = ""
    input.forEach(e => {
    temp += e.pop()
    console.log(temp)
})
}

// getTopCrates(input)
// TGWSWRBPN

// Part TWO

const moveChunk = (inputArr) => {
    const iter = inputArr[0];
    const sourceIndex = inputArr[1]-1
    const destIndex = inputArr[2]-1
    let tempArr = []
    for (let i = 0; i < iter; i++) {
        let popped = matrix[sourceIndex].pop()
        let pushed = tempArr.push(popped)
    }
    for (let j = 0; j < iter; j++) {
        let poppeedFromTemp = tempArr.pop();
        matrix[destIndex].push(poppeedFromTemp)
    }
}

const rearrangeMatrix2 = (input) => {
    input.forEach(element => {
        moveChunk(element)
    });
    return
}

rearrangeMatrix2(input)

console.log(matrix)
getTopCrates(matrix)  
// TGWSMRBPN
// TGWSMRBPN
// TZLTLWRNF






