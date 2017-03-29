/**
 * Created by wuchao on 17/3/29.
 */
var request = require('request')

var self = module.exports = {

    cons: {
        baseUrl: 'http://api.map.baidu.com/direction/v1?mode=driving&output=json&ak=5H9WqUnyib5UQuFn7ZYZGicrYW5d1Bdq',
    },

    constructUrl: function (origin, destination, originRegion, destinationRegion) {
        return [self.cons.baseUrl, '&origin=', encodeURIComponent(origin), '&destination=', encodeURIComponent(destination), , '&origin_region=', encodeURIComponent(originRegion), '&destination_region=' + encodeURIComponent(destinationRegion)].join('')
    },

    getRoute: function (origin, destination, originRegin, destinationRegin) {
        return new Promise(function (resolve, reject) {
            var url = self.constructUrl(origin, destination, originRegin, destinationRegin)
            request.get(url, function (e, r, data) {
                if (e) {
                    sails.log.error(e)
                    sails.log.debug(url)
                    return reject(e)
                }
                if (r.statusCode !== 200) {
                    sails.log.debug(url)
                    return reject(new Error('status not 200 error'))
                }
                try {
                    var result = JSON.parse(data).result
                    sails.log.info(result)
                    return resolve(result)
                } catch (e) {
                    sails.log.debug(url)
                    return reject(e)
                }
            })
        })
    }
}