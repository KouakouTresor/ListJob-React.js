import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
class App extends Component {

    state = {
        persons: []
    };

    removePerson = (index) => {
        const { persons } = this.state;

        this.setState({
            //setState persons: cambiare persons presente nello state originale
            persons: persons.filter((prenom, i) => {
                return i !== index;
            })
        })
    }

    deleteAllPerson = () => {
        this.setState({
            persons: []
        })
    }

    handleSubmit = (person) => {
        this.setState({
            /* con i 3 puntini si riprende il contenuto di persons (con il suo nom, cognom e lavoro) e dopo la virgola si aggiunge ad ogni volta una nuova person  */
            persons: [...this.state.persons, person]
        })
    }
    render() {
        const { persons } = this.state;

        return (
            <div className="App">
                <h1 className="text-center mt-2">Quel est votre métier ?</h1>
                <Form handleSubmit={this.handleSubmit} />
                <Table personData={persons} removePerson={this.removePerson} deleteAllPersons={this.deleteAllPerson} />

            </div>

        );
    }

}

export default App;