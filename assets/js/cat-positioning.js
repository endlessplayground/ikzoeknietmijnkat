  function updateRightOffset() {
    const catDiv = document.querySelector('.main-cat');
    const screenWidth = window.innerWidth;
    const offset = -220000 / screenWidth + 140; // adjust as needed
    catDiv.style.right = offset + 'px';
  }

  window.addEventListener('load', updateRightOffset);
  window.addEventListener('resize', updateRightOffset);
