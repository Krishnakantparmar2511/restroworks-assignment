export default function CTASkeleton() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">

      <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="h-3 bg-white opacity-60 rounded-full animate-pulse mb-4 w-24 mx-auto"></div>
            <div className="space-y-3">
              <div className="h-8 bg-white opacity-40 rounded-xl animate-pulse mx-auto w-4/5"></div>
              <div className="h-8 bg-white opacity-40 rounded-xl animate-pulse mx-auto w-3/4"></div>
            </div>
          </div>
          
          <div className="h-8 bg-white opacity-30 rounded-xl animate-pulse mb-12 mx-auto w-2/3"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <div className="h-16 bg-white opacity-40 rounded-xl animate-pulse w-44 mx-auto sm:mx-0 shadow-2xl"></div>
            <div className="h-16 bg-white opacity-20 rounded-xl animate-pulse w-44 mx-auto sm:mx-0 shadow-2xl"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white opacity-30 rounded-2xl animate-pulse mx-auto mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-white opacity-40 rounded-lg animate-pulse"></div>
                  <div className="h-3 bg-white opacity-40 rounded-lg animate-pulse w-3/4 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white opacity-40 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-300 opacity-60 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-300 opacity-50 rounded-full animate-ping"></div>
    </section>
  );
}
