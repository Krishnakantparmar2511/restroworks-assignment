export default function TestimonialSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-3 bg-indigo-300 rounded-full animate-pulse mb-4 w-32 mx-auto"></div>
          <div className="h-12 bg-gray-300 rounded-xl animate-pulse mb-6 mx-auto w-96"></div>
          <div className="h-6 bg-gray-300 rounded-lg animate-pulse max-w-3xl mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden border border-gray-100">
            <div className="absolute top-6 left-6 w-8 h-8 bg-blue-200 rounded-full animate-pulse"></div>
            
            <div className="space-y-6">
              <div className="h-8 bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-6 bg-gray-300 rounded-lg animate-pulse"></div>
                <div className="h-6 bg-gray-300 rounded-lg animate-pulse w-4/5"></div>
                <div className="h-6 bg-gray-300 rounded-lg animate-pulse w-3/4"></div>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded-lg animate-pulse w-24"></div>
                  <div className="h-3 bg-gray-300 rounded-lg animate-pulse w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
