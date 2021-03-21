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
        var text = document.createTextNode(newli)
        var templi  = document.createElement('li')
        var deletebtn=document.createElement('button')
        console.log(deletebtn)
        deletebtn.innerHTML='Delete'
        deletebtn.className='btn btn-primary'
        deletebtn.id='btn-delete'
        deletebtn.style.float='right'
        templi.className='p-2'
        templi.append(text)
        templi.append(deletebtn)
        list.append(templi)
        deletebtn.onclick=delli
        console.log(templi)

    }
    else
    {   
        alert("Invalid Input")
        $("#in").css('border','2px solid red')

    }
     $("#in").val('');
}

function delli() {
    console.log('delete pressed')
    if(confirm("Are you Sure you want to delete This Item?"))
    {
        $(this).parent().remove()    
        alert("Item Removed")
    }
    else
    {
        alert("Not Removed")
    }
    // $(this).parent().remove()

  }