import { useRecoilValue } from "recoil"
import LoginCard from "../components/Login.jsx"
import SignupCard from "../components/SignupCard.jsx"
import authScreenAtom from "../atoms/authAtom.js"

export const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);
    console.log(authScreenState);
  return (
    <>
        {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
    </>
  )
}
