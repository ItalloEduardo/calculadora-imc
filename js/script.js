function start(){
  var buttonCalculatedIMC = document.querySelector('#btn_calc');
  buttonCalculatedIMC.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#weight');
  var inputHeight = document.querySelector('#height');

  inputHeight.addEventListener('input', handleButtonClick);
  inputWeight.addEventListener('input', handleButtonClick);
}
function calculateIMC(w, h){
  return w/(h * h);
}
function classe(imc){
  if(imc >= 16 && imc < 17){
    var classification = 'Muito Abaixo do Peso'; 
  } else if(imc >= 17 && imc < 18.5){
    var classification = 'Abaixo do Peso'; 
  } else if(imc >= 18.5 && imc < 25){
    var classification = 'Peso normal'; 
  } else if(imc >= 25 && imc < 30){
    var classification = 'Acima do Peso'; 
  } else if(imc >= 30 && imc < 35){
    var classification = 'Obesidade Grau I'; 
  } else if(imc >= 35 && imc < 40){
    var classification = 'Obesidade Grau II'; 
  } else if(imc >= 40){
    var classification = 'Obesidade Grau III (Mórbida)'; 
  } else{
    classification = 'Valores inválidos.';
  }
  return classification;
}
function handleButtonClick(){
  var inputWeight = document.querySelector('#weight');
  var inputHeight = document.querySelector('#height');
  var imcResult = document.querySelector('#imc-result');
  var imcClass = document.querySelector('#imc-class');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  
  var imc = calculateIMC(weight,height);
  var classificacao = classe(imc);

  imcResult.textContent = imc.toFixed(2).replace('.', ',');
  imcClass.textContent = classificacao;
}

start();