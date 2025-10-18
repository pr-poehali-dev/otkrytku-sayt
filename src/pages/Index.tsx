import { useState, useEffect, useRef } from 'react';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    } else if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isOpen]);

  const petals = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 6}s`,
    size: `${15 + Math.random() * 20}px`,
  }));

  const floatingHearts = [
    { size: 'text-4xl', delay: '0s', left: '10%', duration: '3s' },
    { size: 'text-3xl', delay: '0.5s', left: '25%', duration: '4s' },
    { size: 'text-5xl', delay: '1s', left: '70%', duration: '3.5s' },
    { size: 'text-2xl', delay: '1.5s', left: '85%', duration: '4s' },
    { size: 'text-4xl', delay: '2s', left: '50%', duration: '3s' },
    { size: 'text-3xl', delay: '0.8s', left: '15%', duration: '4.5s' },
    { size: 'text-5xl', delay: '1.8s', left: '90%', duration: '3.2s' },
    { size: 'text-2xl', delay: '0.3s', left: '40%', duration: '4.2s' },
    { size: 'text-4xl', delay: '1.2s', left: '60%', duration: '3.8s' },
    { size: 'text-3xl', delay: '2.5s', left: '5%', duration: '4.1s' },
    { size: 'text-5xl', delay: '0.7s', left: '80%', duration: '3.3s' },
    { size: 'text-2xl', delay: '1.9s', left: '35%', duration: '4.4s' },
    { size: 'text-4xl', delay: '0.4s', left: '95%', duration: '3.7s' },
    { size: 'text-3xl', delay: '2.2s', left: '20%', duration: '4.3s' },
    { size: 'text-5xl', delay: '1.4s', left: '75%', duration: '3.4s' },
    { size: 'text-2xl', delay: '0.9s', left: '45%', duration: '4.6s' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#5a2e3e] via-[#6b3d4d] to-[#4a2533]">
      <audio ref={audioRef} loop>
        <source src="https://poehali.dev/i-love-you-fontaines.mp3" type="audio/mpeg" />
      </audio>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((petal, index) => (
          <div
            key={`petal-${index}`}
            className="absolute text-pink-300 opacity-30"
            style={{
              left: petal.left,
              top: '-10%',
              fontSize: petal.size,
              animation: `petal-fall ${petal.duration} linear infinite, petal-sway 3s ease-in-out infinite`,
              animationDelay: `${petal.delay}, ${petal.delay}`,
            }}
          >
            🌹
          </div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingHearts.map((heart, index) => (
          <div
            key={index}
            className={`absolute ${heart.size} opacity-15`}
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
        <img src="https://cdn.poehali.dev/projects/6ab0a839-b403-4b9b-8d8b-c3379a15d32a/files/38edb3fa-1c93-4f0a-b23e-8dc36f5a1ada.jpg" alt="" className="w-20 h-20 rounded-full opacity-40" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float-slow">
        <span className="text-6xl opacity-25">💖</span>
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 animate-fade-in">
        <img src="https://cdn.poehali.dev/projects/6ab0a839-b403-4b9b-8d8b-c3379a15d32a/files/10de1987-4b8f-43c7-987d-217f79d5f013.jpg" alt="" className="w-48 h-48 rounded-2xl opacity-20" />
      </div>
      <div className="absolute bottom-40 left-32 animate-float-slow">
        <span className="text-6xl opacity-25">💗</span>
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in flex flex-col items-center justify-center min-h-screen">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] drop-shadow-lg">
          С нашим днём, киса
        </h1>

        <div className="relative" style={{ perspective: '1500px' }}>
          <div
            className={`relative w-[500px] h-[350px] mx-auto cursor-pointer transition-all duration-500 ${
              isOpen ? 'transform' : ''
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/90 to-pink-200/90 rounded-sm shadow-2xl backdrop-blur-sm">
              <div 
                className="absolute top-0 left-0 w-full h-[175px] bg-gradient-to-br from-rose-300/80 via-pink-300/80 to-rose-400/80 clip-triangle shadow-lg"
                style={{
                  transformOrigin: 'top center',
                  transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
                  transition: 'transform 0.8s ease-out',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  zIndex: isOpen ? 1 : 3,
                }}
              >
                <div className="absolute top-[60px] left-1/2 -translate-x-1/2">
                  <span className="text-5xl drop-shadow-lg">💌</span>
                </div>
              </div>

              <div 
                className="absolute bottom-0 left-0 w-1/2 h-[175px] bg-gradient-to-br from-rose-400/70 to-pink-400/70"
                style={{
                  clipPath: 'polygon(0 100%, 100% 0, 0 0)',
                  zIndex: 2,
                }}
              ></div>
              
              <div 
                className="absolute bottom-0 right-0 w-1/2 h-[175px] bg-gradient-to-bl from-rose-400/70 to-pink-400/70"
                style={{
                  clipPath: 'polygon(100% 100%, 100% 0, 0 0)',
                  zIndex: 2,
                }}
              ></div>

              <div
                className={`absolute top-8 left-1/2 -translate-x-1/2 w-[85%] h-[280px] bg-gradient-to-br from-pink-50/95 to-rose-50/95 shadow-2xl p-8 transition-all duration-800 border border-pink-200/50 ${
                  isOpen ? 'translate-y-[-180px] opacity-100 z-10' : 'translate-y-0 opacity-0 z-0'
                }`}
              >
                <div className="font-serif text-gray-800 space-y-3 h-full flex flex-col justify-center">
                  <p className="text-3xl font-semibold text-center bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                    Моя любимая
                  </p>
                  <p className="text-lg leading-relaxed text-center">
                    Каждый день с тобой — это волшебство. Ты делаешь мою жизнь ярче, теплее и прекраснее.
                  </p>
                  <p className="text-lg leading-relaxed text-center">
                    Спасибо за каждую улыбку, каждый момент счастья. Я люблю тебя больше, чем слова могут выразить.
                  </p>
                  <div className="text-center mt-4 flex justify-center gap-3">
                    <span className="text-3xl animate-float">❤️</span>
                    <span className="text-3xl animate-float-slow">💕</span>
                    <span className="text-3xl animate-float">💖</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] text-center z-20">
                {!isOpen && (
                  <p className="font-serif text-2xl text-pink-200 animate-pulse font-semibold drop-shadow-md">
                    Нажми, чтобы открыть 💝
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center gap-5 flex-wrap opacity-60">
          <span className="text-5xl animate-float">💗</span>
          <span className="text-4xl animate-float-slow">💓</span>
          <span className="text-5xl animate-float">💞</span>
          <span className="text-4xl animate-float-slow">💝</span>
          <span className="text-5xl animate-float">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default Index;