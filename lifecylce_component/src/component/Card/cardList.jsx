import React from 'react';
import Card from './cardNews';

class CardList extends React.Component {
  render() {
    const { articles } = this.props;

    return (
      <div className="card-deck">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {articles.map((article) => (
            <div className="col-12 col-sm-6 col-md-4" key={article.title}>
              <Card article={article} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
