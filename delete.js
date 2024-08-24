// let board = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ]

// function addNewTile() {
//   let emptyTiles = []

//   //   find all empty tiles
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       if (board[i][j] === 0) {
//         emptyTiles.push({ x: i, y: j })
//       }
//     }
//   }
//   if (emptyTiles.length > 0) {
//     const randomIndex = Math.floor(Math.random() * emptyTiles.length)
//     const { x, y } = emptyTiles[randomIndex]
//     // emptyTiles[randomIndex] = board[x][y] = Math.random() > 0.5 ? 2 : 4
//     board[x][y] = Math.random() > 0.5 ? 2 : 4
//   }
// }
// // let board = [
// //   [0, 0, 0, 0],
// //   [0, 0, 0, 0],
// //   [0, 0, 0, 0],
// //   [0, 0, 0, 0],
// // ]

// addNewTile()
// console.log(board)

// // let arr = [9,7,6,8,1,9,6,4,5]
// // const [x] = arr
// // console.log(x)
// // console.log(arr[1]);

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     console.log(i, j)
//   }
// }
// console.log('a'.toString() !== 'a'.toString())
