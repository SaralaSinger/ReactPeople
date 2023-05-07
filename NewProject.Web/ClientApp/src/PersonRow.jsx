import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonRow extends React.Component {
    render() {
        return (
            <>
                {this.props.people.map(p => <tr className = {p.age > 65 ? 'table-danger' : ''}><td>{p.firstName}</td><td>{p.lastName}</td><td>{p.age}</td></tr>)}
            </>
        );
    }
}

export default PersonRow;