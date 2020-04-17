import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from '../actions/'

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
    })

    const changeHandler = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value  });
    }

    const submitForm = e => {
        e.preventDefault();
    }

    return (
        <div >
            <form onSubmit={submitForm}>
                <label>
                    Name:
                    <input
                    name="name"
                    id=""
                    type="text"
                    onChange={changeHandler}
                    value={newSmurf.name}
                    />
                </label>
                <label>
                    Age:
                    <input 
                    name="age"
                    id=""
                    type="text"
                    onChange={changeHandler}
                    value={newSmurf.age}
                    />
                </label>
                <label>
                    Height:
                    <input 
                    name="height"
                    id=""
                    type="text"
                    onChange={changeHandler}
                    value={newSmurf.height}
                    />
                </label>
               

                <button type="submit" onClick={() => props.postSmurf(newSmurf)}>
                    Add A New Smurf To The Village
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    }
}

export default connect(
    mapStateToProps,
    { postSmurf }
)(SmurfForm)