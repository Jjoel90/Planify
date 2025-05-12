import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        fullname: vine.string().trim().minLength(3),
        email: vine.string().trim().email(). maxLength(254),
        password: vine.string().trim().minLength(8),
    })
) 