
import { ArrowRight } from "lucide-react"

export function FeatureCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-sm text-gray-600 mb-6 flex-grow">{description}</p>
      <a
        href="#"
        className="text-gray-900 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
      >
        See more
        <ArrowRight size={16} />
      </a>
    </div>
  )
}
