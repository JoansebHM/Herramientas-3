function get_random(){
    return Math.floor(Math.random() * 3) + 1
}

function check_winner(player_input, pc_input){
    if (((player_input == 1) && (pc_input == 3)) ||
        ((player_input == 2) && (pc_input == 1)) ||
        ((player_input == 3) && (pc_input == 2))){
            return 1
    } else if (player_input == pc_input){
        return 2
    } else {
        return 3
    }
}

function rock_paper_scissors(){
    let player_count = 0
    let pc_count = 0
    const game = {
        1: "piedra",
        2: "papel",
        3: "tijera"
    }

    for (let i = 0; i < 5; i++) {
        let player_input = parseInt(prompt("1 -> piedra\n2 -> papel\n3 -> tijera"));
        let pc_input = get_random()
        let winner = check_winner(player_input, pc_input)
        console.log("---------\nRONDA "+(i + 1)+"\nJugador elige -> "+game[player_input]+"\nMaquina elige -> "+ game[pc_input])
        if (winner == 1){
            console.log("Gano el jugador")
            player_count += 1
        } else if (winner == 2){
            console.log("empate")
        } else {
            console.log("Gana la maquina")
            pc_count += 1
        } 
    }

    console.log("##############\nRESULTADOS\nJugador -> "+player_count+"\nmaquina -> "+pc_count)
    if (player_count < pc_count) {
        console.log("Gano la maquina")
    } else if (player_count == pc_count){
        console.log("Empate, ninguno gano")
    } else {
        console.log("Gano el jugador")
    }
}

function main(){
    console.log(
        "---------------------\nPIEDA PAPEL O TIJERA\n---------------------"+
        "\nJUGADORES\n\n - Jugador\n - Maquina\n\nNUMERO DE RONDAS ==> 5\n\n")
    
    let ans_input = prompt("Desea jugar? (Y / N)")
    if (ans_input.toLowerCase() == "y"){
        console.clear()
        rock_paper_scissors()
    } else {
        console.log("No vas a jugar")
    }
}

main()