import React from 'react';

class Card extends React.Component {
  render() {
    const { article } = this.props;

    return (
      <div className="card mb-3">
        <img src={article.urlToImage ? article.urlToImage: 'https://asset.kompas.com/crops/TMvfB9j0uw-iSW1qXGzlEL79T8k=/0x23:626x441/780x390/data/photo/2020/08/05/5f2a5a1a66dfa.jpg' } className="card-img-top" alt={article.title} />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{`${article.source.name}-${article.publishedAt}`}</h6>
          <p className="card-text">{article.description || ''}</p>
          <a href={article.url} className="btn btn-success">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
