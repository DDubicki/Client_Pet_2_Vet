import React, {Component} from "react";
import MenuContainer from "./MenuContainer";

// eslint-disable-next-line react/prefer-stateless-function
export default class PetMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuContainer />
            </div>
        )
    }

}