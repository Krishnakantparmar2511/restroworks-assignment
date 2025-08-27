export default function HeroSkeleton() {
  return (
    <section className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100 animate-pulse relative overflow-hidden">

      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 opacity-30 rounded-full animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded-lg animate-pulse w-4/5"></div>
              <div className="h-8 bg-gray-300 rounded-lg animate-pulse w-3/4"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded-lg animate-pulse w-5/6"></div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-14 bg-blue-300 rounded-xl animate-pulse w-36 shadow-lg"></div>
              <div className="h-14 bg-gray-300 rounded-xl animate-pulse w-36 shadow-lg"></div>
            </div>
          </div>
          <div className="relative">
            <div className="h-96 lg:h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl animate-pulse shadow-2xl"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
