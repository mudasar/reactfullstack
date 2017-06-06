import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Clock from './Clock';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        pageHeader: 'Naming Contests',
        contests: []

    };

    
    componentWillMount () {
        axios.get('/api/contests').then((resp => {
            console.log(resp);
            this.setState({
                contests: resp.data.contests
            });

        })).catch(console.error);
        
    }
    

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header message={this.state.pageHeader} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        Hellow from App Component
                        <p>
                            This looks very good
                        </p>
                        
                    </div>
                    <div className="col-6">
                        This is other side of the world 
                        <p>
                            {this.state.pageHeader}
                            
                        </p>
                        <Clock date={new Date()} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.contests.map(contest => <ContestPreview key={contest.id} contest={contest} />)}
                        <br />
                    </div>
                </div>
            </div>
        )
    };

};



export default App;