import React from 'react'
import {Grid, makeStyles, Box, Button, Typography, Link} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';

const style = makeStyles((theme) => ({
    root: {
        display: "flex"
        
    },
    page: {
        height: '100vh',
        backgroundColor: 'white',
        padding: "10px",
        justifyContent: "center"
    },
    boxR: {
        backgroundColor: '#E5E5E5',
        paddingLeft: "20px",
        textAlign: 'left',
        marginRight: '12px'
    },
    button1: {
        width: "224px",
        height: "44px",
        background: "#8459FF"
    },
    button: {
        width: "224px",
        height: "44px",
    },
    buttonSm: {
        width: "115px",
        height: "40px",
    },
    buttonSm1: {
        width: "115px",
        height: "40px",
        background: "#8459FF",
        color: "white"
    },
    logo: {
        width: '64px',
    },
    boxDate: {
        marginTop: "12px",
        height: "80px",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between"

    },
    boxBottom: {
        marginTop: "12px",
        display:"flex",
        
        height: "80vh"

    },
    bottomLeft: {
        backgroundColor: "white",
        padding: "16px",
        width: "147px",
        alignItems: "center",
        marginRight:"12px"
    },
    bottomRigth: {
        backgroundColor: "white",
        alignItems: "center",
        paddingLeft: "12px",
        textAlign: "left"
    },
    card: {
        backgroundColor: '#E5E5E5',
        width: "310px",
        maxHeight: "452px",
        marginRight: "12px",
        padding: "10px",
        borderRadius: '5px'
    },
    field: {
        width: "275px",
        height: "150px",
        backgroundColor: "white",
        marginTop: "12px",
        padding: "6px",
        borderRadius: "3px"

    },
    buttonField: {
        width: "290px"
    },
    buttonRead: {
        color: "#E23F81",
        background: "rgba(226, 63, 129, 0.1)",
        borderRadius: "2px",
        width: "100px"
    }
   

}))

function Dasboard() {
    const classes = style()
    const history = useHistory()
    function keluar () {
        localStorage.clear()
        history.push('/')
    }

    return (
        <>
          <Grid className={classes.root}>
            <Grid  item container xs={2} className={classes.page}>
                <Box marginTop="30px">
                    <Box>
                        <img className={classes.logo} src={require("../assets/logo.png")}/>
                    </Box>
                    <Box marginTop='35px'>
                        <Button variant="contained" color="primary" className={classes.button1}><DashboardIcon/><Box marginLeft="15px"><Typography>Dashboard</Typography></Box></Button>
                    </Box>
                    <Box marginTop='14px'>
                        <Button color="none" className={classes.button}><SettingsIcon/><Box marginLeft="15px"><Typography>Setting</Typography></Box></Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item container xs={10} className={classes.boxR}>
                <Box heigth="56px" width={1} borderBottom={1} display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h4" component="h1"><b>Dashboard</b></Typography>
                    <Link onClick={keluar}><Box display="flex" alignItems="center"><ExitToAppIcon/><Typography variant="subtitle1">logout</Typography></Box></Link>
                </Box>
                <Box display="flex" width={1} className={classes.boxDate}>
                    <Box width={1/6} textAlign="center">
                        <Typography>Week 23</Typography>
                        <Typography>8 June 2020 - 15 June 2020</Typography>
                    </Box>
                    <Box width={1/6} textAlign="center">
                        <Typography>Week 24</Typography>
                        <Typography>8 June 2020 - 15 June 2020</Typography>
                    </Box>
                    <Box width={1/6} textAlign="center">
                        <Typography>Week 25</Typography>
                        <Typography>8 June 2020 - 15 June 2020</Typography>
                    </Box>
                    <Box width={1/6} textAlign="center">
                        <Typography>Week 26</Typography>
                        <Typography>8 June 2020 - 15 June 2020</Typography>
                    </Box>
                    <Box width={1/6} textAlign="center">
                        <Typography>Week 27</Typography>
                        <Typography>8 June 2020 - 15 June 2020</Typography>
                    </Box>
                    <Box width={1/6} textAlign="center">
                        <Typography>Week 28</Typography>
                        <Typography>8 June 2020 - 15 June 2020</Typography>
                    </Box>
                </Box>
                <Box className={classes.boxBottom}>
                    <Grid container item justifyContent="center">
                        <Box className={classes.bottomLeft}>
                            <Box marginTop='35px'  justifyContent="center">
                                <Button className={classes.buttonSm1} ><Typography>Lorem</Typography></Button>
                            </Box>
                            <Box marginTop='14px'>
                                <Button className={classes.buttonSm}><Typography>Ipsum</Typography></Button>
                            </Box>
                            <Box marginTop='14px'>
                                <Button className={classes.buttonSm}><Typography>Dolor</Typography></Button>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid container item >
                        <Box display="flex" flexDirection="column" className={classes.bottomRigth} width="100%">
                            <Box>
                                <Typography variant="h6">This is Title</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Box className={classes.card} width={1/3}>
                                    <Box>
                                        <Typography variant="subtitle1">Section 1</Typography>
                                    </Box>
                                    <Box maxHeight="400px" overflow="scroll">
                                        <Box className={classes.field}>
                                            <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="8px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="12px" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>

                                        </Box >
                                        <Box className={classes.field}>
                                        <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="12px" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className={classes.field}>
                                        <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="12px" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box width="100%" justifyContent="center">
                                        <Button color="#8459FF" className={classes.buttonField}>Add Task</Button>
                                    </Box>
                                </Box>
                                <Box width={1/3} className={classes.card}>
                                <Box>
                                        <Typography variant="subtitle1">Section 1</Typography>
                                    </Box>
                                    <Box maxHeight="400px" overflow="scroll">
                                        <Box className={classes.field}>
                                            <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="12px" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>

                                        </Box >
                                        <Box className={classes.field}>
                                        <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="12px" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>
                                        </Box>
                                        
                                    </Box>
                                    <Box width="100%" justifyContent="center">
                                        <Button color="#8459FF" className={classes.buttonField}>Add Task</Button>
                                    </Box>
                                </Box>
                                <Box width={1/3} className={classes.card}>
                                    <Box>
                                        <Typography variant="subtitle1">Section 1</Typography>
                                    </Box>
                                    <Box maxHeight="400px" overflow="scroll">
                                        <Box className={classes.field}>
                                            <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" paddingX="12px" alignItems="center"  width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>

                                        </Box >
                                        <Box className={classes.field}>
                                        <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="12px" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className={classes.field}>
                                        <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="12px" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className={classes.field}>
                                        <Box >
                                                <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla ur...</Typography>
                                            </Box>
                                            <Box marginY="12px" borderBottom={1}>
                                                <Typography variant="caption">Created : 12 June 2020 00:19:47</Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Box width={1/2}>
                                                    <Button variant="outlined" size="small" className={classes.buttonRead}>Read More</Button>
                                                </Box>
                                                <Box display="flex" justifyContent="space-between" paddingX="12px" alignItems="center" width={1/2}>
                                                    <ShareIcon/>
                                                    <MessageIcon/>
                                                    <EditIcon/>
                                                </Box>
                                            </Box>
                                        </Box>
                                        
                                    </Box>
                                    <Box width="100%" justifyContent="center">
                                        <Button color="#8459FF" className={classes.buttonField}>Add Task</Button>
                                    </Box>
                                </Box>
                                
                            </Box>
                        </Box>

                    </Grid>

                </Box>

            </Grid>
          </Grid>
        </>
    )
}

export default Dasboard
