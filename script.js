const inputSearch = document.querySelector('.recordingInput');
const buttonIcon = document.querySelector('.buttonIcon');
const containerTarefas = document.querySelector('.container-tarefas');
const inputSave = document.querySelector('.inputSave');
const iconTrash = document.querySelector('.iconTrash');

//Função criar items
buttonIcon.addEventListener('click', function(event) {
    event.preventDefault();

    const inputSearchValue = inputSearch.value;

    if(inputSearchValue != '') {
        const newConteudo = document.createElement('h2');
        containerTarefas.appendChild(newConteudo);
        newConteudo.innerHTML = inputSearchValue;
        newConteudo.classList = 'conteudo-inputSave';
        iconTrash.classList = 'conteudo-iconTrash';

        //Reseta o input principal
        setTimeout(() => {
            inputSearch.value = '';
        }, 1);

        //Adicionado os icons de lixeira
        const newTrash = document.createElement('ion-icon');
        containerTarefas.appendChild(newTrash);
        newTrash.setAttribute('name', 'trash-outline');
        newTrash.id = 'iconTrash';

        
        //Adicionado o evento de exclusão dos itens
        const idIconTrash = document.querySelector('#iconTrash');

        newTrash.addEventListener('click', function(event) {
            event.preventDefault();

            newConteudo.remove();
            newTrash.remove();
        });
    };
});

