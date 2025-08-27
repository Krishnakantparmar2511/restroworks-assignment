export default function FeaturesSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-3 bg-blue-300 rounded-full animate-pulse mb-4 w-24 mx-auto"></div>
          <div className="h-12 bg-gray-300 rounded-xl animate-pulse mb-6 mx-auto w-96 shadow-sm"></div>
          <div className="h-6 bg-gray-300 rounded-lg animate-pulse max-w-3xl mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="p-8 rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl animate-pulse mb-6"></div>
              <div className="h-6 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded-lg animate-pulse w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
