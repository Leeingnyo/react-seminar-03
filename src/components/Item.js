import React, { Component } from 'react';

/*
const item = {
  name: 'alphabet',
  img: 'https://images.template.net/wp-content/uploads/2015/06/Bright-Colorful-Printable-Alphabets.jpg',
  hashtags: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 's', 'q', 'u', 'v', 'w', 'z', 'y', 'x', 'r', 't'
  ],
}
*/

class Item extends Component {

  constructor(props) {
    super(props);

    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.handleClickDeregister = this.handleClickDeregister.bind(this);
  }

  handleClickRegister() {
    this.props.register();
  }

  handleClickDeregister() {
    this.props.deregister();
  }

  render() {
    const {item} = this.props;
    const hashtags = item.hashtags.map(hashtag => {
      return <span className="hashtag" key={`${item.name}-${hashtag}`}>{`#${hashtag}`}</span>;
    });
    const controls = this.props.isRegistered
      ? <button onClick={this.handleClickDeregister} />
      : <button onClick={this.handleClickRegister} />;
    return (
      <article className="article">
        <img src={item.img} />
        <h4>{item.name}</h4>
        <p>
          {hashtags}
        </p>
        <div className={'controls ' + (this.props.isRegistered ? 'registered' : 'deregistered')}>
          {controls}
        </div>
      </article>
    );
  }
}

Item.defaultProps = {
  item: {
    hashtags: [],
  },
};

Item.propTypes = {
  item: React.PropTypes.shape({
    hashtags: React.PropTypes.array,
  }),
};

export default Item;
