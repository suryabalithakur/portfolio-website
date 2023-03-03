console.log("script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
        if(document.querySelector('.sidebar').classList.toggle('sidebarGo')){
            document.querySelector('.ham').style.display='inline'
            document.querySelector('.cross').style.display='none'

        }
        else{
            document.querySelector('.ham').style.display='none'
            document.querySelector('.cross').style.display='inline' 
        }

})

