
//add an item in the list//

var arr=[];
var it = document.getElementById("enterTask");
var ip=document.getElementById("priorty");
var cls=document.getElementsByClassName("close");
var del=document.getElementById("dellist");

  
function newElement() {
 //var li = document.createElement("li");
  var inputValue=it.value;
  var inputPriorty=ip.value;
  arr.push({
    task:inputValue,
    priorty:inputPriorty
  });
   arr.sort(function(T1,T2)
   {
     return(T1.priorty-T2.priorty);
   });
   var todo= document.getElementById("todo-list");

   while(todo.firstChild){
     todo.removeChild(todo.firstChild);
   }

   for(var i=0;i<arr.length;i++)
  {
    var li =document.createElement('li');
  
  var t = document.createTextNode(arr[i].task);
  var s = document.createTextNode(arr[i].priorty);
  
  li.appendChild(s) ;
  li.append("-");
  li.appendChild(t);
  var spn=document.createElement("span");
  var symbol=document.createTextNode('\u00D7');
  spn.className="close";
  spn.appendChild(symbol)
  li.appendChild(spn);

  //var t = document.createTextNode(inputValue);
  //li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todo-list").appendChild(li);
  }
  document.getElementById("enterTask").value = "";

  //var span = document.createElement("SPAN");
  //var txt = document.createTextNode("\u00D7");
  //span.className = "close";
 // span.appendChild(txt);
  //li.appendChild(span);
  }
  
  for (i = 0; i < cls.length; i++) {
    
    cls[i].onclick = function() {
      var div = this.parentElement;
      del.appendChild(div);
    }
  }
}


/*functionality of delete symbol
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < c.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}*/
//done or undone
var list = document.querySelector('#todo-list');
list.addEventListener('click', function(ev) {
  console.log("nj");
  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');
  }
}, false);

