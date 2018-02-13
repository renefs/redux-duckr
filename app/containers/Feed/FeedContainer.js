import React, { PropTypes } from 'react'
import { Feed } from 'components'
import { connect } from 'react-redux'

const FeedContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
  },

  render () {
    return (
      <div>
        <Feed />
      </div>
    )
  },
})

export default connect(
  (state) => ({ isAuthed: state.isAuthed })
)(FeedContainer)
