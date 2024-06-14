document.querySelectorAll('.editar-receita').forEach(botao => {
    botao.addEventListener('click', function(e) {
        e.preventDefault(); 

       
        const title = document.getElementById('recipeTitle').textContent;
        const description = document.getElementById('recipeDescription').textContent;

        console.log("Título atual:", title); 
        console.log("Descrição atual:", description);

        
        const novoTitulo = prompt('Editar Título:', title);
        const novaDescricao = prompt('Editar Descrição:', description);

        console.log("Novo título:", novoTitulo); 
        console.log("Nova descrição:", novaDescricao); 

       
        document.getElementById('recipeTitle').textContent = novoTitulo;
        document.getElementById('recipeDescription').textContent = novaDescricao;
    });
});


document.querySelectorAll('.ver-receita').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        
        const title = link.getAttribute('data-title');
        const description = link.getAttribute('data-description');
        
      
        document.getElementById('recipeTitle').textContent = title;
        document.getElementById('recipeDescription').textContent = description;


        document.getElementById('recipePopup').style.display = 'block'; 
    });
});


document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('recipePopup').style.display = 'none';
});
