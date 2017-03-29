/**
 * RouteController
 *
 * @description :: Server-side logic for managing Routes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getRoute: function (req, res) {
        var origin = req.param('origin')
        var destination = req.param('destination')
        var destination = req.param('destination')
        var originRegion = req.param('originRegion')
        var destinationRegion = req.param('destinationRegion')
        Route.getRoute(origin, destination, originRegion, destinationRegion).then(function (data) {
            return res.ok(data)
        }).catch(function (e) {
            return res.serverError(e)
        })
    }
	
};

