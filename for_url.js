inputURL= document.getElementById('inputText').value;
box= document.getElementById('inputText');

box.addEventListener('keydown', data=>{
    if(data.code=='Enter'){
        inputURL= document.getElementById('inputText').value;
        box= document.getElementById('inputText');
        
        window.location.href="http://"+inputURL;
        box.value=''
    }
})
search_body= document.getElementById('container-for-searches')
search_body.addEventListener('click', ()=>{
    box=document.getElementById('inputText');
   
    box.placeholder='Enter the web address'
})
box.addEventListener('click', ()=>{
    box=document.getElementById('inputText');
  
    box.placeholder=''
})
