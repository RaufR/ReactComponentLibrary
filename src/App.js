import React, { Component } from 'react';
import './App.css';

/*importing libraries*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollToTop from 'react-router-scroll-top';

/*importing Layouts*/
import Landing from './Layouts/Landing_page'
import Sidebar from './Components/Sidebar'
import Sol_Buttons from './Layouts/ButtonsPage'
import NormalButtons from './Layouts/NormalButtons'
import ButtonGroup from './Layouts/ButtonGroupPage'
import ButtonDropdown from './Layouts/ButtonDropdown'
import Spinner from './Layouts/SpinnerPage'


class App extends Component {
  render() {
    return (
      /*Router*/
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
         <Route render= {({location})=>(
            <ScrollToTop>
            <Sidebar height={'94vh'} color1={'#008A67'} color2={'#008A22'}/>
                 <TransitionGroup>
                   <CSSTransition
                     key={location.key}
                     classNames="fade"
                     timeout={300}
                   >
                    <Switch location={location}>
                      <Route path="/" component={Landing} exact />
                      <Route path="/Buttons" component={NormalButtons} />
                      <Route path="/ButtonGroup" component={ButtonGroup} />
                      <Route path="/ButtonDropdown" component={ButtonDropdown} />
                      <Route path="/Spinner" component={Spinner} />
                      {/* {<Route path="/About" component={About} />} */}
                    </Switch>
                   </CSSTransition>
                  </TransitionGroup>
            </ScrollToTop>
         )}/>
      </BrowserRouter>
    );
  }
}

export default App;
