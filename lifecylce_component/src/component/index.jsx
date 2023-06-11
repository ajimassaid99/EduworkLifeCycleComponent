import React from 'react';
import CardList from './Card/cardList';
import Navbar from './navbar/navbar';
import Loading from './Loading/loading';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    try {
      this.setState({ isLoading: true });
      const { searchQuery } = this.state;
      const url = `https://newsapi.org/v2/top-headlines?q=${searchQuery}&country=id&apiKey=8433effe354a4a12925b65155fa041be`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.articles.length < 1) {
        this.displayMessage('');
      } else {
        this.setState({ articles: data.articles });
      }
      setTimeout(() => {
       
      }, 2000);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.displayMessage('circular');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = () => {
    this.fetchArticles();
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  displayMessage = (type) => {
    if (type === 'circular') {
      return (
        <div id="app">
          <div className="spinner"></div>
        </div>
      );
    } else if (type === 'data') {
      const { articles } = this.state;
      return <CardList articles={articles} />;
    } else {
      return (
        <div className="card border-danger text-white bg-transparent">
          <div className="card-body text-danger">No Content</div>
        </div>
      );
    }
  };

  render() {
    const { isLoading, articles } = this.state;

    return (
        <div>
        <Navbar logo="React Class News" menuItems={['Home', 'About', 'Contact']} />
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-lg-6">
            <div className="input-group">
              <input
                id="Search"
                type="text"
                className="form-control mr-2"
                placeholder="Search"
                onChange={this.handleInputChange}
              />
              <button className="btn btn-primary" onClick={this.handleSearch}>
                Search
              </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
           
            {isLoading ? (
             <Loading />
            ) : (
              this.displayMessage(articles.length > 0 ? 'data' : 'kosong')
            )}
          </div>
        </div>
      </div> 
    );
  }
}

export default Body;
