"use client"
import useAuth from "@/context/useAuth"
import React from "react"
import ProfileCard from "@/components/ProfileCard"
import Login from "@/components/Login"

const Home = () => {
    const { authStatus } = useAuth();
    return (
        <>


           
                {authStatus ? (
                    <div>
                        <ProfileCard />
                    </div>
                ) : (
                    <Login />
                )}

        </>
    )

}
export default Home;