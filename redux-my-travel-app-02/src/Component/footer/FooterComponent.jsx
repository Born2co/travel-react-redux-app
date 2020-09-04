import React, { Component } from 'react';
import classes from './FooterComponent.css';
class FooterComponent extends Component {
    render() {
        return (
            <footer className={classes.Footer}>
                <span className="text-muted"> All Right Reserverd @2020 </span>
            </footer>
        )
    }
}
export default FooterComponent