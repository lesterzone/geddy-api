/**
 * Router
 **/
var router = new geddy.RegExpRouter();

router.get('/').to('Main.index');

exports.router = router;
