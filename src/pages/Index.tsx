import { useState } from 'react';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const floatingHearts = [
    { size: 'text-4xl', delay: '0s', left: '10%', duration: '3s' },
    { size: 'text-3xl', delay: '0.5s', left: '25%', duration: '4s' },
    { size: 'text-5xl', delay: '1s', left: '70%', duration: '3.5s' },
    { size: 'text-2xl', delay: '1.5s', left: '85%', duration: '4s' },
    { size: 'text-4xl', delay: '2s', left: '50%', duration: '3s' },
    { size: 'text-3xl', delay: '0.8s', left: '15%', duration: '4.5s' },
    { size: 'text-5xl', delay: '1.8s', left: '90%', duration: '3.2s' },
    { size: 'text-2xl', delay: '0.3s', left: '40%', duration: '4.2s' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingHearts.map((heart, index) => (
          <div
            key={index}
            className={`absolute ${heart.size} opacity-20`}
            style={{
              left: heart.left,
              bottom: '-10%',
              animation: `float-slow ${heart.duration} ease-in-out infinite`,
              animationDelay: heart.delay,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="absolute top-10 left-10 animate-float">
        <span className="text-6xl opacity-30">💝</span>
      </div>
      <div className="absolute bottom-20 right-20 animate-float-slow">
        <span className="text-5xl opacity-30">💖</span>
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
          С нашим днём, киса
        </h1>

        <div className="relative mt-16" style={{ perspective: '1000px' }}>
          <div
            className={`relative w-80 h-64 mx-auto cursor-pointer transition-all duration-500 ${
              isOpen ? 'transform' : ''
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-br from-rose-300 to-pink-300 rounded-t-lg border-b-4 border-white/30"
                style={{
                  transformOrigin: 'top',
                  transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                  transition: 'transform 0.8s ease-out',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">💌</span>
                </div>
              </div>

              <div
                className={`absolute top-12 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-lg shadow-xl p-6 transition-all duration-800 ${
                  isOpen ? 'translate-y-[-120px] opacity-100' : 'translate-y-0 opacity-0'
                }`}
              >
                <div className="font-serif text-gray-700 space-y-4">
                  <p className="text-2xl font-semibold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Моя любимая
                  </p>
                  <p className="text-lg leading-relaxed text-center">
                    Каждый день с тобой — это волшебство. Ты делаешь мою жизнь ярче, теплее и прекраснее.
                  </p>
                  <p className="text-lg leading-relaxed text-center">
                    Спасибо за каждую улыбку, каждый момент счастья. Я люблю тебя больше, чем слова могут выразить.
                  </p>
                  <div className="text-center mt-6 flex justify-center gap-2">
                    <span className="text-2xl animate-float">❤️</span>
                    <span className="text-2xl animate-float-slow">💕</span>
                    <span className="text-2xl animate-float">💖</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] text-center">
                {!isOpen && (
                  <p className="font-serif text-2xl text-purple-600/80 animate-pulse">
                    Нажми, чтобы открыть 💝
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center gap-4 flex-wrap">
          <span className="text-5xl animate-float">💗</span>
          <span className="text-4xl animate-float-slow">💓</span>
          <span className="text-5xl animate-float">💞</span>
          <span className="text-4xl animate-float-slow">💝</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
