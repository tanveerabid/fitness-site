(function(window){function preventDefault(e){var e=e||window.event;if(e.preventDefault){e.preventDefault();}
e.returnValue=false;}
function openNav(){document.getElementById('mySidenav').style.left='0px';document.body.style.overflow='hidden';document.addEventListener('touchmove',preventDefault,false);}
function closeNav(){document.getElementById('mySidenav').style.left='-100%';document.body.style.overflow='';document.removeEventListener('touchmove',preventDefault,false);}
window.openNav=openNav;window.closeNav=closeNav;})(window);