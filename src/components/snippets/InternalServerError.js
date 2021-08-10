import React from 'react'
import { connect } from 'react-redux'
import { clearInternalServerError } from '../../store/actions/error'
import Alert from 'react-bootstrap/Alert'

const InternalServerError = ({
  clearInternalServerError,
  internalServerError,
}) => {
  

  return (
    <div>
      {internalServerError && (
        <Alert variant='danger' className='alert-container'>
          <button
            type='button'
            className='close'
            onClick={() => clearInternalServerError()}
          >
            <span aria-hidden='true'>
              <i className='icon-navigation-close' />
            </span>
            <span className='sr-only'>Close</span>
          </button>
          <Alert.Heading>Something went wrong!</Alert.Heading>
          <p>Please try again later.</p>
        </Alert>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  internalServerError: state.error.internalServerError,
})

export default connect(mapStateToProps, { clearInternalServerError })(
  InternalServerError
)
