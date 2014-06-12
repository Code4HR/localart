Norfolkart.Router.map(function () {
    this.resource('exhibits');
    this.resource('exhibit', { path: '/exhibit/:exhibit_id' });
    this.resource('map');
});
