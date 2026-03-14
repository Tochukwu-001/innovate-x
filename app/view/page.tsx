 
import { auth } from "@/auth"
import View from "./view"
import {redirect} from "next/navigation";

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <View session={session}/>
    </main>
  )
}
export default page