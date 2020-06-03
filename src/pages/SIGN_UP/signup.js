// get the modal
var modal= document.getElementById('id01');

/* windows should close when user clicks anywehere outsided the model */
window.onclick = function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}