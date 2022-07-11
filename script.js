let inputHolder = document.getElementById('inputHolder')
let xSize 
let ySize
let mapName


function submitSize(){
  // Taking the input boxes and then galling Generate array
  xSize = document.getElementById('xcount').value
  ySize = document.getElementById('ycount').value //get array input
  mapName = document.getElementById('name').value
  if (xSize<=0 || ySize<=0 || mapName == ''){
    alert('Invalid Inputs')
  } else{
    generateArray()
  }
}
function generateArray(){
  //Making the array of input fields
  //And adding EvenListeners 
  if (xSize > 80 || ySize > 80){
    if (window.confirm("Woah Buddy, that's a bigg ass number. Are you sure?") == false){
      return
    }
  }
  for (let i = 0; i < xSize;i++){
    for (let j = 0; j < ySize;j++){
      const emptyField = document.createElement('input')
      emptyField.type = 'text'
      emptyField.className = 'inputarray'
      emptyField.maxLength = 2
      emptyField.value = '0'
      emptyField.style='display:span;'
      emptyField.id = `field(x${i}y${j})`
      console.log(`field(x${i}y${j})`)
      inputHolder.append(emptyField)
    }
    inputHolder.append(document.createElement('br'))
  }

  // Changing the color if the box isnt = to 0 by adding a class
  for (let x of inputHolder.childNodes){
  x.addEventListener('change',(event)=>{
    if (event.target.value != 0){
    event.target.classList.add('greyBg')
    }
    if (event.target.value == 0){
      event.target.classList.remove('greyBg')
    }
  })
}
  }


function generateList(){
  // build an array, then combine it into a group of arrays, then finish 
  // to a string
  
  let currentArray = []
  let combinedArray = [] 
  let finaltext
  
  let elements = inputHolder.children 
    for(let i = 0; i < elements.length;i++){
      console.log(elements[i].nodeName)
      if (elements[i].nodeName == 'INPUT'){
        if (typeof(elements[i].value) == 'number'){
          currentArray.push(elements[i].value)
          console.log('num')
        } else {
          currentArray.push(`"${elements[i].value}"`)
        }
      }
      if (elements[i].nodeName == 'BR'){
      //break array when next line starts and add a new one
      console.log(currentArray)
      
      combinedArray.push(`[${currentArray.join(',')}]`)
      currentArray = []
      }
    }
  //finish the array building by joining the combinedArrays
  finaltext = `[${combinedArray.join(',')}]`
  //print to results
  finaltext = `'${mapName}': ` + finaltext 
  document.getElementById('codeResult').innerText = finaltext
  document.getElementById('codeResult').scrollIntoView({behavior: 'smooth'}) //After Generating smooth scroll to array
  
  }
function resetGrid(){ 
  let ans = window.confirm( `It's okay to clear this?`)
  if (ans != true){
    return
  }
  while (inputHolder.hasChildNodes()){
    inputHolder.removeChild(inputHolder.firstChild)
  }
}
