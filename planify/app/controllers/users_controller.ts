import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    public async showSignup({view}: HttpContext) {
        return view.render('pages/signup')

    }
}


