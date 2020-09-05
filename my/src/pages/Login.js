import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles, FormControlLabel } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import {Box, Typography} from '@material-ui/core'
import HttpsIcon from '@material-ui/icons/Https';
import Button from '@material-ui/core/Button';

const styles = makeStyles((theme) => ({
    page: {
        height: '100vh'
    },
    head: {
        color: '#8459FF',
        alignItems: 'end'
    },
    welocomeLogin: {
        background: "linear-gradient(180deg, #8459FF 0%, #3835DC 100%)",
        textAlign: 'center',
        color: "white"
    },
    between: {
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
    center: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
      padding: 0,
      marginTop: theme.spacing(4),
    },
    submit: {
        marginTop: theme.spacing(2),
        background: 'linear-gradient(90.57deg, #8459FF 0%, #F002FF 100%)',
        width: '100%',
        color: 'white'
    },
    divText: {
        width: '70%'
    }
  }));


function Login () {
    const classes = styles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function changeEmail(event) {
        setEmail(event.target.value)
        console.log(email)
    }

    function changePassword(event) {
        setPassword(event.target.value)
    }

    function submit () {
        localStorage.setItem('email', email)
        history.push('/home')
    }

    return (
        <>
            <Grid container display="flex" className={classes.page}>
           
            <Grid item container xs={6} container alignItems="center" className={classes.welocomeLogin}>
                <Box marginLeft="100px" width="60%" textAlign="left" >
                    <h1 className="hello">Hello World</h1>
                    <p className="text-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel enim vel euismod ac imperdiet morbi egestas cursus eget. Id pharetra, malesuada netus feugiat posuere imperdiet. Sagittis, mattis vel, id donec auctor orci, pellentesque sed. Pulvinar mauris sit sed quam molestie.</p>
                </Box>
            </Grid>
            <Grid item container className={classes.center} alignItems="center" xs={6}>
                <Box container className={classes.center}>
                    <Typography component="h1"  variant="h4" className={classes.head}>Welcome</Typography>
                    <Box width={1} display='flex' justifyContent='center'>
                        <div className={classes.divText}>
                        <Typography variant="subtitle1" component="h1">Silahkan masuk dengan akun Anda untuk melanjutkan</Typography>
                        </div>
                    </Box>
                    <form onSubmit={submit}>
                    <Box display="flex" flexDirection="column">
                        <TextField
                            onChange={changeEmail}
                            className={classes.input}
                            variant="outlined"
                            id="input-with-icon-textfield"
                            placeholder="Email"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Box borderRight={1}>
                                        <PersonIcon />
                                    </Box>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <TextField
                            type="password"
                            onChange={changeEmail}
                            className={classes.input}
                            variant="outlined"
                            id="input-with-icon-textfield"
                            placeholder="Password"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Box borderRight={1}>
                                        <HttpsIcon/>
                                    </Box>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <Box display="flex" className={classes.between} >
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Ingat saya"
                            />
                        <p><Link className="daftar" to="/signup">Daftar</Link></p>
                        </Box>
                    </Box>
                    <Button onClick={submit} variant="contained" className={classes.submit}>Masuk</Button>
                    </form>
                
                 </Box>
            </Grid>
            </Grid>
           
        </>
    )

}

export default Login