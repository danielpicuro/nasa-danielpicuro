// src/app/government-profile/page.tsx
import { Mail, Shield } from "lucide-react";

const roles = [
  "Technical (Engineer/Architect)",
  "Administrative (Manager/Director)",
  "Executive (C-Level)",
  "Policy Maker",
  "Analyst",
];

const budgets = [
  "Small (<$10M USD)",
  "Moderate ($10M - $50M USD)",
  "Large ($50M - $200M USD)",
  "Enterprise (>$200M USD)",
];

const priorities = [
  "Environmental Impact",
  "Economic Growth",
  "Public Safety",
  "Infrastructure Development",
  "Healthcare Services",
  "Education",
];

// --- Server Action ---
async function handleSubmit(formData: FormData) {
  "use server";

  const email = formData.get("email");
  const role = formData.get("role");
  const budget = formData.get("budget");
  const priority = formData.get("priority");

  console.log("[SERVER] Government profile submitted:", {
    email,
    role,
    budget,
    priority,
  });

  // Aquí podrías hacer:
  // await saveToDB({ email, role, budget, priority });
}

export default function GovernmentProfilePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden text-foreground">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <form
          action={handleSubmit}
          className="bg-card/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-border/50"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Shield className="w-14 h-14 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-cyan-400 mb-2">
            Government Profile
          </h1>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Configure your profile for personalized recommendations
          </p>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="gobierno@ciudad.gob"
                className="w-full bg-muted/50 border border-border rounded-lg pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              />
            </div>
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Role
            </label>
            <select
              name="role"
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            >
              {roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Available Budget
            </label>
            <select
              name="budget"
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            >
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Priority */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-2">
              Main Priority
            </label>
            <select
              name="priority"
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            >
              {priorities.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Shield className="w-5 h-5" />
            Access Platform
          </button>
        </form>
      </div>
    </div>
  );
}
