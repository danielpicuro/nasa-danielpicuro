import { Globe, Mail, Shield } from "lucide-react"
import { redirect } from "next/navigation"

async function handleProfileSubmit(formData: FormData) {
  "use server"

  const email = formData.get("email")
  const role = formData.get("role")
  const budget = formData.get("budget")
  const priority = formData.get("priority")

  // Here you would typically validate and save the data
  console.log({ email, role, budget, priority })

  // Redirect to dashboard or next page
  redirect("/projects")
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center shadow-lg">
            <Globe className="w-12 h-12 text-cyan-300" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">Government Profile</h1>
          <p className="text-muted-foreground text-base">Configure your profile for personalized recommendations</p>
        </div>

        {/* Form */}
        <form action={handleProfileSubmit} className="space-y-6">
          {/* Email Address */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="gobierno@ciudad.gob"
                required
                className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-muted-foreground">
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25rem",
              }}
            >
              <option value="technical">Technical (Engineer/Architect)</option>
              <option value="administrative">Administrative</option>
              <option value="executive">Executive</option>
              <option value="planning">Urban Planning</option>
            </select>
          </div>

          {/* Available Budget */}
          <div className="space-y-2">
            <label htmlFor="budget" className="block text-sm font-medium text-muted-foreground">
              Available Budget
            </label>
            <select
              id="budget"
              name="budget"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25rem",
              }}
            >
              <option value="moderate">Moderate ($10M - $50M USD)</option>
              <option value="low">Low (Under $10M USD)</option>
              <option value="high">High ($50M - $100M USD)</option>
              <option value="very-high">Very High (Over $100M USD)</option>
            </select>
          </div>

          {/* Main Priority */}
          <div className="space-y-2">
            <label htmlFor="priority" className="block text-sm font-medium text-muted-foreground">
              Main Priority
            </label>
            <select
              id="priority"
              name="priority"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25rem",
              }}
            >
              <option value="environmental">Environmental Impact</option>
              <option value="economic">Economic Development</option>
              <option value="social">Social Welfare</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="safety">Public Safety</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
          >
            <Shield className="w-5 h-5" />
            Access Platform
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Secure connection • Enterprise-grade encryption
        </p>
      </div>
    </div>
  )
}
