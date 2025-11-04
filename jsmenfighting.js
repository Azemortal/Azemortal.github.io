let player1health = 100
let player2health = 100
let sound = ["BOOM!","SMASH!","BOW!","CLANG!"]
let player1lose = ["Player 1's not looking too good","Diabolical left hook by player 2!","Player 1's on the ropes!","Player 2's Dominating!!!"] 
let player2lose = ["Player 2's not looking too good","Diabolical right hook by player 1!","Player 2's on the ropes!","Player 1's Dominating!!!"]
while (true) {
    let randomnumberplayer1 = Math.ceil(Math.random()*10)
    let randomnumberplayer2 = Math.ceil(Math.random()*10)
    let randomsound = Math.ceil(Math.random()*3)
    let randomplayer1lose = Math.ceil(Math.random()*3)
    let randomplayer2lose = Math.ceil(Math.random()*3)
    player2health -= randomnumberplayer1
    player1health -= randomnumberplayer2
    if ((player2health <= 0) && (player1health <= 0)){
        window.alert("both players are dead!")
        break
    }
    else if ((player2health <= 0)){
        window.alert("player 2 has died. game over")
        break
    }
    else if ((player1health <= 0)){
        window.alert("player 1 has died. game over")
        break
    }
    else{
        window.alert(sound[randomsound])
        if (player2health > player1health){
            window.alert(player1lose[randomplayer1lose])
        }
        else if (player2health < player1health){
            window.alert(player2lose[randomplayer2lose])
        }
        else{
            window.alert("The're neck n neck people!!!")
        }
        console.log(player1health)
        console.log(player2health)
    }
}