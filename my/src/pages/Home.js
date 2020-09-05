import React, { useState, useEffect } from 'react';
import { positions } from '@material-ui/system';
import Button from '@material-ui/core/Button'
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const styles = makeStyles((theme) => ({
    box: {
        background: 'linear-gradient(91.85deg, #8459FF 0%, #F200FF 100%)',
        height:'276px'
    },
    textBox: {
        background: 'white',
        height: '200px'
    },
    fontColor: {
        color: '#8459FF'
    },
    button: {
        width: '264px',
        background: '#8459FF',
        color: 'white',
        borderRadius: '25px'
    }
}));

function Home () {
    const history = useHistory()
    const classes = styles()
    const [email, setEmail] = useState('')

    useEffect(() => {
        let newEmail = localStorage.getItem('email')
        if (newEmail) {
            setEmail(newEmail)
        }
    }, [])

    function keluar () {
        localStorage.clear()
        history.push('/')
    }
    
    return (
        <>
        <Box>
            <Box boxShadow={2} borderRadius={10} position="absolute" top='181px' marginX='0px' paddingTop='62px' paddingBottom='62px' left= '427px' zIndex="tooltip" width="40%" className={classes.textBox}>
                    <Box width={1} display='flex' justifyContent='center'>
                        <Box width='465px'>
                        <Typography className={classes.fontColor} variant='h4'>tampilkan alamat email yang digunakan untuk login</Typography>
                        </Box>
                    </Box>
            {email? <Typography className={classes.font} variant='h4'>{email}</Typography>: <Box height='64px'></Box> }
                <Button className={classes.button} onClick={keluar} variant="contained"><Typography className={classes.font} variant='h6'>Keluar</Typography></Button>
            </Box>
            <Box position="relative" zIndex="modal" width={1} height={1/3} className={classes.box}>
            </Box>
        </Box>  
        </>
    )

}

export default Home;
