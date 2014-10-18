/**
 * @class
 * @name Router
 **/
var router = new geddy.RegExpRouter();

router.match('/*path(.:format)', 'OPTIONS').to('Main.index');
router.get('/').to('Main.index');

router.resource('users');
exports.router = router;
