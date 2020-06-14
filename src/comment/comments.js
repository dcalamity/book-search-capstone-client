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
  commentsOutput =  (() => {
     
    if(this.state.error !== ''){
      return(
        <li>{this.state.error}</li>
      ) 
    }
    else {
      let commentList = this.state.comments.map((comment,key) => {
        console.log(comment)
        return(
        <li key={key}>{comment.book_comment}</li>
        )
      })
      return commentList;
    }
  })

  render () {


    
    
    return (
      <div>
        <h1>Here are the comments.{this.props.bookId}</h1>
        <ul className="comment_list">{this.commentsOutput()}</ul> 
      </div>
    )
  }
}

export default Comments;