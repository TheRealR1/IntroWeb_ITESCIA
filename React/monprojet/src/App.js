import React, { Component } from 'react';
import './App.css';

const Administration = ({ nom, tel, email }) => {
  return (
    <div className="card col-xs-3" style={{width: "30%"}}>
      <div className="card-body">
        <h5 className="card-title">
          {nom}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Téléphone : {tel}<br/>
          Email : {email}
        </h6>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departements: [
        {
          nom: "Loire Atlantique",
          code: 44
        },
        {
          nom: "Maine et Loire",
          code: 49
        },
        {
          nom: "Mayenne",
          code: 53
        },
        {
          nom: "Sarthe",
          code: 72
        },
        {
          nom: "Vendée",
          code: 85
        }
      ],
      typeEtablissements: [
        {
          nom: "Caisse primaire d'assurance maladie",
          type: "cpam"
        },
        {
          nom: "Chambre de commerce et d'industrie",
          type: "cci"
        },
        {
          nom: "Crous et ses antennes",
          type: "crous"
        }
      ],
      resultats: [
        {
          features: []
        }
      ]
    }

    this.rechercherAdministration.bind(this);
    this.viderRecherche.bind(this);

  }
  

  rechercherAdministration = () => {
    var departCode = document.getElementById("departCode").value;
    var typeEtab = document.getElementById("typeEtab").value;

    fetch('https://etablissements-publics.api.gouv.fr/v3/departements/' + departCode + '/' + typeEtab)
    .then(res => res.json())
    .then((data) => {
      this.setState({ resultats: data });
    })
    .catch(console.log)
  }

  viderRecherche = () => {
    this.setState({ resultats: []});
  }

  render() {
    return (
      <div className="App">
        
        <h1>Trouver son administration en Pays de la Loire</h1>
        <select id="departCode">
          {
            this.state.departements.map(
              (depart,index) =>
                <option key={index} value={depart.code}>{depart.nom}</option>
              )
          }
        </select>
        <select id="typeEtab">
          {
            this.state.typeEtablissements.map(
              (typeEtab,index) =>
                <option key={index} value={typeEtab.type}>{typeEtab.nom}</option>
              )
          }
        </select>
        <button onClick={ this.rechercherAdministration }>Rechercher une administration</button>
        <button onClick={ this.viderRecherche }>Vider la recherche</button>

        <div className="row offset-1" style={{ marginTop: "20px"}}>
          {
            this.state.resultats["features"] &&
            this.state.resultats["features"].map(
              (res,index) =>
                <Administration key={index} nom={res.properties.nom} tel={res.properties.telephone} email={res.properties.email} />
              )
          }
        </div>
      </div>
    );
  }
}

export default App;
