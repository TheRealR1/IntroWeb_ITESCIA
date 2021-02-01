import React, { Component } from 'react';
import './App.css';

const Administration = ({ nom, departement, tel, children }) => {
  return (
    <div class="panel panel-default">
      <h5>{nom} - {departement}</h5>
      <p>Téléphone : {tel}</p>
      <p>Email : {children}</p>
    </div>
  )
}

class App extends Component {
  state = {
    departements: [
      "Loire Atlantique",
      "Maine et Loire",
      "Mayenne",
      "Sarthe",
      "Vendée"
    ],
    typeEtablissements: [
      "Caisse primaire d'assurance maladie",
      "Chambre de commerce et d'industrie",
      "Crous et ses antennes"
    ],
    resultats: [
      {
        nom: "nom"
      }
    ]
  }

  rechercherAdministration() {
    
  }

  viderRecherche() {
    
  }

  render() {
    return (
      <div className="App">
        
        <h1>Trouver son administration en Pays de la Loire</h1>
        <select>
          {
            this.state.departements.map(
              (depart,index) =>
                <option value={index}>{depart}</option>
              )
          }
        </select>
        <select>
          {
            this.state.typeEtablissements.map(
              (typeEtab,index) =>
                <option value={index}>{typeEtab}</option>
              )
          }
        </select>
        <button onClick={ this.rechercherAdministration }>Rechercher une administration</button>
        <button onClick={ this.viderRecherche }>Vider la recherche</button>
        <br/>
        <Administration nom="Centre local des oeuvres" departement="Maine-et-Loire" tel="+33 2 41 25 45 80">
          crous.clous@nantes.fr
        </Administration>
        <Administration nom="Centre local des oeuvres" departement="Maine-et-Loire" tel="+33 2 41 25 45 80"/>

      </div>
    );
  }
}

export default App;
