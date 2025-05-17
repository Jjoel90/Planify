import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().trim().minLength(3),
        email: vine.string().trim().email(). maxLength(254),
        password: vine.string().trim().minLength(8),
    })
) 
