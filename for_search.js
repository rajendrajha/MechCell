InputSearcher= document.getElementById('inputText2');
InputSearcher_value= document.getElementById('inputText2').value;

InputSearcher.addEventListener('keydown', (e)=>{
    if(e.code=='Enter'){
        InputSearcher_value= document.getElementById('inputText2').value;
        InputSearcher= document.getElementById('inputText2');
        clear()
        fetchdata()
        
    }
})



const fetchdata = async()=>{
    API_KEY= 'AIzaSyBK25Gku4SBXCDwENAEU2gMCDqxK_Rz--4'
    CONTEXT_KEY= '8a38df6a20370280a'
    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${InputSearcher_value}`)
    .then(response=>response.json())
    .then(data=>{       
        console.log(data)
        search_info= document.createElement('p')
        search_info.classList.add('p22')
        search_info.innerText= `About ${data?.searchInformation.formattedTotalResults} results for ${InputSearcher_value} in (${data?.searchInformation.searchTime}) sec`
        container.append(search_info)
        data?.items.map(item=>{
            container= document.getElementById('search_information'); 
            
            a= document.createElement('a')
            a.innerHTML= `<a href='${item.link}' target='_blank' rel='noopener' rel='noreferrer'><p>${item.title}</p></a>`
            a.classList.add('p3')
            content= document.createElement('p')
            content.innerHTML= `${item.htmlSnippet}`
            content.classList.add('p2')
            container.append(a)
            container.append(content)
        })
    })
}
function clear(){
    container= document.getElementById('search_information');
    container.innerHTML= ''
}
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    // if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    //  return false;
    // }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
    
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
        return false;
       }      
 }
 document.addEventListener('contextmenu', event => event.preventDefault());
function COUNT(str) { 
    return str.split(" ").length;
}