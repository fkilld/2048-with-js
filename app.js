document.addEventListener('DOMContentLoaded', function () {
  const boardSize = 4

  let board = Array(boardSize)
    .fill()
    .map(() => Array(boardSize).fill(0))
  let score = 0

  function initializeGame() {
    addNewTile()
    addNewTile()
    updateBoard()
  }

  function addNewTile() {
    let emptyTiles = []
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (board[i][j] === 0) {
          emptyTiles.push({ x: i, y: j })
        }
      }
    }
    if (emptyTiles.length > 0) {
      const { x, y } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)]
      board[x][y] = Math.random() > 0.5 ? 2 : 4
    }
  }
  function updateBoard() {
    const gameBoard = document.getElementById('game-board')
    gameBoard.innerHTML = ''
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const tile = document.createElement('div')
        tile.classList.add('tile')
        if (board[i][j] !== 0) {
          tile.textContent = board[i][j]
          tile.classList.add(`tile-${board[i][j]}`)
        }
        gameBoard.appendChild(tile)
      }
    }
    document.getElementById('score').textContent = `Score: ${score}`
  }

  function moveLeft() {
    let hasMoved = false
    for (let i = 0; i < boardSize; i++) {
      let row = board[i].filter((num) => num)
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2
          score += row[j]
          row.splice(j + 1, 1)
        }
      }
      row = [...row, ...Array(boardSize - row.length).fill(0)]
      if (row.toString() !== board[i].toString()) {
        hasMoved = true
      }
      board[i] = row
    }
    return hasMoved
  }

  function rotateBoard() {
    board = board[0].map(function (_, i) {
      return board
        .map(function (row) {
          return row[i]
        })
        .reverse()
    })
  }

  function move(direction) {
    let hasMoved = false // Flag to check if the board has moved
    for (let i = 0; i < direction; i++) {
      // Rotate the board to the right ( 0 -> left, 1 -> up, 2 -> right, 3 -> down)
      rotateBoard()
    }
    hasMoved = moveLeft() // Move the tiles to the left

    for (let i = 0; i < (4 - direction) % 4; i++) {
      // Rotate the board to the left ( 0 -> left, 1 -> up, 2 -> right, 3 -> down)
      rotateBoard()
    }

    if (hasMoved) {
      // If the board has moved, add a new tile
      addNewTile() // Add a new tile
      updateBoard() // Update the board
    }
    if (isGameOver()) {
      alert('Game Over!')
    }
  }

  function isGameOver() {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (board[i][j] === 0) {
          return false
        }
        if (j < boardSize - 1 && board[i][j] === board[i][j + 1]) {
          return false
        }
        if (i < boardSize - 1 && board[i][j] === board[i + 1][j]) {
          return false
        }
      }
    }
    return true
  }

  function restartGame() {
    board = Array(boardSize)
      .fill()
      .map(() => Array(boardSize).fill(0))
    score = 0
    initializeGame()
    console.log('restart')
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      console.log('left')

      move(0)
    } else if (e.key === 'ArrowUp') {
      move(1)
      console.log('up')
    } else if (e.key === 'ArrowRight') {
      move(2)
      console.log('right')
    } else if (e.key === 'ArrowDown') {
      move(3)
      console.log('down')
    }
  })

  document
    .getElementById('restart-button')
    .addEventListener('click', restartGame)

  initializeGame()
})
