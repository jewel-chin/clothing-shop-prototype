const dropdownMenu = document.getElementById('dropdown-size-menu');
const dropDownItems = document.querySelectorAll('.dropdown-item');
dropDownItems.forEach((dropDownItem)=>{
    dropDownItem.addEventListener(mytap,()=>{
        dropdownMenu.innerHTML = dropDownItem.innerHTML;
    })
})