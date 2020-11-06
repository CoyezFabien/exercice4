function fonction () {
    // ici la fonction ici function en anglais je l'ai appelé "fonction"
    
    // Les fonctions font partie des briques fondamentales de JavaScript. Une fonction est une procédure JavaScript, un ensemble d'instructions effectuant une tâche ou calculant une valeur. Afin d'utiliser une fonction, il est nécessaire de l'avoir auparavant définie au sein de la portée dans laquelle on souhaite l'appeler.
//     construite avec le mot-clé function, suivi par :

// Le nom de la fonction.
// Une liste d'arguments à passer à la fonction, entre parenthèses et séparés par des virgules.
// Les instructions JavaScript définissant la fonction, entre accolades
    var lastName = document.getElementById("lastName").value;
// .value permet de recuper la valeur du champs de cette ID (permet de récupere ce que l'on marque dans le rectangle blanc pour répondre à la question)
    var firstName = document.getElementById("firstName").value;
    var city = document.getElementById("city").value;
    
    alert(lastName + '\n' + firstName + '\n' + city);
}
// 

// la fonction alert c'est une sorte de petite pop-pup pour lui afficher un message elle s'écrit : alerte('');
// entre les parenthèses on peut mettre une apostrophe ou 2 guillemets pour préciser que c'est une chaine de caractère et à l'intérieur on va mettre un message
// un bloc en Javascript, c’est ce qu’on retrouve entre accolades

// il faut marquer var pour dire que c'est une var ensuite vient le titre de la Var ici lastName

