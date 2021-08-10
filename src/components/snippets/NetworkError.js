import React from 'react'
import { connect } from 'react-redux'
import { clearNetworkError } from '../../store/actions/error'
import Alert from 'react-bootstrap/Alert'

const NetworkError = ({ networkError, clearNetworkError }) => {

  return (
    <div>
      {networkError && (
        <Alert variant='warning' className='alert-container'>
          <button
            type='button'
            className='close'
            onClick={() => clearNetworkError()}
          >
            <span aria-hidden='true'>
              <i className='icon-navigation-close' />
            </span>
            <span className='sr-only'>Close</span>
          </button>
          <Alert.Heading>Network error!</Alert.Heading>
          <p></p>
        </Alert>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  networkError: state.error.networkError,
})

export default connect(mapStateToProps, { clearNetworkError })(NetworkError)
