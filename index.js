const container = document.getElementById('pencil-container');
const pushBlock = document.getElementById('push');
const popBlock = document.getElementById('pop');

let arr = [];

pushBlock.addEventListener('click', addBlock);
popBlock.addEventListener('click', removeBlock);

function addBlock() {
  if (arr.length > 10) {
    alert('I think that\'s long enough');
    return
  }

  if (arr.length === 0) {
    arr.push('eraser');
  } else if (arr.length < 10) {
    arr.push('block');
  } else {
    arr.push('tip')
  }

  renderPencil();
}

function removeBlock() {
  arr.pop();
  renderPencil();
}

function renderPencil() {
  reset();
  arr.forEach(a => {
    const part = document.createElement('div');
    part.classList.add(`${a}`);
    
    container.appendChild(part);
  })
}

function reset() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

