import React from 'react';
import User from '../../components/User';

const AuthIndexPage = (props) => {
    return (
        <div>
            <h1>The Auth Index Page - {props.appName}</h1>
            <User name="Or" age={33} />
        </div>
    );
};

AuthIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                appName: 'Super App (Auth)'
            });
        }, 1000);
    });
    return promise.then();
};

export default AuthIndexPage;