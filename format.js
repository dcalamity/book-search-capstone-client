constructor(props) {
  super(props);
  this.state = {
    search: '',
    books: [],
    booksFound: [],
    params: {}
  };
}

componentDidMount() {
  const collectionId = this.props.match.params.collectionId;

  // console.log(collectionId)

  let url = `${config.API_ENDPOINT}/books/collection/${collectionId}`;

  // console.log(url)

  fetch(url)

    .then(response => response.json())

    .then(data => {
      // console.log('success:', data)
      this.setState({
        books: data
      })
    })

    .catch(err => {
      console.log(err)
    });

  console.log('Stateful component add book successfully mounted.');
}

changeSearch(search) {
  this.setState({
    search
  });
}
// if an integer is empty, undefinded or null, default it to 0
checkInteger(inputInteger) {
  let outputValue = inputInteger
  if (inputInteger === "") {
    outputValue = 0
  }
  if (inputInteger === undefined) {
    outputValue = 0
  }
  if (inputInteger == null) {
    outputValue = 0
  }
  return outputValue
}

// if a string is undefinded or null, default it to "no details"
checkString(inputString) {
  let outputText = inputString
  if (inputString === undefined) {
    outputText = "no details"
  }
  if (inputString == null) {
    outputText = "no details"
  }
  return outputText
}

// if a URL is undefinded or null, default it to the root url "/"
checkURL(inputURL) {
  let outputURL = inputURL
  if (inputURL === undefined) {
    outputURL = "/"
  }
  if (inputURL == null) {
    outputURL = "/"
  }
  return outputURL
}

// if a URL is undefinded or null, default it to the root url "/"
checkEmptyImage(inputURL) {
  let outputURL = inputURL
  if (inputURL === undefined) {
    outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
  }
  if (inputURL == null) {
    outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
  }
  return outputURL
}

handleSearch = (event) => {
  event.preventDefault();
  // console.log(this.state.search)

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyAOOYu0LFVQ45qOFjMl11H8Mdr2NYDxLqU`)
    .then(response => response.json())
    .then(data => {




      // console.log(data)
      this.setState({
        booksFound: data.items
      })
      // console.log(this.state)
    })

    .catch(err => {
      console.log(err)
    })

}

addBookFromApi(e) {
  console.log('hello there')
  e.preventDefault()

  //create an object to store the search filters
  const data = {}

  //get all the from data from the form component
  const formData = new FormData(e.target)

  console.log(formData)
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
  console.log(this.checkString(data.title))

  let payload = {
    "collection_id": data.collection_id,
    "finished": 0,
    "title": this.checkString(data.title),
    "author": this.checkString(data.author),
    "genre": "NaN",
    "isbn_id": this.checkInteger(data.isbn_id),
    "year_published": this.checkInteger(data.year_published),
    "description": this.checkString(data.description),
    "bookmark_page": 0,
    "book_rating": 0
  }

  console.log(payload)

  fetch(`${config.API_ENDPOINT}/books/collection/${data.collection_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    .then(response => {
      // console.log("response", response)
      window.location = `/book/add/${data.collection_id}`
    })
    .catch(err => {
      console.log(err);
    });

  console.log(payload)

}