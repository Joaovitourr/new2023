const hamburguer = document.getElementById('hamburguer')

hamburguer.addEventListener('click', () => {
    
    if(item.style.display == 'block'){
        item.style.display = 'none'
    } else{ 
        item.style.display = 'block'
    } 
})

const btn = document.getElementById('btn');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const textArea = document.getElementById('textArea').value;

if(nome == ''){
    alert('Por favor, Preencha os campos corretamente');
} if(email == ''){
    alert('Por favor, preencha o email')
    email.innerText = '';
} if(textArea.length <= 10){
    alert('por favor, preencha com mais de 10 caracteres')
}  


}) 


