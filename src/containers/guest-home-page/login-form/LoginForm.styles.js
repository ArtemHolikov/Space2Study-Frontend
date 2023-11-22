export const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  loginButton: {
    width: '100%',
    py: '14px'
  },
  forgotPass: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'primary.900',
    '&:hover': {
      textDecoration: 'underline'
    },
    '&:focus': {
      outline: '2px solid',
      borderRadius: '2px'
    },
    mb: '20px',
    alignSelf: 'end'
  }
}
