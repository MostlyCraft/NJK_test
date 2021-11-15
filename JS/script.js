function test(){
  document.querySelector('#knapp').style.fontSize="200px"
  let random = Math.floor(Math.random()*6);
  console.log(random)
  if(random === 5){
    document.querySelector('#knapp').style.background ="green";
    document.body.style.background ="red"
  } else if(random === 4){
    document.querySelector('#knapp').style.background ="yellow";
    document.body.style.background ="white"

  } else if(random === 3){
    document.querySelector('#knapp').style.background ="blue";
    document.body.style.background ="yellow"

  }else if(random === 2){
    document.querySelector('#knapp').style.background ="green";
    document.body.style.background ="cyan"

  }else if(random === 1){
    document.querySelector('#knapp').style.background ="black";
    document.body.style.background ="pink"

  }else if(random === 0){
    document.querySelector('#knapp').style.background ="pink";
    document.body.style.background ="blue"

  }
}