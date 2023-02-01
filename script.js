$(document).ready(function(){
    $('#btn-initiative').click(function(){
        let fightersList = [];//Lista de combatentes
        let elementsList = [];//Lista de elementos
        const fighterNum = $('input:checked').length;//Define o número de combatentes
        $('#ol-initiative').html('');//Limpa a lista de iniciativa

        //Preenche a lista com todos os combatentes selecionados
        for(let i = 0; i < fighterNum; i++){
            fightersList.push($(`input:checked:eq(${i})`).val());
        }

        //Preenche a lista de iniciativa
        for(let i = 0; i < fightersList.length; i++){
            elementsList.push(document.createElement('li'));
            elementsList[i].innerHTML = fightersList[i];
            $('#ol-initiative').append(elementsList[i]);
            // $('#ol-initiative').append("<li>Oi</li>");
        }

        //Mostra/Esconde texto de lista vazia
        if(fighterNum === 0) $('#emptyList').show();
        else $('#emptyList').hide();
    })
});
