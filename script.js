//checkFunc will run everytime you click on box

function checkFunc() {
  let check1, check2, check3, check4, check5, check6, check7, check8, check9;
  check1 = document.getElementById('check1').value;
  check2 = document.getElementById('check2').value;
  check3 = document.getElementById('check3').value;
  check4 = document.getElementById('check4').value;
  check5 = document.getElementById('check5').value;
  check6 = document.getElementById('check6').value;
  check7 = document.getElementById('check7').value;
  check8 = document.getElementById('check8').value;
  check9 = document.getElementById('check9').value;
  //assigned id to variables
  check1id = document.getElementById('check1');
  check2id = document.getElementById('check2');
  check3id = document.getElementById('check3');
  check4id = document.getElementById('check4');
  check5id = document.getElementById('check5');
  check6id = document.getElementById('check6');
  check7id = document.getElementById('check7');
  check8id = document.getElementById('check8');
  check9id = document.getElementById('check9');

  //checking for player 1, if he meet all 3 "X"
  if (
    (check1 == 'x' || check1 == 'X') &&
    (check2 == 'x' || check2 == 'X') &&
    (check3 == 'x' || check3 == 'X')
  ) {
    //changing background color to Green, Only matched boxes
    check1id.style.backgroundColor = 'rgb(157, 219, 157)';
    check2id.style.backgroundColor = 'rgb(157, 219, 157)';
    check3id.style.backgroundColor = 'rgb(157, 219, 157)';
    // changing background color to red, only unmatched boxes
    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';
    // disabled all other boxes except the matched boxes
    check4id.disabled = true;
    check5id.disabled = true;
    check6id.disabled = true;
    check7id.disabled = true;
    check8id.disabled = true;
    check9id.disabled = true;
    // show message for the winner
    document.getElementById('winner').innerText = 'Player X Won';
  } else if (
    (check4 == 'x' || check4 == 'X') &&
    (check5 == 'x' || check5 == 'X') &&
    (check6 == 'x' || check6 == 'X')
  ) {
    check4id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check6id.style.backgroundColor = 'rgb(157, 219, 157)';

    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.disabled = true;
    check2id.disabled = true;
    check3id.disabled = true;
    check7id.disabled = true;
    check8id.disabled = true;
    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player X Won';
  } else if (
    (check7 == 'x' || check7 == 'X') &&
    (check8 == 'x' || check8 == 'X') &&
    (check9 == 'x' || check9 == 'X')
  ) {
    check7id.style.backgroundColor = 'rgb(157, 219, 157)';
    check8id.style.backgroundColor = 'rgb(157, 219, 157)';
    check9id.style.backgroundColor = 'rgb(157, 219, 157)';

    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.disabled = true;
    check2id.disabled = true;
    check3id.disabled = true;
    check4id.disabled = true;
    check5id.disabled = true;
    check6id.disabled = true;

    document.getElementById('winner').innerText = 'Player X Won';
  } else if (
    (check1 == 'x' || check1 == 'X') &&
    (check4 == 'x' || check4 == 'X') &&
    (check7 == 'x' || check7 == 'X')
  ) {
    check1id.style.backgroundColor = 'rgb(157, 219, 157)';
    check4id.style.backgroundColor = 'rgb(157, 219, 157)';
    check7id.style.backgroundColor = 'rgb(157, 219, 157)';

    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';

    check2id.disabled = true;
    check3id.disabled = true;

    check5id.disabled = true;
    check6id.disabled = true;

    check8id.disabled = true;
    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player X Won';
  } else if (
    (check2 == 'x' || check2 == 'X') &&
    (check5 == 'x' || check5 == 'X') &&
    (check8 == 'x' || check8 == 'X')
  ) {
    check2id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check8id.style.backgroundColor = 'rgb(157, 219, 157)';

    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.disabled = true;

    check3id.disabled = true;
    check4id.disabled = true;

    check6id.disabled = true;
    check7id.disabled = true;

    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player X Won';
  } else if (
    (check3 == 'x' || check3 == 'X') &&
    (check6 == 'x' || check6 == 'X') &&
    (check9 == 'x' || check9 == 'X')
  ) {
    check3id.style.backgroundColor = 'rgb(157, 219, 157)';
    check6id.style.backgroundColor = 'rgb(157, 219, 157)';
    check9id.style.backgroundColor = 'rgb(157, 219, 157)';

    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';

    check1id.disabled = true;
    check2id.disabled = true;

    check4id.disabled = true;
    check5id.disabled = true;

    check7id.disabled = true;
    check8id.disabled = true;

    document.getElementById('winner').innerText = 'Player X Won';
  } else if (
    (check1 == 'x' || check1 == 'X') &&
    (check5 == 'x' || check5 == 'X') &&
    (check9 == 'x' || check9 == 'X')
  ) {
    check1id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check9id.style.backgroundColor = 'rgb(157, 219, 157)';

    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';

    check2id.disabled = true;
    check3id.disabled = true;
    check4id.disabled = true;

    check6id.disabled = true;
    check7id.disabled = true;
    check8id.disabled = true;

    document.getElementById('winner').innerText = 'Player X Won';
  } else if (
    (check3 == 'x' || check3 == 'X') &&
    (check5 == 'x' || check5 == 'X') &&
    (check7 == 'x' || check7 == 'X')
  ) {
    check3id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check7id.style.backgroundColor = 'rgb(157, 219, 157)';

    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';

    check1id.disabled = true;
    check2id.disabled = true;

    check4id.disabled = true;

    check6id.disabled = true;

    check8id.disabled = true;
    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player X Won';
  }

  // checking for Player O
  // this is "o", !not zero
  else if (
    (check1 == 'o' || check1 == 'O') &&
    (check2 == 'o' || check2 == 'O') &&
    (check3 == 'o' || check3 == 'O')
  ) {
    check1id.style.backgroundColor = 'rgb(157, 219, 157)';
    check2id.style.backgroundColor = 'rgb(157, 219, 157)';
    check3id.style.backgroundColor = 'rgb(157, 219, 157)';

    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';

    check4id.disabled = true;
    check5id.disabled = true;
    check6id.disabled = true;
    check7id.disabled = true;
    check8id.disabled = true;
    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player O Won';
  } else if (
    (check4 == 'o' || check4 == 'O') &&
    (check5 == 'o' || check5 == 'O') &&
    (check6 == 'o' || check6 == 'O')
  ) {
    check4id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check6id.style.backgroundColor = 'rgb(157, 219, 157)';

    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.disabled = true;
    check2id.disabled = true;
    check3id.disabled = true;
    check7id.disabled = true;
    check8id.disabled = true;
    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player O Won';
  } else if (
    (check7 == 'o' || check7 == 'O') &&
    (check8 == 'o' || check8 == 'O') &&
    (check9 == 'o' || check9 == 'O')
  ) {
    check7id.style.backgroundColor = 'rgb(157, 219, 157)';
    check8id.style.backgroundColor = 'rgb(157, 219, 157)';
    check9id.style.backgroundColor = 'rgb(157, 219, 157)';

    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.disabled = true;
    check2id.disabled = true;
    check3id.disabled = true;
    check4id.disabled = true;
    check5id.disabled = true;
    check6id.disabled = true;
    document.getElementById('winner').innerText = 'Player O Won';
  } else if (
    (check1 == 'o' || check1 == 'O') &&
    (check4 == 'o' || check4 == 'O') &&
    (check7 == 'o' || check7 == 'O')
  ) {
    check1id.style.backgroundColor = 'rgb(157, 219, 157)';
    check4id.style.backgroundColor = 'rgb(157, 219, 157)';
    check7id.style.backgroundColor = 'rgb(157, 219, 157)';

    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.disabled = true;
    check3id.disabled = true;

    check5id.disabled = true;
    check6id.disabled = true;

    check8id.disabled = true;
    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player O Won';
  } else if (
    (check2 == 'o' || check2 == 'O') &&
    (check5 == 'o' || check5 == 'O') &&
    (check8 == 'o' || check8 == 'O')
  ) {
    check2id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check8id.style.backgroundColor = 'rgb(157, 219, 157)';

    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';

    check1id.disabled = true;

    check3id.disabled = true;
    check4id.disabled = true;

    check6id.disabled = true;
    check7id.disabled = true;

    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player O Won';
  } else if (
    (check3 == 'o' || check3 == 'O') &&
    (check6 == 'o' || check6 == 'O') &&
    (check9 == 'o' || check9 == 'O')
  ) {
    check3id.style.backgroundColor = 'rgb(157, 219, 157)';
    check6id.style.backgroundColor = 'rgb(157, 219, 157)';
    check9id.style.backgroundColor = 'rgb(157, 219, 157)';

    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check5id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';

    check1id.disabled = true;
    check2id.disabled = true;

    check4id.disabled = true;
    check5id.disabled = true;

    check7id.disabled = true;
    check8id.disabled = true;

    document.getElementById('winner').innerText = 'Player O Won';
  } else if (
    (check1 == 'o' || check1 == 'O') &&
    (check5 == 'o' || check5 == 'O') &&
    (check9 == 'o' || check9 == 'O')
  ) {
    check1id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check9id.style.backgroundColor = 'rgb(157, 219, 157)';

    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check3id.style.backgroundColor = 'rgb(209, 98, 98)';
    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check7id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.disabled = true;
    check3id.disabled = true;
    check4id.disabled = true;

    check6id.disabled = true;
    check7id.disabled = true;
    check8id.disabled = true;

    document.getElementById('winner').innerText = 'Player O Won';
  } else if (
    (check3 == 'o' || check3 == 'O') &&
    (check5 == 'o' || check5 == 'O') &&
    (check7 == 'o' || check7 == 'O')
  ) {
    check3id.style.backgroundColor = 'rgb(157, 219, 157)';
    check5id.style.backgroundColor = 'rgb(157, 219, 157)';
    check7id.style.backgroundColor = 'rgb(157, 219, 157)';

    check1id.style.backgroundColor = 'rgb(209, 98, 98)';
    check2id.style.backgroundColor = 'rgb(209, 98, 98)';
    check4id.style.backgroundColor = 'rgb(209, 98, 98)';
    check6id.style.backgroundColor = 'rgb(209, 98, 98)';
    check8id.style.backgroundColor = 'rgb(209, 98, 98)';
    check9id.style.backgroundColor = 'rgb(209, 98, 98)';

    check1id.disabled = true;
    check2id.disabled = true;

    check4id.disabled = true;

    check6id.disabled = true;

    check8id.disabled = true;
    check9id.disabled = true;
    document.getElementById('winner').innerText = 'Player X Won';
  }
  //Checking Done
  //if both player dosent meet upper reuirements
  //whatever the value is in box, match will tie, elseIf statemnt will run
  else if (
    (check1 == 'x' || check1 == 'o') &&
    (check2 == 'x' || check2 == 'o') &&
    (check3 == 'x' || check3 == 'o') &&
    (check4 == 'x' || check4 == 'o') &&
    (check5 == 'x' || check5 == 'o') &&
    (check6 == 'x' || check6 == 'o') &&
    (check7 == 'x' || check7 == 'o') &&
    (check8 == 'x' || check8 == 'o') &&
    (check9 == 'x' || check9 == 'o')
  ) {
    document.getElementById('winner').innerText = 'Match Draw';
    window.alert('Draww');
  } else {
    //if noOne won,and match isnt tie(means empty box reamining)
    //just pass the turn to other player

    //value of turn will be initialized later
    if (turn == 1) {
      document.getElementById('winner').innerText = 'Player X turn';
    } else {
      document.getElementById('winner').innerText = 'Player O turn';
    }
  }
}

