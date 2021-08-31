import { mail } from "../../app/lib/Mail"

export default {
    key: "RegistrationMail",
    async handle({ data }) {
        const { user } = data
        await mail.teste(user.name, user.email)
    }
}