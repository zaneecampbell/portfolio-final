import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../assets/particles-config.json';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    githubIcon: {
        width: '75px', 
        height: '75x', 
        color: 'white', 
        marginTop: '10px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    tabRoot: {
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1,
            maxWidth: '25vw'
        }
    },
    appBar: {
        background: '#222222',
        color: 'white',
    },
    indicator: {
      backgroundColor: '#9c27b0',
    },
    label: {
        fontSize: '3.5vw',
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px'
        }
    }
  })

class Header extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        return (
            <AppBar position='fixed' className={classes.appBar} >
            <Grid container>
                <Grid item xs={false} md={2}>
                {/* Empty placeholder to center tabs */}
                </Grid>
                <Grid item xs={12} md={8}>
                    <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    classes={{indicator: classes.indicator}}
                    centered
                    >   
                            <Tab label="Top" href='#top' classes={{label: classes.label, root: classes.tabRoot}} />
                            <Tab label="About" href='#about' classes={{label: classes.label, root: classes.tabRoot}} />
                            <Tab label="Portfolio" href='#portfolio' classes={{label: classes.label, root: classes.tabRoot}} />
                            <Tab label="Contact" href='#contact' classes={{label: classes.label, root: classes.tabRoot}} />
                    </Tabs>
                </Grid>
                <Grid item xs={false} md={2}>
                    <a target='_blank' href='https://github.com/zaneecampbell'>
                        <SvgIcon viewBox='0 0 500 500' className={classes.githubIcon} >
                            <path d="M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"></path>
                        </SvgIcon>
                    </a>
                </Grid>
                </Grid>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);

// done