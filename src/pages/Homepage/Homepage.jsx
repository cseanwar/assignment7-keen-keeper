import React, { Suspense } from 'react';
import Friends from '../../components/homepage/Friends';
import { RingLoader } from 'react-spinners';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const Homepage = () => {
    return (
        <div>
            <Suspense fallback = {<LoadingSpinner />}>
                <Friends />
            </Suspense>
        </div>
    );
};

export default Homepage;