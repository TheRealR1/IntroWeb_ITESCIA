
function exo1() {
    
    var codeHtml = "<p>une ligne de texte</p>" + 
                    "<p>un ensemble de paragraphes</p>" +
                    "<p><b>une ligne en gras</b></p>" +
                    "<table border=1>" +
                    "<tr>" +
                    "<td>1ere case</td>" +
                    "<td>2nde case</td>" +
                    "<td>3eme case</td>" +
                    "</tr>" + 
                    "<tr>" +
                    "<td>et voici</td>" +
                    "<td>une seconde</td>" +
                    "<td>ligne</td>" +
                    "</tr>" +
                    "</table>" +
                    "texte gras sans balise".bold();

    document.write(codeHtml);
}

//exo1();

function exo2() {
    var nombre = 10;
    document.write("<p>La valeur du nombre est " + nombre + ".</p>");

    var chaine = "ceci est une chaine";
    document.write("<p>La valeur de la chaine est " + chaine + ".</p>");

    document.write("<p>La valeur du nombre est " + nombre + " et celle de la chaine est " + chaine + ".</p>");

    var codeHtml = "<table border=1>" +
                    "<tr>" +
                    "<td>" + nombre + "</td>" +
                    "</tr>" + 
                    "<tr>" +
                    "<td>" + chaine + "</td>" +
                    "</tr>" +
                    "</table>";

    document.write(codeHtml);
}

//exo2();

function ecrireUneValeur(val) {
    document.write("<p>" + val + "</p>");
}

function ecrireUnTabDe4Valeurs(val1, val2, val3, val4) {
    var codeHtml = "<table border=1>" +
                    "<tr>" +
                    "<td>" + val1 + "</td>" +
                    "<td>" + val2 + "</td>" +
                    "</tr>" + 
                    "<tr>" +
                    "<td>" + val3 + "</td>" +
                    "<td>" + val4 + "</td>" +
                    "</tr>" +
                    "</table>";
    
    document.write(codeHtml);
}

function exo3() {
    exo2();

    ecrireUneValeur("ceci est une valeur");
    ecrireUnTabDe4Valeurs("val var 1", "val var 2", "val var 3", "val var 4");
}

//exo3();

function messageAlert(val) {
    alert(val);
}

function boutonClick() {
    messageAlert("un texte que vous voulez");
}

function exo4() {
    $("#bouton").on("click", function() {  })
}

//exo4();

function testIf10(nb) {
    var nombre = nb;
    if (nombre < 10) {
        console.log("inf à 10");
    } else if (nombre > 10) {
        console.log("sup à 10");
    } else {
        console.log("egal à 10");
    }
}

function de1a10() {
    for (var i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}

function creationTableau(ligne, colonne) {
    
    var codeHtml = "<table border=1>";
    for (var i = 0; i < ligne; i++) {
        codeHtml += "<tr>";
        for (var j = 0; j < colonne; j++) {
            codeHtml += "<td>Ligne " + (i + 1) + " - Colonne "+ (j + 1) +"</td>"
        }
        codeHtml += "</tr>";
    }
    codeHtml += "</table>"

    document.write(codeHtml);
}

function exo5() {
    testIf10(5);
    de1a10();
    creationTableau(10, 10);

}

//exo5();
