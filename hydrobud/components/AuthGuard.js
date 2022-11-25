import { useEffect } from "react"
import { useRouter } from "next/router"
import { useAuthContext } from "../context/AuthContext"

import { setRedirect, getRedirect, clearRedirect} from "../utils/redirect";

const REDIRECT_KEY = 'sign_in_redirect'

const AuthGuard = ({children}) => { 
    const { currentUser, initializing } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (!initializing) {
          //auth is initialized and there is no user
          if (!currentUser) {
            // remember the page that user tried to access
            setRedirect(REDIRECT_KEY, router.route)
            router.push("/login")
          }
        }
    }, [initializing, currentUser])

    if (initializing) {
        return <h1>Application Loading</h1>
    }

    if (!initializing && currentUser) {
        return <>{children}</>
    }

    return null
}

export default AuthGuard