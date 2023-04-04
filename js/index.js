let sizeSliderElement = document.getElementById("sizeSlider")
let animationSwitchElement = document.getElementById("animationSwitch")
let main3dModel = document.querySelector('#model-entity');

// init value
sizeSliderElement.value = 0.15
animationSwitchElement.checked = true

// event listener
sizeSliderElement.oninput = function() {
  main3dModel.setAttribute('scale', `${this.value} ${this.value} ${this.value}`)
}

animationSwitchElement.onchange = () => {
  if (animationSwitchElement.checked) {
    main3dModel.setAttribute('animation-mixer','timeScale: 1.0;')
    console.log('on')
    return
  } 
  main3dModel.setAttribute('animation-mixer','timeScale: 0.0;')
}