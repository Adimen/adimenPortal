import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './Layout'
import Units from '../pages/Units'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import NotFound from '../pages/NotFound'

function App() {
    return(<BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Units}/>
                <Route exact path='/badges' component={Badges}/>
                <Route exact path='/badge/new' component={BadgeNew}/>
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>)
}

export default App