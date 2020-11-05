import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import axios from 'axios';

class AddProductImage extends Component {
  state = {
    image: {},
  };

  handleSubmit = (e) => {
    let { id } = this.props.match.params;
    console.log(this.state);
    const data = new FormData();
    data.append('image', this.state.image);

    axios
      .patch(`http://localhost:4000/api/product/${id}/upload-img`, data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    // this.setState({
    //   name: '',
    //   description: '',
    // });
  };
  render() {
    return (
      <div className="container ">
        <h4>Post form</h4>
        <Form>
          <FormGroup>
            <FormControl
              type="file"
              onChange={(e) => this.setState({ image: e.target.files[0] })}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit}>add image</Button>
      </div>
    );
  }
}

export default AddProductImage;
