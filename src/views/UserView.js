import PetCard from "../components/PetCard";
import {MDBContainer, MDBRow} from "mdb-react-ui-kit";
import "../assets/styles/Card.css"
import PetImage from "../assets/images/Pet.png"
import {useContext, useState} from "react";
import {PageContext} from "../Main";
import AddPetModal from "../components/AddPetModal";

export default function UserView(props) {

    const pageContext = useContext(PageContext)

    const [showAddModal, setShowAddModal] = useState(false);
    const toggleShowAddModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowAddModal(!showAddModal);
    }

    function getPetsCards() {
        return props.pets.map((pet) => {
            return <PetCard key={pet.id} pet={pet}/>
        })
    }

    return (
        <MDBContainer id="container" >
            <MDBRow id="row">
                {showAddModal &&
                    <AddPetModal
                        isShow="true"
                        setShow={setShowAddModal}
                        toggleShow={toggleShowAddModal}/>
                }

                {getPetsCards()}
                <PetCard
                    pet={null}
                    image={PetImage}
                    toggleShow={toggleShowAddModal}/>
            </MDBRow>
        </MDBContainer>
    )
}