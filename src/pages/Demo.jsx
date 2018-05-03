import React from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fooDuck from 'ducks/foo';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.increFoo = this.increFoo.bind(this);
  }
  increFoo() {
    const { fooActions } = this.props;
    console.log('fooActions', fooActions);
    fooActions.increFoo();
  }
  render() {
    return (
      <button onClick={() => this.increFoo()}>
        hello world {this.props.foo.count}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  foo: state.foo,
});

const mapDispatchToProps = dispatch => ({
  fooActions: bindActionCreators(fooDuck.creators, dispatch),
});

Demo.propTypes = {
  fooActions: PropTypes.object,
  foo: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
