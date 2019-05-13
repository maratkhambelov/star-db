import React from 'react';
import { StarshipList } from '../sw-components/index';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ( { history }) => {
        return (
            <StarshipList
                onItemSelected={(itemdId) =>  history.push(itemdId)} />
                );
};

export default withRouter(StarshipsPage);
