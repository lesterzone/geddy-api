/**
 * @class
 * @name Router
 **/
var router = new geddy.RegExpRouter();

router.match('/*path(.:format)', 'OPTIONS').to('Main.index');
router.get('/').to('Main.index');

exports.router = router;
