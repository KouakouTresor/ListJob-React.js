import React, { Component } from 'react';
class Form extends Component {
    initialState = {
        firstState: "",
        lastname: "",
        job: ""
    };

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            /*  name = la valeur de l'input */
            [name]: value
        })
        console.log(this.state)
    }
    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstname, lastname, job } = this.state;
        return (
            <form onSubmit={this.submitForm}>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" className="form-control" name="firstname" value={firstname} onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" className="form-control" name="lastname" value={lastname} onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="job">Métier</label>
                        <input  className="form-control" type="text" name="job" value={job} onChange={this.handleChange} />
                    </div>
                    <div className="col">
                    <input className="btn btn-success" type="submit" value="Ajouter" />
                    </div>
                </div>
            </form>);

    }

}

export default Form;