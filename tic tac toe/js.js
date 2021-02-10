var turn = true;
var blocks = [];


function reset(A,B,C){
    document.getElementById('b' + A).style.color = "#E74C3C";
    document.getElementById('b' + B).style.color ="#E74C3C";
    document.getElementById('b' + C).style.color ="#E74C3C";
    setTimeout(function(){
      location.reload();
    },3000)
  }

function checkwinner(){
    for(let i=1;i<=9;i++){
        blocks[i]=document.getElementById('b'+ i).innerHTML;
    }
    if(blocks[1]==blocks[2] && blocks[2]==blocks[3] && blocks[3]!=''){
        reset(1,2,3);
        alert('player : ' + blocks[3] + ' Wins!!');
    }
    if(blocks[4]==blocks[5] && blocks[5]==blocks[6] && blocks[6]!=''){
        reset(4,5,6);
        alert('player : ' + blocks[6] + ' Wins!!');
    }
    if(blocks[7]==blocks[8] && blocks[8]==blocks[9] && blocks[9]!=''){
        reset(7,8,9);
        alert('player : ' + blocks[9] + ' Wins!!');
    }
    if(blocks[1]==blocks[4] && blocks[4]==blocks[7] && blocks[7]!=''){
        reset(1,4,7);
        alert('player : ' + blocks[7] + ' Wins!!');
    }
    if(blocks[2]==blocks[5] && blocks[5]==blocks[8] && blocks[8]!=''){
        reset(2,5,8);
        alert('player : ' + blocks[3] + ' Wins!!');
    }
    if(blocks[3]==blocks[6] && blocks[6]==blocks[9] && blocks[9]!=''){
        reset(3,6,9);
        alert('player : ' + blocks[9] + ' Wins!!');
    }
    if(blocks[1]==blocks[5] && blocks[5]==blocks[9] && blocks[9]!=''){
        reset(1,5,9);
        alert('player : ' + blocks[9] + ' Wins!!');
    }
    if(blocks[3]==blocks[5] && blocks[5]==blocks[7] && blocks[7]!=''){
        reset(3,5,7);
        alert('player : ' + blocks[7] + ' Wins!!');
    }
}
    function insert(id){
        var b = document.getElementById(id);
        if(turn && b.innerHTML == ''){
          b.innerHTML='X';
          turn = !turn;
        }
        else if(b.innerHTML == ''){
          b.innerHTML='O';
          turn = !turn;
        }
        checkwinner();
      }
