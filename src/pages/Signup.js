import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Container, Box, makeStyles, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = makeStyles((theme) => ({
    page: {
        height: "100vh",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    head: {
        color: '#8459FF',
        alignItems: 'end'
    },
    input: {
        padding: 0,
        marginTop: theme.spacing(4),
        width: "400px",
        height: "40px"
    },
    divText: {
        width: '60%'
    },
    submit: {
        marginTop: theme.spacing(4),
        background: 'linear-gradient(90.57deg, #8459FF 0%, #F002FF 100%)',
        width: '100%',
        color: 'white'
    }
}));


function Signup () {
    const classes = styles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfirmPassword] = useState('')
    const history = useHistory()

    
    function changeEmail(event) {
        setEmail(event.target.value)
        console.log(email)
    }

    function changePassword(event) {
        setPassword(event.target.value)
    }

    function changeConfirmPassword(event) {
        setConfirmPassword(event.target.value)
    }

    function submit () {
        history.push('/dashboard')
    }

    return (
        <>
            <Container className={classes.page}>
                <Box display="flex" justifyContent="center" height= "591px" width='600px' boxShadow={2} borderRadius="4px">
                    <Box marginTop='61px' className="form">
                        <div>
                            <Typography component="h1"  variant="h4" className={classes.head}>Welcome</Typography>
                            <Box width={1} display='flex' justifyContent='center'>
                                <div className={classes.divText}>
                                    <Typography variant="subtitle1" component="h1">Silahkan buat akun untuk melanjutkan</Typography>
                                </div>
                            </Box>
                        </div>
                        <div className="signup">
                            <form onSubmit={submit} >
                                <Box display="flex" flexDirection="column" justifyContent="center">
                                <TextField onChange={changeEmail} className={classes.input} type="text" id="outlined-basic" label="Email" variant="outlined" />
                                <TextField onChange={changePassword} type="password" className={classes.input} id="outlined-basic" label="Password" variant="outlined" />
                                <TextField onChange={changeConfirmPassword} type="password" id="outlined-basic" className={classes.input} label="Ulangi Password" variant="outlined" />
                                </Box>
                                <Button onClick={submit} variant="contained" className={classes.submit}>Daftar</Button>
                            </form>
                            <div className="login bottom">
                                <p>Sudah punya akun? <Link className="daftar" to="/">Masuk</Link></p>
                                
                            </div>
                        </div>
                    </Box>

                   
                </Box>
            </Container>
        </>
    )


}

export default Signup