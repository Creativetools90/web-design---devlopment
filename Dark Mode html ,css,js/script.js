let DarkMode = localStorage.getItem('DarkMode');
const themeSwitch = document.getElementById("theme-switch");
const enableDarkMode=()=>{
    document.body.classList.add('DarkMode');
    localStorage.setItem('DarkMode','active');
}

const disableDarkMode = ()=>{
    document.body.classList.remove('DarkMode');
    localStorage.setItem('DarkMode',null);
}
if(DarkMode === 'active')  enableDarkMode()
themeSwitch.addEventListener("click",()=>{
    DarkMode = localStorage.getItem('DarkMode')
    DarkMode !== 'active' ? enableDarkMode() : disableDarkMode();
})




