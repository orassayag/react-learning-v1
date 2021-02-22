import React from 'react';
import Link from 'next/link';

const ErrorPage = (props) => {
    return (
        <div>
            <h1>Opps, something went wrong.</h1>
            <p>Try <Link href="/"><a>Going back</a></Link></p>
        </div>
    );
};

export default ErrorPage;