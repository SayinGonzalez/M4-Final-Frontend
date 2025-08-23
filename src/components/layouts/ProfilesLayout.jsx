import { Outlet } from "react-router"
import ThemeButton from "../atoms/ThemeButton";
import BackButton from "../atoms/BackButton";
import HomeButton from "../atoms/HomeButton";

const ProfilesLayout = () => {



  return (
    <>
      <section className="min-h-screen w-full py-8 flex flex-col gap-y-14">

        {/* BUTTON */}
        <ThemeButton className="
          absolute inset-0 -left-5 top-36 z-10
          size-fit rounded-r-3xl py-3 px-3
          transition duration-500
          hover:translate-x-4 
        "/>

        {/* NAV */}
        <div className="
          relative z-10
          flex justify-between
          px-10 h-fit items-center
        ">

          <HomeButton />

          <BackButton />
        </div>

        <div className="flex-1 flex">
          <Outlet />
        </div>

      </section>
    </>
  )
}

export default ProfilesLayout
