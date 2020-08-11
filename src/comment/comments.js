import React, {Component} from 'react'
import config from '../config';

class Comments extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      bookId: '',
      collectionId: this.props.collectionId,
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

  commentsOutput =  ((collectionId) => {
    
    if(this.state.error !== ''){
      return(
        <li>{this.state.error}</li>
      ) 
    }
    else {
      console.log(this.state.comments)
      let commentList = this.state.comments.map((comment,key) => {
        
        return(
        <div key={key} className="dltbtm">
          <li key={key}>{comment.book_comment}</li>
          <form onSubmit={this.deleteComment}>
            <input type='hidden' name='collectionId' defaultValue={collectionId}></input>
            <input type='hidden' name='commentId' defaultValue={comment.id}></input>
            <button type="submit">Delete</button>
          </form>
        </div>
        
        )
      })
      return commentList;
    }
  })


  deleteComment(event) {
    event.preventDefault()

    const data = {}

    const formData = new FormData(event.target)

    for (let value of formData) {
        data[value[0]] = value[1]
    }

    console.log(data)

    let {commentId, collectionId} = data;
    console.log(collectionId, commentId)
    const requestOptions = {
      method: 'DELETE'
    };


    
    fetch(`${config.API_ENDPOINT}/comments/comment/${commentId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }

    })

    .then(response => {

      window.location = `/booklist/show/${collectionId}`
    })

  }

  render () {
    console.log(this.state.collectionId)

    
    
    return (
      <div>
        <ul className="comment_list">{this.commentsOutput(this.state.collectionId)}</ul> 
      </div>
    )
  }
}

export default Comments;