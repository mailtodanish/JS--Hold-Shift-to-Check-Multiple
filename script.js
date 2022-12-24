const inputboxes = document.querySelectorAll("input[type=checkbox]");
let secondCheck;
let checkflag = false;
function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    inputboxes.forEach((ch) => {
      if (ch === this || ch === secondCheck) {
        checkflag = !checkflag;
      }

      if (checkflag) {
        ch.checked = true;
      }
    });
  } else {
    inputboxes.forEach((ch) => {
      if (ch !== this) {
        ch.checked = false;
      }
    });
  }

  secondCheck = this;
}

inputboxes.forEach((el) => {
  el.addEventListener("click", handleCheck);
});
