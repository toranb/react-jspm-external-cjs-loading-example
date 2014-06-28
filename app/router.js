import React from 'github:reactjs/react-bower';
import ReactRouter from 'github:toranb/toranb-react-nested-router';

import App from './app';
import PreInbox from './preinbox';
import PreDashboard from './predashboard';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var router = Router(
    Route({handler:App},
        Route({name:"dashboard", path:"dashboard", handler:PreDashboard},
            Route({name:"inbox", path:"dashboard/inbox", handler:PreInbox})
        )
    )
);

export default router;
