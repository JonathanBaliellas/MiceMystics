$(document).ready(function(){
    $('#btn-initiative').click(function(){
        let fightersList = [];//Lista de combatentes
        let elementsList = [];//Lista de elementos
        const fighterNum = $('input:checked').length;//Define o número de combatentes
        $('#ol-initiative').html('');//Limpa a lista de iniciativa

        //Preenche a lista com todos os combatentes selecionados
        for(let i = 0; i < fighterNum; i++){
            let fighter = {name:'',pos:''};//Objeto combatente
            fighter.name = $(`input:checked:eq(${i})`).val();//Atribui o nome
            fighter.pos = Math.random();//Atribui valor aleatório para posição
            fightersList.push(fighter);//Inclui combatente da lista
        }

        //Ordena a lista de combatentes (iniciativa)
        fightersList.sort(comparePos);

        //Preenche a lista de iniciativa
        for(let i = 0; i < fightersList.length; i++){
            elementsList.push(document.createElement('li'));//Cria um item da lista
            elementsList[i].innerHTML = fightersList[i].name;//Insere o nome do combatente
            $('#ol-initiative').append(elementsList[i]);//Inclui o item na iniciativa
        }

        //Mostra/Esconde texto de lista vazia
        if(fighterNum === 0) $('#emptyList').show();//Mostra lista vazia
        else $('#emptyList').hide();//Esconde lista vazia
    })

    //Compara as posições dos combatentes
    function comparePos(a, b){
        if(a.pos < b.pos) {return -1};
        if(a.pos > b.pos) {return 1};
        return 0;
    }
});