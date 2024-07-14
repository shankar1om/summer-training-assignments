class patternOfChar {
    charA() {
        let n = 9;
        let pattern = "";
        let d = Math.floor(n / 2) + 1;
        for (let i = 1; i <= d; i++) {
            for (let j = 1; j <= n; j++) {
                if ((i == 1 && j == d) || (i == Math.floor(d / 2 + 1) && j > d - i && j < d + i)) {
                    pattern += "*";
                }
                else if (i > 1 && (j == d - i + 1 || j == d + i - 1)) {
                    pattern += "*";
                }
                else {
                    pattern += " ";
                }
            }
            pattern += "\n";
        }
        return pattern;
    }
    charE() {
        let n = 5;
        let pattern = "";
        let d = Math.floor(n/2)+1;
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                if(i==1 || i==d || i==n || j==1 ){
                    pattern += " *";
                }
                else{
                    pattern += " ";
                }
            }
            pattern+="\n";
        }
        return pattern;
    }
    charI(){
        let n = 5;
    let pattern = "";
    let d = Math.floor(n/2)+1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(i==1 || i==n || j==d ){
                pattern += "*";
            }
            else{
                pattern += " ";
            }
        }
        pattern+="\n";
    }
    return pattern;
    }
    charO(){
        let n = 5;
    let pattern = "";
    // let d = Math.floor(n/2)+1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(i==1 || i==n){
                if(j>1 && j<n){
                    pattern += "*";
                }
                else{
                    pattern += " ";
                }
            }
            else{
                if(j==1 || j==n){
                    pattern += "*";
                }
                else {
                    pattern += " ";
                }
            }
        }
        pattern+="\n";
    }
    return pattern;
    }
    charU(){
        let n = 5;
    let pattern = "";
    // let d = Math.floor(n/2)+1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(i==n){
                if(j>1 && j<n){
                    pattern += "*";
                }
                else{
                    pattern += " ";
                }
            }
            else{
                if(j==1 || j==n){
                    pattern += "*";
                }
                else {
                    pattern += " ";
                }
            }
        }
        pattern+="\n";
    }
    return pattern;
    }
}
function caller(char) {
    if (char == "A") {
        let print = new patternOfChar();
        console.log(print.charA(char));
    }
    else if (char == "E") {
        let print = new patternOfChar();
        console.log(print.charE(char));
    }
    else if (char == "I") {
        let print = new patternOfChar();
        console.log(print.charI(char));
    }
    else if (char == "O") {
        let print = new patternOfChar();
        console.log(print.charO(char));
    }
    else if (char == "U") {
        let print = new patternOfChar();
        console.log(print.charU(char));
    }
    else{
        console.log("enter valid character choose among : A E I O U ")
    }
}
caller("A");
caller("E");
caller("I");
caller("O");
caller("U");
