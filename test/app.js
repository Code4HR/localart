/*
    An HTML5 mobile app for navigating & browsing locations of public art, 
    architecture, and culture in Norfolk, VA. 
    Copyright (C) 2014 Code for Hampton Roads contributors

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var Norfolkart = window.Norfolkart = Ember.Application.create(),
    karma_started = false;
__karma__.loaded = function () {};
Norfolkart.setupForTesting();
Norfolkart.injectTestHelpers();
emq.globalize();
setResolver(Ember.DefaultResolver.create({namespace: Norfolkart}));
Norfolkart.initializer({
    name: 'run tests',
    initialize: function (container, application) {
        if (!karma_started) {
            karma_started = true;
            __karma__.start();
        }
    }
});
