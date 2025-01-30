const cells = document.querySelectorAll('.cell'); //Why CONST Not LET >> const = named_basket, let = nameless basket &&  const is used here because cells is a reference to a NodeList, which will not be reassigned
let currentPlayer = 'X';

// aDDING Event lister to every cell
cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick)
  console.log(cell);
});


function handleCellClick(event) {
  const cell = event.target
  
  if (cell.textContent === '') {  // Check if the cell is empty
    cell.textContent = currentPlayer;   // Assign the current player's symbol to the cell
  }
  // And also check these rules
  if (checkWin()) {
    alert(currentPlayer + 'Wins!');
    resetGame();
  } else if (isBoardFull()) {
    alert("It's a draw!")
    resetGame();
  } else {
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X'
    }
  }
  console.log('Clicked cell:', cell);
  console.log('Current player:', currentPlayer);
};  



 function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]          // Diagonals
  ];

  return winningCombinations.some(function (combination) {
    return combination.every(function (index) {
      return cells[index].textContent == currentPlayer;
    });
  });
 } 



  function resetGame() {
    
    cells.forEach(function (cell) {
       cell.textContent = ''
    });
    currentPlayer = 'X'

  };


  function isBoardFull() {
    return Array.from(cells).every(function (cell) {
      return cell.textContent !== '';
    });
  };
