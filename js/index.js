const elForm = document.querySelector (".form");
const elNameInput = document.querySelector (".form__input-n");
const elRelationshipInput = document.querySelector(".form__input-r");
const elNumberInput = document.querySelector (".form__input-p");
const elWrapper= document.querySelector (".wrapper");

const contacts = []

elForm.addEventListener("submit", function (evt){
  evt.preventDefault();
  const nameValue = elNameInput.value;
  const relashipValue = elRelationshipInput.value;
  const numberValue = elNumberInput.value;

   const contact = {
     name: nameValue,
     relaship: relashipValue,
     number: numberValue,
   }

   contacts.push (contact)
   elNameInput.value=null;
   elRelationshipInput.value=null;
   elNumberInput.value=null;


   for ( let cont of contacts){

    let nameP = document.createElement("p")
    let relP = document.createElement("p")
    let numP = document.createElement("p")

    nameP.textContent = `${cont.name}`
    relP.textContent = `${cont.relaship}`
    numP.textContent = `${cont.number}`

    elWrapper.appendChild(nameP)
    elWrapper.appendChild(relP)
    elWrapper.appendChild(numP)

    nameP.style.color="white"
    relP.style.color="white"
    numP.style.color="white"
   }

})
