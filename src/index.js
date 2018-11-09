import React from "react";
import ReactDOM from "react-dom";
import GeboekteUren from "./GeboekteUren.js";
import "./styles.css";

class App extends React.Component {
  state = {
    urenArray: [
      { project: "Urenregistratie app", uren: 5, dag: "Maandag" },
      { project: "Avinty app", uren: 2, dag: "Dinsdag" }
    ],
    newProject: "",
    newHours: "",
    newDag: "",
    dagenArray: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag"],
    registratie: [{ project: "", uur: "", dag: "" }]
  };

  saveNewRegistration = registration => {
    const newDagItem = {
      project: this.state.newProject,
      uren: this.state.newHours,
      dag: this.state.newDag
    };
    const newArrayItem = this.state.urenArray.concat(newDagItem);
    console.log(newArrayItem);
    this.setState({ urenArray: newArrayItem });
  };

  saveProjectName = e => {
    this.setState({ newProject: e.target.value });
  };
  saveHours = e => {
    this.setState({ newHours: e.target.value });
  };
  saveDag = e => {
    this.setState({ newDag: e.target.value });
  };
  render() {
    return (
      <div className="app">
        <div className="header">Avinty urenregistratie</div>
        <div className="app-content">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={this.state.newProject}
                    name="nieuwProject"
                    onChange={this.saveProjectName}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.newHours}
                    name="nieuwUur"
                    onChange={this.saveHours}
                  />
                </td>
                <td>
                  <input type="text" name="nieuwDag" onChange={this.saveDag} />
                </td>
                <td>
                  <button onClick={this.saveNewRegistration}>Opslaan</button>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr className="header">
                <td colSpan="35">Project</td>
                <td colSpan="35">Uren</td>
                <td colSpan="35">Dag</td>
                <td colSpan="35" />
                <td colSpan="35" />
              </tr>
              {this.state.urenArray.map(uurItem => {
                return <GeboekteUren urenArray={uurItem} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
