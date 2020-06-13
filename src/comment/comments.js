import React, {Component} from 'react'
import config from '../config';

class Comments extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      bookId: '',
      comments:[], 
      error: ''
    }
  }

    componentDidMount (){
      let bookId = this.props.bookId;
      console.log(bookId)

      let getCommentsByBookId = `${config.API_ENDPOINT}/comments/book/${bookId}`

      fetch(getCommentsByBookId)
      .then(response => response.json())
      .then(data => {
        if(data.length == 0){
          this.setState({
          error: 'no comments'
         })
        }
        else(
          this.setState({
            comments: data
          })
        )
        // console.log(data)
        
      })
      .catch(error => {
        console.log(error)
      })

  }

  render () {
    let commentObject = {};
    if(this.state.error == ''){
      commentObject = this.state.comments;
    }
    else {
      commentObject = this.state.error
    }
    console.log(commentObject)
    return (
      <div>
        <h1>Here are the comments.{this.props.bookId}</h1>
        
      </div>
    )
  }
}

export default Comments;