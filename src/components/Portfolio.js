import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
    container: {
        maxWidth: '1920px',
        margin: 'auto'
    },
    paperWrapper: {
        textAlign: 'center',
        background: '#ffffff',
        boxShadow: 'none',
        paddingTop: 50,
        paddingBottom: 25
    },
    paperProjects: {
        boxShadow: 'none',
        marginLeft: '75px',
        marginRight: '75px',
        [theme.breakpoints.down('sm')]: {
            margin: '15px'
        }
    },
    tooltip: {
        fontSize: '40px'
    }
});

export const Portfolio = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.paperWrapper} square={true}>
        <Grid classes={{container: classes.container }}container spacing={0}>
            <Grid item xs={12} style={{paddingBottom: '25px'}}>
                <Typography variant='h2'>
                    Portfolio
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Tooltip classes={{ tooltip: classes.tooltip }} title='Cookbook App'>
                    <a target='_blank' href='https://momscookbook-webapp.herokuapp.com/'>
                        <Paper classes={{root: classes.paperProjects}}>
                            <img width='100%' height='auto' src='images/CookBook App1.png' />
                        </Paper>
                    </a>
                </Tooltip>
            </Grid>
            <Grid item md={6}>
                <Tooltip classes={{ tooltip: classes.tooltip }} title='Voting App'>
                    <a target='_blank' href='https://cool-poll.herokuapp.com/'>
                        <Paper classes={{root: classes.paperProjects}}>
                            <img width='100%' height='auto' src='images/ResultsPage 3-2.png' />
                        </Paper>
                    </a>
                </Tooltip>
            </Grid>
            <Grid item md={6}>
                <Tooltip classes={{ tooltip: classes.tooltip }} title='Weather App'>
                    <a target='_blank' href='https://zaneecampbell.github.io/weather-final/'>
                        <Paper classes={{root: classes.paperProjects}}>
                            <img width='100%' height='auto' src='images/Weather App2.png' />
                        </Paper>
                    </a>
                </Tooltip>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Portfolio);

// Done