"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var ios_component_1 = require('./components/ios/ios.component');
var android_component_1 = require('./components/android/android.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'ios',
        component: ios_component_1.IosComponent
    },
    {
        path: 'android',
        component: android_component_1.AndroidComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map