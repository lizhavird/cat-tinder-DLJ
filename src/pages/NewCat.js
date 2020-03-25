import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleNewCat(this.state.form)
        this.setState({
            form:{
                name: '',
                age: '',
                enjoys: ''
            }
        })
    }

    render(){
        return(
            <>
                <Form ref="form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name" id="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                onChange={ this.handleChange }
                                value={ this.state.form.name }
                            />
                            <Label htmlFor="name" id="age">Age</Label>
                            <Input
                                type="text"
                                name="age"
                                onChange={ this.handleChange }
                                value={ this.state.form.age }
                            />
                            <Label htmlFor="name" id="enjoys">Enjoys</Label>
                            <Input
                                type="text"
                                name="enjoys"
                                onChange={ this.handleChange }
                                value={ this.state.form.enjoys }
                            />
                            <Button id="submit" type="submit">Add New Cat</Button>
                    </FormGroup>
                </Form>
            </>
        )
    }
}

export default NewCat;