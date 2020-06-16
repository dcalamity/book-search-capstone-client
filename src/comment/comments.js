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
      // console.log(bookId)

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
            comments: data
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
        // console.log(comment)
        return(
        <div>
          <li key={key}>{comment.book_comment}</li>
          <button onClick={this.deleteComment} name="bookId" value={comment.id}>Delete</button>
        </div>
        
        )
      })
      return commentList;
    }
  })


  deleteComment(event) {
    alert('delete CLICKED!')
   let bookId = event.target.value;
    console.log(bookId)
  }

  render () {
    console.log(this.state)

    
    
    return (
      <div>
        <h1>Here are the comments.</h1>
        
        <ul className="comment_list">{this.commentsOutput()}</ul> 
      </div>
    )
  }
}

export default Comments;