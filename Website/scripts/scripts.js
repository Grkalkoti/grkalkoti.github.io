

var myImage=document.querySelector('img');

myImage.onclick=function()
{

    var mySrc= myImage.getAttribute('src');

    if (mySrc==='images/images.png')
    {
    myImage.setAttribute('src', 'images/images2.png');
    }
    else
    {
        myImage.setAttribute('src','images/images.png');
    }
}   

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName()
    {
    var myName=prompt('Enter Name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Test Page' + myName;
    }

if (!localStorage.getItem('name'))
    {
    setUserName();
    }
    else
    {
        var StoredName =localStorage.getItem('name');
        myHeading.textContent= 'Test Page' + StoredName;
    }
    
    myButton.onclick = function() 
    {
  setUserName();
    }