import React, {Component} from 'react'
import ArticleList from './ArticleList/index.js'
import articles from '../fixtures'
import 'react-bootstrap'
//import axios from 'axios'
class Blog extends Component {
    state = {
        reverted: false
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Funnyblog
                        <button className="btn btn-primary float-right" onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles ={this.state.reverted ? articles.reverse() : articles }/>
            </div>
        )
    }
        revert = () => this.setState({
            reverted: !this.state.reverted
        })

}
export default Blog 