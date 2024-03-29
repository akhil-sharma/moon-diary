import React from "react"

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
        <button className="px-4 py-2 border flex gap-2 border-slate-700 rounded-lg text-slate-200 hover:border-slate-500 hover:text-slate-300 hover:shadow transition duration-150">
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
            <span>Login with Google</span>
        </button>
    </div>)
}