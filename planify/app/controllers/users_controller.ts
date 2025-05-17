import type { HttpContext } from '@adonisjs/core/http'
// import vine from '@vinejs/vine' 
import User from '#models/user'
import { createUserValidator } from '#validators/user'
import { createLoginValidator } from '#validators/login'
import { log } from 'console'

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
    public async login({ request, auth, response }: HttpContext) {
          
            const payload = await request.validateUsing(createLoginValidator)
        
            const user = await User.verifyCredentials(payload.email, payload.password)
            
            await auth.use('web').login(user)

           return response.redirect('/')
    }

}