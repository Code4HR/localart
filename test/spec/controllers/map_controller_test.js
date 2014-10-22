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
    moduleFor('controller:map', 'MapController');

    test('centre element', function () {
        var controller = this.subject();
        notEqual(typeof controller.centre, 'undefined');
        ok(controller.centre instanceof L.LatLng);
    });

    test('zoom element', function () {
        var controller = this.subject();
        notEqual(typeof controller.zoom, 'undefined');
        equal(typeof controller.zoom, 'number', 'Zoom not a number: ' +
            String(controller.zoom));
    });

    test('actions element', function () {
        var controller = this.subject();
        notEqual(typeof controller._actions, 'undefined');
        notEqual(typeof controller._actions.findMe, 'undefined');
    });

    // actions.findMe :: void
    test('find me action uses find me function', function () {
        var controller = this.subject(),
            spy = sinon.spy(controller, 'findMe');
        controller.send('findMe');
        ok(spy.calledOnce);
        controller.findMe.restore();
    });

    // findMe :: void
    test('find me gets the current position', function () {
        var controller = this.subject(),
            spy = sinon.spy(navigator.geolocation,
                'getCurrentPosition');
        controller.send('findMe');
        ok(spy.calledOnce);
        navigator.geolocation.getCurrentPosition.restore();
    });

    // positionError :: PositionError -> void
    test('position error shows a dialogue', function () {
        var controller = this.subject(),
            mock = sinon.mock(window);
        expect(0);
        mock.expects('alert')
            .once()
            .withArgs('Unknown error.');
        controller.positionError({});
        mock.verify();
    });

    test('position error shows Permission denied ' +
        'with an error code of 1', function () {
            var controller = this.subject(),
                mock = sinon.mock(window);
            expect(0);
            mock.expects('alert')
                .once()
                .withArgs('Permission denied.');
            controller.positionError({code: 1});
            mock.verify();
        });

    test('position error shows Position unavailable ' +
        'with an error code of 2', function () {
            var controller = this.subject(),
                mock = sinon.mock(window);
            expect(0);
            mock.expects('alert')
                .once()
                .withArgs('Position unavailable.');
            controller.positionError({code: 2});
            mock.verify();
        });

    test('position error shows Timeout ' +
        'with an error code of 3', function () {
            var controller = this.subject(),
                mock = sinon.mock(window);
            expect(0);
            mock.expects('alert')
                .once()
                .withArgs('Timeout.');
            controller.positionError({code: 3});
            mock.verify();
        });

    test('position error shows Unknown error ' +
        'with an error code that does not fall between 1 and 3',
        function () {
            var controller = this.subject(),
                mock = sinon.mock(window);
            expect(0);
            mock.expects('alert')
                .once()
                .withArgs('Unknown error.');
            controller.positionError({code: 0});
            mock.verify();
        });
}());
