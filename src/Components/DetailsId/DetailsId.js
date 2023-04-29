import React from 'react';
import { useParams } from 'react-router';

const DetailsId = () => {
    const {DetilsId} = useParams();
    
    return (
        <div className="mt-5">
        <br />
        <br />
            <h2>This is DetailsId {DetilsId}</h2>
        </div>
    );
};

export default DetailsId;