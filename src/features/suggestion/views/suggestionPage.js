import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import NavBar from '../../shared/navigationBar';
import { theme } from './styles'
import { Input } from '@material-ui/core';
import AlertModal from '../../shared/alertModal'
export class SuggestionPage extends PureComponent {
  state = {
    searchtxt: '.',
    fieldname: undefined,
    episodes: [],
    message: '',
    name: ''
  }
  setFields = (value, field) => {
    this.setState({
      [field]: value
    });
  };
  sendSuggestion = async () => {
    this.props.sendSuggestion(this.state)
  }
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <React.Fragment >
        <ThemeProvider theme={theme}>
          <Grid container className={classes.components} spacing={2}>
            <NavBar classes={classes} handleChange={this.setFields} pageTitle={''}/>
            <span className={classes.suggestiontext}>Envie sua sugestão</span>

            <Grid item xs={12}>
              <Grid container spacing={2} className={classes.content}>
                <Grid className={classes.formGrid}>
                  <Input
                    disableUnderline={true}
                    className={classes.name}
                    onChange={e => this.setFields(e.target.value, 'name')}
                    placeholder={"Seu Nome"}
                    value={this.state.name}
                  />
                  <Input className={classes.message}
                    onChange={e => this.setFields(e.target.value, 'message')}
                    value={this.state.message} placeholder={'Mensagem'} />
                  <AlertModal author={this.state.name} sendSuggestion={this.sendSuggestion} />

                </Grid>
              </Grid>
            </Grid >
          </Grid >
        </ThemeProvider>
      </React.Fragment >
    );
  }
}
const styles = () => ({
  suggestiontext:{
    color: '#FAFAFA',
    width: '100%',
    top: 300,
    position: 'absolute',
    fontSize: 37,
    textAlign: 'center',
    letterSpacing: '0.07em',
  },
  message: {
    position: 'absolute',
    width: 780,
    height: 295,
    left: 0,
    bottom: 106,

    background: '#FFFFFF',
    borderRadius: 5,
  },
  
  name: {

    height: 80,
    width: 780,
    left: 0,
    bottom: 421,
    border: 0,
    background: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
    fontSize: 17,
  },
  formGrid: {
    position: 'absolute',
    width: 780,
    height: 593,
    left: 391,
  },
  components: {

    position: 'absolute',
    width: 1550,
    height: 1080,
    left: 'calc(50% - 1550px/2 + 10px)',
    top: 0,

  },
  content: {
    top: 300,
    height: '100%',
    position: 'absolute'
  },
});

export default withStyles(styles)(SuggestionPage);
