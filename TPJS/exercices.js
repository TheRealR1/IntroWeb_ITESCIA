
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

var listeCapitalesPays = [
    {
        "pays" : "France",
        "capitale" : "Paris"
    },
    {
        "pays" : "Espagne",
        "capitale" : "Madrid"
    },
    {
        "pays" : "Italie",
        "capitale" : "Rome"
    }
];

function creationForm2Textes(id) {
    var codeHtml = "<form id=\"" + id + "\">";

    codeHtml += "<label for='texte1'>Texte 1</label>" +
                "<input type='text' id='texte1'/>" +
                "<label for='texte2'>Texte 2</label>" +
                "<input type='text' id='texte2'/>" +
                "<button type='submit' onclick='copieTexteChamp()'>Copier</button>";

    codeHtml += "</form>";

    document.write(codeHtml);
}

function creationFormListeCapitale(id) {
    var codeHtml = "<form id=\"" + id + "\">";

    codeHtml += "<label for='pays'>Pays</label>" +
                "<select id='pays' name='pays' onchange='renseignerCapitale()'>";
                
    listeCapitalesPays.forEach(function(capitalePays) {
        codeHtml += "<option value='" + capitalePays.capitale + "'>" + capitalePays.pays + "</option>";
    });            
    
    codeHtml += "</select>" +
                "<label for='capitale'>Capitale</label>" +
                "<input type='text' id='capitale' value='" + listeCapitalesPays[0].capitale + "'/>" +
                "<button type='submit'>Chercher</button>";

    codeHtml += "</form>";

    document.write(codeHtml);
}

function creationFormTexte1Ou2(idForm, idChamp) {
    var codeHtml = "<form id=\"" + idForm + "\" action=\"#\">";

    codeHtml += "<label for='" + idChamp + "'>Texte " + idChamp + "</label>" +
                "<input type='text' id='" + idChamp + "'/>" +
                "<button type='submit' ";
    
    if (idChamp == "champ_1") {
        codeHtml += "onclick='copierForm1To2()'";
    } else {
        codeHtml += "onclick='copierForm2To1()'";
    }
                
    codeHtml += ">Copier</button>";

    codeHtml += "</form>";

    document.write(codeHtml);
}

var listeQuestionQCM = [
    {
        "question" : "Etes-vous vivant ?",
        "reponses" : [{ 0:"oui"}, {1:"non" }],
        "reponseFinale" : "oui"
    },
    {
        "question" : "1 + 1 ?",
        "reponses" : [{ 0:"0"}, {1:"2"}, {2:"11"}, {3:"42" }],
        "reponseFinale" : "2"
    }
];

function creationFormQCM(id) {
    var codeHtml = "<form id=\"" + id + "\">";

    listeQuestionQCM.forEach(function(questionQCM) {
        
    });
    for (var i = 0; i < listeQuestionQCM.length; i++) {
        codeHtml += "<label for='question_'" + i + ">Question " + (i+1) + " - " + listeQuestionQCM[i].question + " : </label>" +
                    "<select id='question_" + i + "' name='question_" + i + "'>";
                
        for (var rep = 0; rep < listeQuestionQCM[i].reponses.length; rep++) {
            codeHtml += "<option value='" + listeQuestionQCM[i].reponses[rep][rep] + "'>" + listeQuestionQCM[i].reponses[rep][rep] + "</option>";
        }          
    
        codeHtml += "</select><br>";
    }

    codeHtml += "<label for='nbBonneRep'>Note : </label>" +
                "<input type='text' id='nbBonneRep' value=''/>" +
                "<button type='submit' onclick='corrigerQCM()'>Corriger</button>";

    codeHtml += "</form>";

    document.write(codeHtml);
}

function copieTexteChamp() {
    texte2.value = texte1.value;
}

function renseignerCapitale() {
    capitale.value = pays.value;
}

function copierForm1To2() {
    champ_2.value = champ_1.value;
}

function copierForm2To1() {
    champ_1.value = champ_2.value;
}

function corrigerQCM() {
    var note = 0;
    for (var i = 0; i < listeQuestionQCM.length; i++) {
        if ($("#formQCM select").eq(i)[0].value == listeQuestionQCM[i].reponseFinale) {
            note++;
        }
    }
    nbBonneRep.value = note + "/" + listeQuestionQCM.length;
}

function test() {
    $(this).parent().children("select").each(function() {console.log("une question")});
}

function exo6() {    
    creationForm2Textes("form2Texte");
    creationFormListeCapitale("formCapitale");

    // Création des 2 forms
    for (var i = 0; i < 2; i++) {
        creationFormTexte1Ou2("form-" + i, "champ_" + (i + 1));
    }

    creationFormQCM("formQCM");
    // Test de this pour savoir nb question QCM
    $("#formQCM button").on("click", test);
}

//exo6();

var openedWindow;

function openWindow() {
    openedWindow = window.open('https://github.com/TheRealR1/IntroWeb_ITESCIA');
}

function closeOpenedWindow() {
    openedWindow.close();
}

function exo8() {
    openWindow();

    document.write("<p>Fermer fenêtre <a href='#' onmouseover='closeOpenedWindow()'>X</a>.</p>");
}

//exo8();

function creationFormTexte(idForm, idChamp, nomFonction) {
    var codeHtml = "<form id=\"" + idForm + "\" action=\"#\">";

    codeHtml += "<label for='" + idChamp + "'>Texte " + idChamp + " : </label>" +
                "<input type='text' id='" + idChamp + "'/>" +
                "<button type='submit' onclick='" + nomFonction + "(" + idChamp +".value)'>Vérifier</button>";

    codeHtml += "</form>";

    document.write(codeHtml);
}

function creationFormLogin(idForm, nomFonction) {
    var codeHtml = "<form id=\"" + idForm + "\" action=\"#\">";

    codeHtml += "<label for='login'>Login : </label>" +
                "<input type='text' id='login'/>" +
                "<label for='mdp'>Mot de passe : </label>" +
                "<input type='password' id='mdp'/>" +
                "<button type='submit' onclick='" + nomFonction + "(login.value, mdp.value)'>Se connecter</button>";

    codeHtml += "</form>";

    document.write(codeHtml);
}

function verifAdresseMail(mail) {
    var regex = /^[^@]*@[^@]*\.xy$/;

    if (regex.test(mail)) {
        alert("Adresse mail correcte.");
    }
}

function verifNumeroTel(tel) {
    var regex = /^([0-9]{2}\.){4}[0-9]{2}$/;

    if (regex.test(tel)) {
        alert("Numéro téléphone correct.");
    }
}

listeLogin = [
    {
        "login" : "r1",
        "mdp" : "nomdp"
    },
    {
        "login" : "erwan",
        "mdp" : "mdp"
    }
];

function connexionLogin(login, mdp) {
    var logged = false;
    listeLogin.forEach(function(connexion) {
        if (connexion.login == login && connexion.mdp == mdp) {
            logged = true;
        }
    });

    if (logged) {
        alert("Vous êtes connecté !");
    } else {
        alert("Vous n'êtes pas connecté !");
    }
}

function exo9() {
    creationFormTexte("formAdrMail", "mail", "verifAdresseMail");
    creationFormTexte("formNumTel", "tel", "verifNumeroTel");
    creationFormLogin("formLogin", "connexionLogin");
}

//exo9();

function changementImage() {
    $("#imageChgmt").attr("src", "./smiley.png");
}

function exo10() {
    document.write("<p>Changer <a href='#' onmouseover='changementImage()'>image</a>.</p>");
    document.write("<img id='imageChgmt' style='width:200px' src='#' alt='Aucune image'/><br>");
}

exo10();