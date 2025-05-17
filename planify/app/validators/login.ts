import vine from '@vinejs/vine'

export const createLoginValidator = vine.compile(
    vine.object({
        email: vine.string().trim().email(). maxLength(254),
        password: vine.string().trim().minLength(8),
    })
)    
