import React, {Component} from 'react'
import config from '../config';

class Comments extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      bookId: '',
      collectionId: '',
      comments:[], 
      error: ''
    }
  }

    componentDidMount (){
      let bookId = this.props.bookInfo.bookId;
      let collectionId = this.props.bookInfo.collectionId;
      console.log(this.props)

      let getCommentsByBookId = `${config.API_ENDPOINT}/comments/book/${bookId}`

      fetch(getCommentsByBookId)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.length == 0){
          this.setState({
          error: 'no comments'
         })
        }
        else(
          this.setState({
            comments: data,
            collectionId: collectionId
          })
        )
        // console.log(data)
        
      })
      .catch(error => {
        console.log(error)
      })
  }

  commentsOutput =  (() => {
    
    if(this.state.error !== ''){
      return(
        <li>{this.state.error}</li>
      ) 
    }
    else {
      let commentList = this.state.comments.map((comment,key) => {
        
        return(
        <div key={key}>
          <li key={key}>{comment.book_comment}</li>
          <button onClick={this.deleteComment} name="bookId" value={comment.id}>Delete</button>
        </div>
        
        )
      })
      return commentList;
    }
  })


  deleteComment(event) {

    let commentId = event.target.value;
    const requestOptions = {
      method: 'DELETE'
    };

    event.preventDefault();
    
    
    fetch(`${config.API_ENDPOINT}/comments/comment/${commentId}`, requestOptions)

    .then(response => {
      console.log(response)
      // window.location = `/booklist/show/${bookId}`
    })

    .catch(err => {
      console.log(err);
    })

  }

  render () {
    console.log(this.state.collectionId)

    
    
    return (
      <div>
        <h1>Here are the comments.</h1>
        
        <ul className="comment_list">{this.commentsOutput()}</ul> 
      </div>
    )
  }
}

export default Comments;