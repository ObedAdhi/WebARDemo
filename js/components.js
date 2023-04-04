AFRAME.registerComponent('drag-rotate-component',{
  schema : { sensitivity : { default: 2}},
  init : function(){
    this.isMouseDown = false
    this.posX = 0
    document.addEventListener('mousedown', this.onMouseDown.bind(this))
    document.addEventListener('mouseup', this.onMouseUp.bind(this))
    document.addEventListener('mousemove', this.onMouseMove.bind(this))
  },
  onMouseDown : function(event) {
    this.isMouseDown = true
    this.posX = event.clientX
  },
  onMouseUp : function() {
    this.isMouseDown = false
  },
  onMouseMove : function(event) {
    if (this.isMouseDown) {
      var temp_x = event.clientX - this.posX
      this.el.object3D.rotateY(temp_x * this.data.sensitivity / 1000)
      this.posX = event.clientX
    }
  }
})