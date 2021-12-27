var jugador1 = [];
var jugador2 = [];

var turnos = 0;
var juega = "x";

var gameOver = false;

function reiniciar (){

    location.reload();
    
}

function victoryComprobation(){
    
    console.log("vc");

    //comprobacion victoria
    //jugador1
    if (jugador1[0] == 1 && jugador1[1] == 2 && jugador1[2] == 3){

        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }else if (jugador1[3] == 4 && jugador1[4] == 5 && jugador1[5] == 6){
       
        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }
    else if (jugador1[6] == 7 && jugador1[7] == 8 && jugador1[8] == 9){
       
        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }
    else if (jugador1[0] == 1 && jugador1[3] == 4 && jugador1[6] == 7){
       
        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }
    else if (jugador1[1] == 2 && jugador1[4] == 5 && jugador1[7] == 8){
       
        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }
    else if (jugador1[2] == 3 && jugador1[5] == 6 && jugador1[8] == 9){
       
        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }
    else if (jugador1[0] == 1 && jugador1[4] == 5 && jugador1[8] == 9){
       
        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }
    else if (jugador1[2] == 3 && jugador1[4] == 5 && jugador1[6] == 7){
       
        $("#pezW").removeClass('d-none');
        $("#gato").addClass('d-none');
        gameOver = true;

    }

    //jugador2
    else if (jugador2[0] == 1 && jugador2[1] == 2 && jugador2[2] == 3){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    else if (jugador2[3] == 4 && jugador2[4] == 5 && jugador2[5] == 6){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    else if (jugador2[6] == 7 && jugador2[7] == 8 && jugador2[8] == 9){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    else if (jugador2[0] == 1 && jugador2[3] == 4 && jugador2[6] == 7){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    else if (jugador2[1] == 2 && jugador2[4] == 5 && jugador2[7] == 8){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    else if (jugador2[2] == 3 && jugador2[5] == 6 && jugador2[8] == 9){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    else if (jugador2[0] == 1 && jugador2[4] == 5 && jugador2[8] == 9){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    else if (jugador2[2] == 3 && jugador2[4] == 5 && jugador2[6] == 7){
       
        $("#gatoW").removeClass('d-none');
        $("#pez").addClass('d-none');
        gameOver = true;

    }
    
    if (turnos == 9 && gameOver == false){
        $("#empate").removeClass('d-none');
        gameOver = true;
    }

    if(gameOver ==  true) {
        $('#gato').addClass('d-none');
        $('#pez').addClass('d-none');
    }

}

$(document).ready(function(){

    console.log("document ready");

    $("#pez").removeClass('d-none');

    $('.celda').one('click', function () {

        id = this.id;

        if(juega == "x" && gameOver==false){

            $("#c" + id).addClass('fas fa-fish');
            
            $("#gato").removeClass('d-none');
            $("#pez").addClass('d-none');

            juega = "o";
 
            jugador1[id-1]=parseInt(id);


            console.log("jugo pez");
            turnos++;
            console.log("turno n: " +  turnos);
            

            victoryComprobation();

        }else if(juega == "o" && gameOver == false){
           
            $("#c" + id).addClass('fas fa-cat');
            
            $("#pez").removeClass('d-none');
            $("#gato").addClass('d-none');

            juega = "x";

            jugador2[id-1] = parseInt(id);

            console.log("jugo gato");
            turnos++;
            console.log("turno n: " +  turnos);

            victoryComprobation();
            
        }

    });

});

