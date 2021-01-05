import React, {Component} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap' ;
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toogle = () => {
        this.setState({
            modal: !this.state.modal 
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDEfault();
        
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toogle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toogle={this.toogle}
                >
                    <ModalHeader
                        toogle={this.toogle}
                    >
                        Add to ShoppingList
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Shopping Item"
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                  
                                    
                                >
                                        Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};


export default connect()(ItemModal)