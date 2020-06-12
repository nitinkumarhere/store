import Axios from "axios";
import cookie from 'vue-cookies'

const loginUrl = "/api/login";
export default {
    state: {
        authenticated: cookie.get("authenticated"),
        jwt: cookie.get("jwt")
    },
    getters: {
        authenticatedAxios() {
            return Axios.create({
                headers: {
                    "Authorization": `Bearer<${cookie.get("jwt")}>`
                }
            });
        }
    },
    mutations: {
        setAuthenticated(state,jwt) {
            cookie.set('jwt', jwt)
            cookie.set('authenticated', true)
            state.authenticated = cookie.get("authenticated")
            state.jwt = cookie.get("jwt")
        },
        clearAuthentication(state) {
            cookie.remove('authenticated')
            cookie.remove('jwt')
            state.authenticated = false
            state.jwt = null
        }
    },
    actions: {
        async authenticate(context, credentials) {
            let response = await Axios.post(loginUrl, credentials);
            if (response.data.success == true) {
                context.commit("setAuthenticated", response.data.token);
            }
        }
    }
}