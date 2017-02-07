import React, { Component } from 'react';

/*
const dummyItem = {
  name: 'alphabet',
  img: 'https://images.template.net/wp-content/uploads/2015/06/Bright-Colorful-Printable-Alphabets.jpg',
  hashtags: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 's', 'q', 'u', 'v', 'w', 'z', 'y', 'x', 'r', 't'
  ],
}
*/

class Item extends Component {

  render() {
    const {item} = this.props;
    const hashtags = item.hashtags.map(hashtag => {
      return <span className="hashtag" key={`${item.name}-${hashtag}`}>{`#${hashtag}`}</span>;
    });
    return (
      <article className="article">
        <img src={item.img} />
        <h4>{item.name}</h4>
        <p>
          {hashtags}
        </p>
      </article>
    );
  }
}

Item.propTypes = {
  item: React.PropTypes.object,
};

export default Item;
