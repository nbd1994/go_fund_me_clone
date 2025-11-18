"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { authClient } from "../../lib/auth-client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type AuthMode = "signin" | "signup"

export default function SignInSignUpForm() {
  const [mode, setMode] = useState<AuthMode>("signin")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      if (mode === "signin") {
        await authClient.signIn.email(
          { email, password },
          {
            onError: () => {},
            onRequest: () => {},
            onSuccess: () => {
              toast.success("Signed in successfully")
              router.push("/detail")
            }
          }
        )
      } else {
        await authClient.signUp.email(
          { name: fullName, email, password },
          {
            onRequest: () => {},
            onSuccess: () => {
              toast.success("User created")
              router.push("/detail")
            }
          }
        )
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong")
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social(
        {
          provider: "google",
        },
        {
          onSuccess: () => {
            toast.success("Signed in with Google")
            router.push("/detail")
          },
          onError: () => {
            toast.error("Google sign in failed")
          }
        }
      )
    } catch (err: any) {
      setError(err.message || "Google sign in failed")
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <div className="flex justify-center mb-6">
        <Button
          variant={mode === "signin" ? "default" : "outline"}
          className="mr-2"
          onClick={() => setMode("signin")}
        >
          Sign In
        </Button>
        <Button
          variant={mode === "signup" ? "default" : "outline"}
          onClick={() => setMode("signup")}
        >
          Sign Up
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <div className="mb-4">
            <label className="block mb-1 font-medium">Full Name</label>
            <Input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
              placeholder="Your full name"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Your password"
          />
        </div>
        {error && <div className="mb-2 text-red-600 text-sm">{error}</div>}
        <Button type="submit" className="w-full mb-2">
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </Button>
      </form>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-200" />
        <span className="mx-2 text-gray-400 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-200" />
      </div>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={handleGoogleSignIn}
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 48 48" className="mr-2" aria-hidden="true">
          <g>
            <path fill="#4285F4" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.7 7-11.3 7-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6-6C34.5 5.1 29.5 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.2-.3-3.5z"/>
            <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.8 13 24 13c2.7 0 5.2.9 7.2 2.5l6-6C34.5 5.1 29.5 3 24 3 15.6 3 8.1 8.7 6.3 14.7z"/>
            <path fill="#FBBC05" d="M24 43c5.3 0 10.2-1.8 13.9-4.9l-6.4-5c-2 1.4-4.5 2.2-7.5 2.2-5.6 0-10.3-3.7-12-8.7l-6.6 5.1C8.1 39.3 15.6 45 24 45z"/>
            <path fill="#EA4335" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.1 3-3.5 5.3-6.3 6.6l6.4 5C39.7 41.2 44 36.2 44 29.5c0-1.3-.1-2.2-.3-3.5z"/>
          </g>
        </svg>
        Continue with Google
      </Button>
    </div>
  )
}