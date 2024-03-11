// Question no 25   Alien Colors #1

let aline_color: string[] = ['green','yellow','red'];

let score: number;

let userShot: string = 'green';
                                 // if user input 'green' user will get 5 scores
if(userShot == aline_color[0]){
    score =+ 5;
    console.log(`you got ${score} points`)
}
else{
    console.log('')                         // if color is not green program output will empty.....
}