let dragindex = 0;
let clone = "";


function drag(e) {
    e.dataTransfer.setData("text",e.target.id);
}


function allowDrop(e) {
    e.preventDefault();
}

function drop(e)
{
    e.preventDefault();
    clone = e.target.cloneNode(true);
    let data = e.dataTransfer.getData("text");
    if (data === e.target.id) {return}; //on ne peut pas drop une carte sur elle-même afin d'éviter le clonage
    let nodelist = document.getElementById("parent").childNodes;
    for(let i = 0; i < nodelist.length; i++) {
        if(nodelist[i].id === data) {
            dragindex = i;
        }
    }
    document.getElementById("parent").replaceChild(document.getElementById(data),e.target);
    document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
}

