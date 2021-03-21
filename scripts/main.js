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
        var deletebtn=document.createElement('button')
        console.log(deletebtn)
        deletebtn.innerHTML='Delete'
        deletebtn.className='btn btn-primary'
        deletebtn.id='btn-delete'
        //deletebtn.addClass('btn-primary')

        templi.append(newli)
        templi.append(deletebtn)
        list.append(templi)
        deletebtn.onclick=delli

    }
    else{alert("Invalid Input")}
     $("#in").val('');
}

function delli() {
    console.log('delete pressed')
    $(this).parent().remove()

  }