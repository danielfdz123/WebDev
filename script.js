//Stuff for the buttons and their actions
let addList = document.getElementById("add");
let RemoveList= document.getElementById("delete");


addList.onclick = function() 
{
    //Accesses the ordered list
    let ol = document.querySelector('ol');

    // create a new element <li> </li> 
    let li = document.createElement('li');

    // appends the element <li> </li> onto the ordered list
    ol.append(li)

    // adds the text to the list
    li.innerText = 'Everyone else :)';
};

RemoveList.onclick = function() 
{
    //Calls ordered list via ID
    let myList = document.getElementById("OrderedList");

    //Last item in the list is set as a child
    let lastItem = myList.lastChild;

    //Removes last item from the list
    myList.removeChild(lastItem);
}; 