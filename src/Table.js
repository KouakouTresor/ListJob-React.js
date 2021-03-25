import React, {Component} from 'react';

const Head = () => {
   return (
            <thead>
                <tr>        
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Metier</th>
                    <th>Action</th>   
                </tr>
            </thead>
   );                
}
const Body = (props) => {
    const tableRows = props.personData.map((person, i) => {
        return (
            <tr key={i}> 
                <td>{person.lastname}</td>
                <td>{person.firstname}</td>
                <td>{person.job}</td>
                <td>
                        <button className="btn btn-info" onClick={()=>props.removePerson(i)}>Supprimer</button>
                </td>
            </tr>

        );
    });
    return ( 
            <tbody>
                {tableRows}
            </tbody>       
    );
}
class Table extends Component {
  render() {
    const {personData, removePerson, deleteAllPersons} = this.props; // ou : const personData = this.props.personData;
       return(
           <div>
               <table className="mt-4 table table-striped">
                    <Head />
                    <Body personData = {personData} removePerson ={removePerson}/>
                </table>
                <button className="btn btn-danger" onClick={() => deleteAllPersons()}>Supprimer tous</button>
           </div>
           
       )
    }
}
export default Table;