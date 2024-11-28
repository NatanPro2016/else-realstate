window.addEventListener('scroll', reveal);
function reveal(){
    const reveals = document.querySelectorAll('.reveal');
    for(let i =0; i < reveals.length; i++){
        let revealTop = reveals[i].getBoundingClientRect().top;
        revealPoint = 150;
        if ( revealTop < window.innerHeight - revealPoint){
          
            const cards = document.querySelectorAll('.revel-element')
            console.log(123)
            cards.forEach( card =>{
                card.classList.add('active')
                console.log(card)
            })
            
        }
        else {
            const cards = document.querySelectorAll('.revel-element')
            cards.forEach( card =>{
                card.classList.remove('active')
            })
            
        }
    }
    const reveals2 = document.querySelectorAll('.reveal2');
    for(let i =0; i < reveals2.length; i++){
        let revealTop = reveals2[i].getBoundingClientRect().top;
        revealPoint = 150;
        if ( revealTop < window.innerHeight - revealPoint){
            
            const cards = document.querySelectorAll('.revel-element2')
            console.log(123)
            cards.forEach( card =>{
                card.classList.add('active')
                console.log(card)
            })
            
        }
        else {
            const cards = document.querySelectorAll('.revel-element2')
            cards.forEach( card =>{
                card.classList.remove('active')
            })
            
        }
        const reveals3 = document.querySelectorAll('.reveal3');
        for(let i =0; i < reveals3.length; i++){
            let revealTop = reveals3[i].getBoundingClientRect().top;
            revealPoint = 150;
            if ( revealTop < window.innerHeight - revealPoint){
              
                const cards = document.querySelectorAll('.revel-element3')
                console.log(123)
                cards.forEach( card =>{
                    card.classList.add('active')
                    console.log(card)
                })
                
            }
            else {
                const cards = document.querySelectorAll('.revel-element3')
                cards.forEach( card =>{
                    card.classList.remove('active')
                })
                
            }
        }
    }
}