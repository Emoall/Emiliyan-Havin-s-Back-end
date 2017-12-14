const bcrypt = require('bcrypts')

user.password = bcrypt.hashSync(credentials.password, salt)

if (!bcrypt.compareSync(credentials.password, user.password)) {
	console.log('passwords dont match')
	callback(null, false)
	return
}