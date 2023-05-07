import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
import 'bootstrap/dist/css/bootstrap.min.css';

class People extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    onFnChange = (e) => {
        this.setState({ firstName: e.target.value })
    }
    onLnChange = (e) => {
        this.setState({ lastName: e.target.value })
    }
    onAgeChange = (e) => {
        this.setState({ age: e.target.value })
    }
    onAddClick = () => {
        const copy = [...this.state.people];
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        copy.push(person);
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }
    onClearClick = () => {
        this.setState({ people: [], firstName: '', lastName: '', age: '' });
    }
    render() {
        return (<>
            <PersonForm onClearClick={this.onClearClick} onAddClick={this.onAddClick}
               onFnChange={this.onFnChange} onLnChange={this.onLnChange} onAgeChange={this.onAgeChange}
                firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age} />
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <PersonRow people={this.state.people} />
                </tbody>
            </table>
        </>);
    };
};

export default People;