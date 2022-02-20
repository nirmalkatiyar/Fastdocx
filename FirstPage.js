//get access to drag-area class and header
const dragArea=document.querySelector('.drag-area');
const dragText=document.querySelector('.header');
//browse button
let button=document.querySelector('.button');
let input=document.querySelector('.Browse');


let file;

button.onclick=()=>{
    input.click();
};


//event listener
input.addEventListener('change',function(){
    file=this.files[0];
    dragArea.classList.add('active');
    display();
})

dragArea.addEventListener('dragover',(event)=>{
    // prevents the default behaviour of js event
    event.preventDefault(); 
    dragText.textContent='Release to Upload';
    dragArea.classList.add('active');
});

//to track one file leave the drag area
dragArea.addEventListener('dragleave',()=>{
    
    dragText.textContent='Drag & Drop'
//  console.log("jdjfh");
    dragArea.classList.remove('active');
});

//file is dropped on drag area
dragArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    //only one file at a time is allowed to upload
   file=event.dataTransfer.files[0];
    
    display();
});

function display(){
    let fileType=file.type;
    // console.log(fileType);
    //allowed extension is only word(.docx)
    let validExtensions=['application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/msword'];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = () =>{
            let fileURL=fileReader.result;
        };
        fileReader.readAsDataURL(file);
    }
    else{
        alert("This is not a valid file" +"\n"+"Please select another file !!!");
        dragArea.classList.remove('active');
    }

}


