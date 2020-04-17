import React from "react"
import { connect } from "react-redux";
import { getSmurfs } from "../actions";


const SmurfList = props => {
    return (
        <div>
            <button onClick={() => props.getSmurfs()}>
            POPULATE SMURF
            </button>

        {props.smurfs.map(smurf => (
            <div key = {smurf.id}>
                <h2>Name: {smurf.name}</h2>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
            </div>
        
        ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    };
};

// connecting SmurfList

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfList);





