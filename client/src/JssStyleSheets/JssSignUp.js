import LoginForm from '../assests/LoginForm.jpg';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FAFAFA',
  },
  body: {
    position: 'relative',
    width: '365px',
    backgroundColor: theme.palette.background.default,
    margin: '100px auto 50px',
    outline: 0,
    overflowY: 'hidden',
    [theme.breakpoints.up('md')]: {
      width: '900px',
    },
  },
  formContainer: {
    overflow: 'hidden',
    padding: '10px 50px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  title: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '51px',
    color: '#1b242f',
  },
  left: {
    textAlign: 'left',
  },
  textTitle: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '28px',
    margin: '0px 0px 10px 0px',
    color: '#1b242f',
  },
  TextField: {
    fontFamily: 'sans-serif',
    width: '100%',
  },
  button: {
    fontWeight: '600',
    color: 'white',
    background: '#c5b1db',
    padding: '10px 27px',
    textTransform: 'none',
    width: '250px',
  },
  loginButton: {
    backgroundColor: 'transparent',
  },
  loginText: {
    textAlign: 'center',
    padding: '10px 55px',
  },
  SignUpImage: {
    width: '50%',
    textAlign: 'center',
    backgroundImage: `url(${LoginForm})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px',
  },
  imageTitle: {
    margin: '30',
    fontFamily: '"Mada", sans-serif',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '51px',
    color: '#ffffff',
  },
  imageText: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '40px',
    color: '#ffffff',
  },
}));
