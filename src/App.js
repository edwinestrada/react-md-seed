import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from './custom-material-design-theme';

import './App.css';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <div className="App" style={{height: '100vh'}}>
          <AppBar
            title="React App Seed"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{position: 'fixed'}}
          />
          <section>
            <div>
              <h2 className='article-title'>Hello there</h2>
              <div className='left-col'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
              </div>
              <div className='right-col'>
                <Card>
                  <CardMedia>
                    <img alt='md-bg' src="http://2.bp.blogspot.com/-G5FlFF4IBi4/VGGXCEKNf_I/AAAAAAAAEGI/ijsa26A8_sU/s0/Material_Design_Wallpaper_WALLPAPERDNA%2B(1).png" />
                  </CardMedia>
                  <CardTitle title="Card title" subtitle="Card subtitle" />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton label="OK" onTouchTap={() => console.log('ok clicked')} />
                  </CardActions>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
