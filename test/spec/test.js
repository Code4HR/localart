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

(function () {
    'use strict';
    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    suite('iArtNorfolk Test Suite', function () {
        setup(function () {
            this.Norfolkart = window.Norfolkart;
            this.Norfolkart.rootElement = '#mocha-fixture';
            this.Norfolkart.setupForTesting();
            this.Norfolkart.injectTestHelpers();
        });

        suite('Controllers', function () {
            // Norfolkart.ApplicationController
            suite('ApplicationController', function () {
                setup(function () {
                    this.Norfolkart.reset();
                    this.controller = this.Norfolkart.__container__.lookup(
                        'controller:application'
                    );
                });

                // actions.findMe :: void
                test('find me should use map controller find me', function () {
                    var mock = sinon.mock(this.Norfolkart.__container__.lookup(
                        'controller:map'
                    ));
                    mock.expects('findMe').once();
                    this.controller._actions.findMe();
                    mock.verify();
                });

                teardown(function () {
                    this.controller = null;
                });
            });

            // Norfolkart.MapController
            suite('MapController', function () {
                setup(function () {
                    this.Norfolkart.reset();
                    this.controller = this.Norfolkart.__container__.lookup(
                        'controller:map'
                    );
                });

                test('centre element', function () {
                    assert.isDefined(this.controller.centre);
                    assert.instanceOf(this.controller.centre, L.LatLng);
                });

                test('zoom element', function () {
                    assert.isDefined(this.controller.zoom);
                    assert.isNumber(this.controller.zoom);
                });

                test('actions element', function () {
                    assert.isDefined(this.controller._actions);
                    assert.isDefined(this.controller._actions.findMe);
                });

                // actions.findMe :: void
                /*
                test('find me action uses find me function', function () {
                    var mock = sinon.mock(this.controller);
                    mock.expects('findMe').once();
                    this.controller._actions.findMe();
                    mock.verify();
                });
                */

                // findMe :: void
                test('find me gets the current position', function () {
                    var mock = sinon.mock(window.navigator.geolocation);
                    mock.expects('getCurrentPosition').once();
                    this.controller.findMe();
                    mock.verify();
                });

                // positionError :: PositionError -> void
                test('position error shows a dialogue', function () {
                    var mock = sinon.mock(window);
                    mock.expects('alert')
                        .once()
                        .withArgs('Unknown error.');
                    this.controller.positionError({});
                    mock.verify();
                });

                test('position error shows Permission denied ' +
                    'with an error code of 1', function () {
                        var mock = sinon.mock(window);
                        mock.expects('alert')
                            .once()
                            .withArgs('Permission denied.');
                        this.controller.positionError({code: 1});
                        mock.verify();
                    });

                test('position error shows Position unavailable ' +
                    'with an error code of 2', function () {
                        var mock = sinon.mock(window);
                        mock.expects('alert')
                            .once()
                            .withArgs('Position unavailable.');
                        this.controller.positionError({code: 2});
                        mock.verify();
                    });

                test('position error shows Timeout ' +
                    'with an error code of 3', function () {
                        var mock = sinon.mock(window);
                        mock.expects('alert')
                            .once()
                            .withArgs('Timeout.');
                        this.controller.positionError({code: 3});
                        mock.verify();
                    });

                test('position error shows Unknown error ' +
                    'with an error code that does not fall between 1 and 3',
                    function () {
                        var mock = sinon.mock(window);
                        mock.expects('alert')
                            .once()
                            .withArgs('Unknown error.');
                        this.controller.positionError({code: 0});
                        mock.verify();
                    });

                teardown(function () {
                    this.controller = null;
                });
            });
        });

        suite('Routes', function () {
            // Norfolkart.ApplicationRoute
            suite('ApplicationRoute', function () {
                // beforeModel :: void
                test('before model attempts to load exhibits.json',
                    function () {
                        assert(false, 'Not written yet.');
                    });
            });

            // Norfolkart.ExhibitsRoute
            suite('ExhibitsRoute', function () {
                // model :: Promise
                test('model loads exhibits from store', function () {
                    assert(false, 'Not written yet.');
                });
            });

            // Norfolkart.ExhibitRoute
            suite('ExhibitRoute', function () {
                // model :: Promise
                test('model loads exhibit from store with id', function () {
                    assert(false, 'Not written yet.');
                });
            });

            // Norfolkart.IndexRoute
            suite('IndexRoute', function () {
                // beforeModel :: void
                test('before model transitions to map route', function () {
                    assert(false, 'Not written yet.');
                });
            });

            // Norfolkart.MapRoute
            suite('MapRoute', function () {
                // setupController :: Ember.Controller -> DS.Model -> void
                test('setup controller sets the controller content ' +
                    'to a modified exhibit list', function () {
                        assert(false, 'Not written yet.');
                    });

                // model :: Promise
                test('model loads exhibits from store', function () {
                    assert(false, 'Not written yet.');
                });
            });
        });

        suite('Views', function () {
            // Norfolkart.MarkerLayer
            suite('MarkerLayer', function () {
                // popupContent :: HTMLDivElement
                test('popup content returns a div', function () {
                    assert(false, 'Not written yet.');
                });
            });
        });
    });
}());