//function to reset the game, and set all boxes value to empty
function Reset() {
  location.reload();
  document.getElementById('check1').value = '';
  document.getElementById('check2').value = '';
  document.getElementById('check3').value = '';
  document.getElementById('check4').value = '';
  document.getElementById('check5').value = '';
  document.getElementById('check6').value = '';
  document.getElementById('check7').value = '';
  document.getElementById('check8').value = '';
  document.getElementById('check9').value = '';
  window.alert('reseted');
}

//default turn will be 1 ("X")
//if first time click on box, it will put "X"
// then disable that box and change turn to zero 0 ("o")
let turn = 1;
function validate_1() {
  if (turn == 1) {
    document.getElementById('check1').value = 'x';
    document.getElementById('check1').disabled = true;
    document.getElementById('check1').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check1').value = 'o';
    document.getElementById('check1').disabled = true;
    document.getElementById('check1').style.backgroundColor =
      'rgb(55, 105, 68)';

    turn = 1;
  }
}
function validate_2() {
  if (turn == 1) {
    document.getElementById('check2').value = 'x';
    document.getElementById('check2').disabled = true;
    document.getElementById('check2').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check2').value = 'o';
    document.getElementById('check2').disabled = true;
    document.getElementById('check2').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
function validate_3() {
  if (turn == 1) {
    document.getElementById('check3').value = 'x';

    document.getElementById('check3').disabled = true;
    document.getElementById('check3').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check3').value = 'o';
    document.getElementById('check3').disabled = true;
    document.getElementById('check3').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
function validate_4() {
  if (turn == 1) {
    document.getElementById('check4').value = 'x';
    document.getElementById('check4').disabled = true;

    document.getElementById('check4').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check4').value = 'o';
    document.getElementById('check4').disabled = true;
    document.getElementById('check4').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
function validate_5() {
  if (turn == 1) {
    document.getElementById('check5').value = 'x';
    document.getElementById('check5').disabled = true;
    document.getElementById('check5').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check5').value = 'o';
    document.getElementById('check5').disabled = true;
    document.getElementById('check5').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
function validate_6() {
  if (turn == 1) {
    document.getElementById('check6').value = 'x';
    document.getElementById('check6').disabled = true;
    document.getElementById('check6').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check6').value = 'o';
    document.getElementById('check6').disabled = true;
    document.getElementById('check6').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
function validate_7() {
  if (turn == 1) {
    document.getElementById('check7').value = 'x';
    document.getElementById('check7').disabled = true;
    document.getElementById('check7').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check7').value = 'o';
    document.getElementById('check7').disabled = true;
    document.getElementById('check7').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
function validate_8() {
  if (turn == 1) {
    document.getElementById('check8').value = 'x';
    document.getElementById('check8').disabled = true;
    document.getElementById('check8').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check8').value = 'o';
    document.getElementById('check8').disabled = true;
    document.getElementById('check8').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
function validate_9() {
  if (turn == 1) {
    document.getElementById('check9').value = 'x';
    document.getElementById('check9').disabled = true;
    document.getElementById('check9').style.backgroundColor =
      'rgb(104, 111, 151)';
    turn = 0;
  } else {
    document.getElementById('check9').value = 'o';
    document.getElementById('check9').disabled = true;
    document.getElementById('check9').style.backgroundColor =
      'rgb(55, 105, 68)';
    turn = 1;
  }
}
