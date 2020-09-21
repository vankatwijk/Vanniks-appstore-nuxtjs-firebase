const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['check-auth'] = require('../middleware/check-auth.js')
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth']

middleware['log'] = require('../middleware/log.js')
middleware['log'] = middleware['log'].default || middleware['log']

export default middleware
