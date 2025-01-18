var lastClickedTabID = '';
function tabClicked(tabID) {
    var tab = document.getElementById(tabID);
    if(lastClickedTabID!='') {
        var lastTab = document.getElementById(lastClickedTabID);
        lastTab.style.backgroundColor = '#C890A7';
        
    }
    tab.style.backgroundColor = '#A35C7A';
    lastClickedTabID = tabID;
}
var today = new Date().toLocaleDateString('fa-IR');
document.getElementById('date').textContent= today;