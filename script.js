

p = Math.random()*10;
clickSound = new Audio('Click sound.mp3');
if (p <= 1) {
     msg = "Me first";
}
if (p > 1) {
     msg = "You first";
}
function xFunction() {
    clickSound.play();
    document.getElementById("msg").innerHTML= msg;
    document.getElementById("choosing").style.display = "none";
    document.getElementById("square").style.display = "block";
     u = "X";
     m = "O";
    if (p <= 1) {
        function randomNumber(n) {
            return Math.floor( Math.random() * n );
        }
        randomChoice = [reActionA, reActionB, reActionC, reActionD,reActionE, reActionF, reActionG, reActionH, reActionI];
        randomChoice[randomNumber(8)]();
        document.getElementById("msg").style.backgroundColor = "red";
    }
    else if (p > 1) {document.getElementById("msg").style.backgroundColor = "green";}
     
}
function oFunction() {
    clickSound.play();
    document.getElementById("msg").innerHTML= msg;
    document.getElementById("choosing").style.display = "none";
    document.getElementById("square").style.display = "block";
     u = "O";
     m = "X";
     if (p <= 1) {
        function randomNumber(n) {
            return Math.floor( Math.random() * n );
        }
        randomChoice = [reActionA, reActionB, reActionC, reActionD,reActionE, reActionF, reActionG, reActionH, reActionI];
        randomChoice[randomNumber(8)]();
        document.getElementById("msg").style.backgroundColor = "red";
    }

    else if (p > 1) {document.getElementById("msg").style.backgroundColor = "green";}
}
clicks = 0; 
function updates() {
    clickSound.play();
    a = document.getElementById("a").innerText;
    b = document.getElementById("b").innerText;
    c = document.getElementById("c").innerText;
    d = document.getElementById("d").innerText;
    e = document.getElementById("e").innerText;
    f = document.getElementById("f").innerText;
    g = document.getElementById("g").innerText;
    h = document.getElementById("h").innerText;
    i = document.getElementById("i").innerText;

    if (a == "X" || a == "O") { document.getElementById("a").onclick = function() {return false}; }
    if (b == "X" || b == "O") { document.getElementById("b").onclick = function() {return false}; }
    if (c == "X" || c == "O") { document.getElementById("c").onclick = function() {return false}; }
    if (d == "X" || d == "O") { document.getElementById("d").onclick = function() {return false}; }
    if (e == "X" || e == "O") { document.getElementById("e").onclick = function() {return false}; }
    if (f == "X" || f == "O") { document.getElementById("f").onclick = function() {return false}; }
    if (g == "X" || g == "O") { document.getElementById("g").onclick = function() {return false}; }
    if (h == "X" || h == "O") { document.getElementById("h").onclick = function() {return false}; }
    if (i == "X" || i == "O") { document.getElementById("i").onclick = function() {return false}; }

    clicks += 1;

    if (j+l+n==15) { document.getElementById("a","b","c").style.backgroundColor = "green";
    document.getElementById("b").style.backgroundColor = "green";
    document.getElementById("c").style.backgroundColor = "green";
    document.getElementById("deActivate").style.display = "block"; }
    else if (q+y+z==15) { document.getElementById("d").style.backgroundColor = "green";
    document.getElementById("e").style.backgroundColor = "green";
    document.getElementById("f").style.backgroundColor = "green";
    document.getElementById("deActivate").style.display = "block";}
    else if (k+v+w==15) { document.getElementById("g").style.backgroundColor = "green";
    document.getElementById("h").style.backgroundColor = "green";
    document.getElementById("i").style.backgroundColor = "green";
    document.getElementById("deActivate").style.display = "block";}
 else if (j+q+k==15) { document.getElementById("a").style.backgroundColor = "green";
    document.getElementById("d").style.backgroundColor = "green";
    document.getElementById("g").style.backgroundColor = "green";
    document.getElementById("deActivate").style.display = "block";}
    else if (l+y+v==15) { document.getElementById("b").style.backgroundColor = "green";
    document.getElementById("e").style.backgroundColor = "green";
    document.getElementById("h").style.backgroundColor = "green";
    document.getElementById("deActivate").style.display = "block";}
    else if (n+z+w==15) { document.getElementById("c").style.backgroundColor = "green";
    document.getElementById("f").style.backgroundColor = "green"; 
    document.getElementById("i").style.backgroundColor = "green";
    document.getElementById("deActivate").style.display = "block";}
    else if (j+y+w==15) { document.getElementById("a").style.backgroundColor = "green"; 
    document.getElementById("e").style.backgroundColor = "green";
    document.getElementById("i").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}
    else if (n+y+k==15) { document.getElementById("c").style.backgroundColor = "red";
    document.getElementById("e").style.backgroundColor = "red";
    document.getElementById("g").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}

    if (j+l+n==6) { document.getElementById("a","b","c").style.backgroundColor = "red";
    document.getElementById("b").style.backgroundColor = "red";
    document.getElementById("c").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}
    else if (q+y+z==6) { document.getElementById("d").style.backgroundColor = "red";
    document.getElementById("e").style.backgroundColor = "red";
    document.getElementById("f").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}
    else if (k+v+w==6) { document.getElementById("g").style.backgroundColor = "red";
    document.getElementById("h").style.backgroundColor = "red";
    document.getElementById("i").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}
 else if (j+q+k==6) { document.getElementById("a").style.backgroundColor = "red";
    document.getElementById("d").style.backgroundColor = "red";
    document.getElementById("g").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}
    else if (l+y+v==6) { document.getElementById("b").style.backgroundColor = "red";
    document.getElementById("e").style.backgroundColor = "red";
    document.getElementById("h").style.backgroundColor = "red"; 
    document.getElementById("deActivate").style.display = "block";}
    else if (n+z+w==6) { document.getElementById("c").style.backgroundColor = "red";
    document.getElementById("f").style.backgroundColor = "red"; 
    document.getElementById("i").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}
    else if (j+y+w==6) { document.getElementById("a").style.backgroundColor = "red"; 
    document.getElementById("e").style.backgroundColor = "red";
    document.getElementById("i").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}
    else if (n+y+k==6) { document.getElementById("c").style.backgroundColor = "red";
    document.getElementById("e").style.backgroundColor = "red";
    document.getElementById("g").style.backgroundColor = "red";
    document.getElementById("deActivate").style.display = "block";}

    if ( clicks >= 4) { document.getElementById("deActivate").style.display = 'block'; 
    document.getElementById("deActivate").style.backgroundColor = 'rgb(0, 0, 0, 0.2)';
}
    if ( clicks >= 0) { document.getElementById("msg").style.display = 'none'; 
        document.getElementById("refresh").style.display = 'block';}
}
function rePlay() { location.reload(true); }
    j = 0;    q = 0;    k = 0;
    l = 0;    y = 0;    v = 0;
    n = 0;    z = 0;    w = 0;

    
