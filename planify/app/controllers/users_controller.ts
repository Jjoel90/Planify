import type { HttpContext } from '@adonisjs/core/http'
// import vine from '@vinejs/vine' 
import User from '#models/user'
import { createUserValidator } from '#validators/user'

export default class UsersController {
    public async showSignup({view}: HttpContext) {
        // console.log("Bonjour Joel");
        return view.render('security/signup')
        

    }
    public async showLogin({view}: HttpContext) {
        // console.log("Bonjour Newton");
        
        return view.render('security/login')
    }

    public async createUser({view, request}: HttpContext) {

        const payload = await request.validateUsing(createUserValidator)
        console.log(payload);

        const user = await User.create({
            fullName: payload.fullName,
            email: payload.email,
            password: payload.password,
        })
        console.log(user);
        console.log(payload);
        console.log("Hello world");
        
        return view.render('security/login')

    }

}








