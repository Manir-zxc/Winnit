let n = document.getElementById('n');
let thirdDiv = document.querySelectorAll('#logotitle div')[2];
let w = document.getElementById('w');

window.onload = () => {
  n.style.transform = 'rotate(360deg)';
};

n.addEventListener('click', () => {
  n.style.transform = 'rotate(300deg)';
  setTimeout(() => {
    n.style.transform = 'rotate(370deg)';
  }, 100); // 10 milliseconds (0.01 seconds) delay
  thirdDiv.classList.add('shake');
  setTimeout(() => {
    thirdDiv.classList.add('shake-pause');
  }, 500);
});

w.addEventListener('click', () => {
  n.style.transform = 'rotate(300deg)';
  setTimeout(() => {
    n.style.transform = 'rotate(370deg)';
  }, 100); // 10 milliseconds (0.01 seconds) delay
  thirdDiv.classList.add('shake');
  setTimeout(() => {
    thirdDiv.classList.add('shake-pause');
  }, 500);
});

n.style.transform = 'rotate(390deg)'; // Default position

 const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