function clickFunctionA() {
    document.getElementById("a").innerHTML= u;
    j = 5; 
    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if  ( clicks >= 1 && j+l == 10 && n == 0) {reActionC()}
    else if ( clicks >= 1 && j+n == 10 && l == 0 ) {reActionB()}
    else if ( clicks >= 1 && j+y == 10 && w == 0 ) {reActionI()}
    else if ( clicks >= 1 && j+w == 10 && y == 0 ) {reActionE()}
    else if ( clicks >= 1 && j+q == 10 && k == 0 ) {reActionG()}
    else if ( clicks >= 1 && j+k == 10 && q == 0 ) {reActionD()}

    else if ( b != m && b != u ) { reActionB(); }
    else if ( e != m && e != u ) {  reActionE(); }
    else if ( d != m && d != u ) { reActionD(); }
    updates();
    
}

function clickFunctionB() {
    document.getElementById("b").innerHTML= u;
    l = 5;

    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( a != m && a != u ) { reActionA() }
    else if ( e != m && e != u ) {  reActionE() }
    else if ( c != m && c != u ) { reActionC() }

    updates();
}
function clickFunctionC() {
    document.getElementById("c").innerHTML= u;
    n = 5; 

    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( b != m && b != u ) { reActionB() }
    else if ( e != m && e != u ) {  reActionE() }
    else if ( f != m && f != u ) { reActionF() }

    updates();
}

 
function clickFunctionD() {
    document.getElementById("d").innerHTML= u;
    q = 5; 
     
    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( a != m && a != u ) { reActionA() }
    else if ( e != m && e != u ) {  reActionE() }
    else if ( g != m && g != u ) { reActionG() }

    updates();
}
function clickFunctionE() {
    document.getElementById("e").innerHTML= u;
    y = 5;

    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( a != m && a != u ) { reActionA() }
    else if ( b != m && b != u ) { reActionB() }
    else if ( c != m && c != u ) { reActionC() }
    else if ( d != m && d != u ) { reActionD() }
    else if ( f != m && f != u ) { reActionF() }
    else if ( g != m && g != u ) { reActionG() }
    else if ( h != m && h != u ) { reActionH() }
    else if ( i != m && i != u ) { reActionI() }

    updates();
}
function clickFunctionF() {
    document.getElementById("f").innerHTML= u;
    z = 5; 

    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( c != m && c != u ) { reActionC() }
    else if ( e != m && e != u ) {  reActionE() }
    else if ( i != m && i != u ) { reActionI() }

    updates();
}
function clickFunctionG() {
    document.getElementById("g").innerHTML= u;
    k = 5; 

    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( d != m && d != u ) { reActionD() }
    else if ( e != m && e != u ) {  reActionE() }
    else if ( h != m && h != u ) { reActionH() }

    updates();
}
function clickFunctionH() {
    document.getElementById("h").innerHTML= u;
    v = 5; 

    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( g != m && g != u ) { reActionG() }
    else if ( e != m && e != u ) { reActionE() }
    else if ( i != m && i != u ) { reActionI() }

    updates();
}
function clickFunctionI() {
    document.getElementById("i").innerHTML= u;
    w = 5;

    if      ( j+l == 4 && n == 0 ) {reActionC()}
    else if ( j+n == 4 && l == 0 ) {reActionB()}
    else if ( j+y == 4 && w == 0 ) {reActionI()}
    else if ( j+w == 4 && y == 0 ) {reActionE()}
    else if ( j+q == 4 && k == 0 ) {reActionG()}
    else if ( j+k == 4 && q == 0 ) {reActionD()}
    else if ( l+j == 4 && n == 0 ) {reActionC()}
    else if ( l+n == 4 && j == 0 ) {reActionA()}
    else if ( l+y == 4 && v == 0 ) {reActionH()}
    else if ( l+v == 4 && y == 0 ) {reActionE()}
    else if ( n+l == 4 && j == 0 ) {reActionA()}
    else if ( n+j == 4 && l == 0 ) {reActionB()}
    else if ( n+y == 4 && k == 0 ) {reActionG()}
    else if ( n+k == 4 && y == 0 ) {reActionE()}
    else if ( n+z == 4 && w == 0 ) {reActionI()}
    else if ( n+w == 4 && z == 0 ) {reActionF()}
    else if ( q+j == 4 && k == 0 ) {reActionG()}
    else if ( q+k == 4 && j == 0 ) {reActionA()}
    else if ( q+y == 4 && z == 0 ) {reActionF()}
    else if ( q+z == 4 && y == 0 ) {reActionE()}
    else if ( y+j == 4 && w == 0 ) {reActionI()}
    else if ( y+w == 4 && j == 0 ) {reActionA()}
    else if ( y+l == 4 && v == 0 ) {reActionH()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( y+n == 4 && k == 0 ) {reActionG()}
    else if ( y+k == 4 && n == 0 ) {reActionC()}
    else if ( y+q == 4 && z == 0 ) {reActionF()}
    else if ( y+z == 4 && q == 0 ) {reActionD()}
    else if ( y+v == 4 && l == 0 ) {reActionB()}
    else if ( z+n == 4 && w == 0 ) {reActionI()}
    else if ( z+w == 4 && n == 0 ) {reActionC()}
    else if ( z+y == 4 && q == 0 ) {reActionD()}
    else if ( z+q == 4 && y == 0 ) {reActionE()}
    else if ( k+j == 4 && q == 0 ) {reActionD()}
    else if ( k+q == 4 && j == 0 ) {reActionA()}
    else if ( k+y == 4 && n == 0 ) {reActionC()}
    else if ( k+n == 4 && y == 0 ) {reActionE()}
    else if ( k+v == 4 && w == 0 ) {reActionI()}
    else if ( k+w == 4 && v == 0 ) {reActionH()}
    else if ( v+y == 4 && l == 0 ) {reActionB()}
    else if ( v+l == 4 && y == 0 ) {reActionE()}
    else if ( v+w == 4 && k == 0 ) {reActionG()}
    else if ( v+k == 4 && w == 0 ) {reActionI()}
    else if ( w+v == 4 && k == 0 ) {reActionG()}
    else if ( w+k == 4 && v == 0 ) {reActionH()}
    else if ( w+y == 4 && j == 0 ) {reActionA()}
    else if ( w+j == 4 && y == 0 ) {reActionE()}
    else if ( w+z == 4 && n == 0 ) {reActionC()}
    else if ( w+n == 4 && z == 0 ) {reActionF()}

    else if ( j+l == 10 && n == 0 ) {reActionC()}
    else if ( j+n == 10 && l == 0 ) {reActionB()}
    else if ( j+y == 10 && w == 0 ) {reActionI()}
    else if ( j+w == 10 && y == 0 ) {reActionE()}
    else if ( j+q == 10 && k == 0 ) {reActionG()}
    else if ( j+k == 10 && q == 0 ) {reActionD()}
    else if ( l+j == 10 && n == 0 ) {reActionC()}
    else if ( l+n == 10 && j == 0 ) {reActionA()}
    else if ( l+y == 10 && v == 0 ) {reActionH()}
    else if ( l+v == 10 && y == 0 ) {reActionE()}
    else if ( n+l == 10 && j == 0 ) {reActionA()}
    else if ( n+j == 10 && l == 0 ) {reActionB()}
    else if ( n+y == 10 && k == 0 ) {reActionG()}
    else if ( n+k == 10 && y == 0 ) {reActionE()}
    else if ( n+z == 10 && w == 0 ) {reActionI()}
    else if ( n+w == 10 && z == 0 ) {reActionF()}
    else if ( q+j == 10 && k == 0 ) {reActionG()}
    else if ( q+k == 10 && j == 0 ) {reActionA()}
    else if ( q+y == 10 && z == 0 ) {reActionF()}
    else if ( q+z == 10 && y == 0 ) {reActionE()}
    else if ( y+j == 10 && w == 0 ) {reActionI()}
    else if ( y+w == 10 && j == 0 ) {reActionA()}
    else if ( y+l == 10 && v == 0 ) {reActionH()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( y+n == 10 && k == 0 ) {reActionG()}
    else if ( y+k == 10 && n == 0 ) {reActionC()}
    else if ( y+q == 10 && z == 0 ) {reActionF()}
    else if ( y+z == 10 && q == 0 ) {reActionD()}
    else if ( y+v == 10 && l == 0 ) {reActionB()}
    else if ( z+n == 10 && w == 0 ) {reActionI()}
    else if ( z+w == 10 && n == 0 ) {reActionC()}
    else if ( z+y == 10 && q == 0 ) {reActionD()}
    else if ( z+q == 10 && y == 0 ) {reActionE()}
    else if ( k+j == 10 && q == 0 ) {reActionD()}
    else if ( k+q == 10 && j == 0 ) {reActionA()}
    else if ( k+y == 10 && n == 0 ) {reActionC()}
    else if ( k+n == 10 && y == 0 ) {reActionE()}
    else if ( k+v == 10 && w == 0 ) {reActionI()}
    else if ( k+w == 10 && v == 0 ) {reActionH()}
    else if ( v+y == 10 && l == 0 ) {reActionB()}
    else if ( v+l == 10 && y == 0 ) {reActionE()}
    else if ( v+w == 10 && k == 0 ) {reActionG()}
    else if ( v+k == 10 && w == 0 ) {reActionI()}
    else if ( w+v == 10 && k == 0 ) {reActionG()}
    else if ( w+k == 10 && v == 0 ) {reActionH()}
    else if ( w+y == 10 && j == 0 ) {reActionA()}
    else if ( w+j == 10 && y == 0 ) {reActionE()}
    else if ( w+z == 10 && n == 0 ) {reActionC()}
    else if ( w+n == 10 && z == 0 ) {reActionF()}


    else if ( h != m && h != u ) { reActionH() }
    else if ( e != m && e != u ) { reActionE() }
    else if ( f != m && f != u ) { reActionF() }

    updates();
}

function reActionA() { document.getElementById("a").innerHTML = m; j = 2; }
function reActionB() { document.getElementById("b").innerHTML = m; l = 2; }
function reActionC() { document.getElementById("c").innerHTML = m; n = 2; }
function reActionD() { document.getElementById("d").innerHTML = m; q = 2; }
function reActionE() { document.getElementById("e").innerHTML = m; y = 2; }
function reActionF() { document.getElementById("f").innerHTML = m; z = 2; }
function reActionG() { document.getElementById("g").innerHTML = m; k = 2; }
function reActionH() { document.getElementById("h").innerHTML = m; v = 2; }
function reActionI() { document.getElementById("i").innerHTML = m; w = 2; }

