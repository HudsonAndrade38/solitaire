let card = document.getElementById("one");
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
dragElement = () => { card.onmousedown = currentPosition};

dragElement();

    function currentPosition(e) {
      pos1 = e.clientX;
      pos2 = e.clientY;
      document.onmouseup = () => document.onmousemove = null;;
      document.onmousemove = setNewPosition;
    }
    
    function setNewPosition(e) {
      e.preventDefault()
      pos3 = pos1 - e.clientX;
      pos4 = pos2 - e.clientY;
      pos1 = e.clientX;
      pos2 = e.clientY;
      card.style.top = (card.offsetTop - pos4) + "px";
      card.style.left = (card.offsetLeft - pos3) + "px";
    }