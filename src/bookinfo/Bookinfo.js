import React, { Component } from 'react';
import config from '../config';

class Bookinfo extends Component {

  componentDidMount(){
    const bookId = this.props.match.params.bookId;

    let getCollectionByUserId = `${config.API_ENDPOINT}/books/book/${bookId}`;

    console.log(getCollectionByUserId)

    fetch(getCollectionByUserId)
    .then(response => response.json())
    .then(data => { 
      console.log('success:', data)
    })
    .catch(err => {
            console.log(err)
      });
  }

  submitComment(event){
    event.preventDefault();
    console.log('Submit clicked')
    const data = {}
  
    //get all the from data from the form component
    const formData = new FormData(event.target)
  
    // console.log(formData)
    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1]
    }
  
    //assigning the object from the form data to params in the state
    // this.setState({
    //     params: data
    // })
  
    //check if the state is populated with the search params data
    console.log(data)
    let payload = {
      "book_id": data.bookId,
      "book_comment": data.commentContent,
    }

    fetch(`${config.API_ENDPOINT}/comments/book/${data.bookId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    .then(response => {
      // console.log("response", response)
      // window.location = `/book/add/${data.collection_id}` 
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {


    return (
      <div className="App">
      <section>
      <header className="d-header">
          <div className="top-left">Logo</div>
          <div className="top-right">
            <ul className='link'>
              <li><a href="/user/dash">Home</a></li>
              <li><a href="/">Log Out</a></li>
            </ul>
          </div>
     </header>
    <main className="bookinfo">
        <div>
          <h3>Title: The perks of being a wallflower</h3>
          <h3>Author: T.R. Reid</h3>
          <h4>Description: </h4>
          <h2>Comments</h2>
        </div>
        <div>
          <form action="#" method="post" className='comment' type="comment" onSubmit={this.submitComment}>
            <input defaultValue={this.props.match.params.bookId} name="bookId" hidden></input>
            <input className='commentbox' placeholder="Add comment.." type="comment" name="commentContent"></input>
          <button type='submit' className="sbtcm"  >Submit</button>
        </form>
        </div> 
    </main>
    </section>
    </div>
    )
  }
}

export default Bookinfo;