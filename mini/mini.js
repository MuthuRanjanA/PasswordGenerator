const pw=document.getElementById("pw");
const pwbtn=document.getElementById("pwbtn");
pwbtn.addEventListener("click",generatePassword);
function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    pw.textContent = password;
}