document.addEventListener('DOMContentLoaded',function(){
    'use strict';
const upperApha = ['A','B','C','D','E',
                    'F','G','H','I','J',
                   'K','L','M','N','O',
                   'P','Q','R','S','T',
                   'U','V','W','X','Y','Z'];

document.forms[0].addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.className == 'analyz'){
        let inputval = document.querySelector('#textsec').value;
        // console.log(inputval.length); 
    
        if(inputval.length > 16){
            document.querySelector('table').style.display = 'inline';
            
            //calling the uppercase counter
            uppcasecounter(upperApha,inputval);

            //calling the lower case counter
            lwcasecounter(upperApha,inputval);
       
            // this hide the upper case heading if no uppercases found
            if(Array.from(document.querySelector('#uppereslt').cells) == ''){
                document.querySelector('#uppcase').style.display = 'none';
            }

            // this hide the lower case heading if no lowwercases found
            if(Array.from(document.querySelector('#lowereslt').cells) == ''){
                document.querySelector('#lwcase').style.display = 'none';
            }

        } else {
            //this longs a msg and alerts that user needsan input
            console.log('please enter something');
            alert('please enter something');
        }
    } else if(event.target.id == 'refresh'){
        //the refresh button reloads the page
        location.reload();
    }
})
})

//function to count the uppercase letter
function uppcasecounter(letterarr,textarr){
    for (const letter of letterarr) {
        let count = 0;
        Array.from(textarr).forEach(function(lett){
            if(lett == letter){
                count += 1;
            }
        })
        if(count > 0){
            let td = document.createElement('td');
            td.setAttribute('id',letter);
            td.textContent = count;

            let td2 = document.createElement('td');
            td2.textContent = letter;
            td2.classList.add(letter);
            
            document.querySelector('#capsltr').appendChild(td2);
            document.querySelector('#uppereslt').appendChild(td);
        }  
    }
}

//function to count the lower case letters
function lwcasecounter(letterarr,textarr){
    for (const letter of letterarr) {
        let count = 0;
        Array.from(textarr).forEach(function(lett){
            if(lett == letter.toLowerCase()){
                count += 1;
            }
        })
        if(count > 0){
            let td = document.createElement('td');
            td.setAttribute('id',letter);
            td.textContent = count;

            let td2 = document.createElement('td');
            td2.textContent = letter.toLocaleLowerCase();
            td2.classList.add(letter)

            //appending the lower letters found and number of them
            document.querySelector('#smalltr').appendChild(td2);
            document.querySelector('#lowereslt').appendChild(td);
        } 
    }

}