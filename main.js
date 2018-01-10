var result;

function onButtonClick() {
  result = '';
  var target = input.value;
  if (target != '') {
    collatz(target);
    document.querySelector("#output").innerHTML = result;
  }
}

function collatz(n) {
  result += n;
  result += ' (';
  binary(parseInt(n));
  result += ')<br>';
  if(n>1) {
    if(n%2==0) collatz(n/2);
    else       collatz(3*n+1);
  }
}

function binary(n) {
  if (n!=0) {
    binary(parseInt(n/2));
    result += n%2;
  }
}
