window.addEventListener('load', (event)=>{
    const update = document.querySelector('#updateDate');
    update.innerHTML = "Last Updated: " + document.lastModified;

    const year = document.querySelector('#currentYear');
    year.innerHTML = "&copy; " + new Date().getFullYear();
})