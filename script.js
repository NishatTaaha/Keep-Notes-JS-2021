showNotes();

// button click
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e)
{
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if (notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    // console.log(notesObj);
    showNotes();
});

addTxt.addEventListener("keypress",function(event){
    if(event.which===13){ 
        showNotes();
    }
});


// showing notes
function showNotes()
{
    let notes = localStorage.getItem('notes');
    if (notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }


    let html = '';
    notesObj.forEach(function (element, index)
    {
        html += `
        <div class="card my-3 mx-3 noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn" style="background-color: mediumslateblue; font-weight: bold;">Delete</button>
            </div>
        </div>`;
    });

    let notesElem= document.getElementById('notes');
    if(notesObj.length!=0){
        notesElem.innerHTML=html;
    }
    else{
        notesElem.innerHTML='Nothing To Show!!'
    }
}



// deleting notes
function deleteNote(index){
    console.log('delete',index);

    let notes = localStorage.getItem('notes');
    if (notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}



// search in search input
let search= document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal= search.value.toLowerCase();
    console.log(inputVal);
    let noteCards= document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt= element.getElementsByTagName('p')[0].innerHTML;
        if(cardTxt.includes(inputVal)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    });

})





























