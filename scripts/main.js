window.onload = function(){
    var btn = document.getElementById('btn-add_todo');
    btn.onclick = addli;
};

function addli() 
{
    var newli=$("#in").val();
    var list=$("#todo_list");
    if(!$("#in").val()=='')
    {
        newli = document.createTextNode(newli)
        var templi  = document.createElement('li')
        templi.append(newli)
        list.append(templi)
    }
    else{alert("Invalid Input")}
     $("#in").val('');
}