let input = document.querySelector(".input")
   function avelacneltiv(number) {
    input.value += number  
   }
   function hashvel(){
      input.value = eval (input.value)
   }
function maqrel(){
   input.value = "0"
}
function qarakusi(){
   let qarakusi = input.value
   let result = qarakusi*qarakusi
   input.value = result
}