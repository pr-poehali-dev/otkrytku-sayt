import { useState, useEffect, useRef } from 'react';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [burstHearts, setBurstHearts] = useState<Array<{id: number, x: string, y: string, delay: string}>>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
      
      const hearts = Array.from({ length: 15 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 15;
        const distance = 150 + Math.random() * 100;
        return {
          id: i,
          x: `${Math.cos(angle) * distance}px`,
          y: `${Math.sin(angle) * distance}px`,
          delay: `${i * 0.05}s`
        };
      });
      setBurstHearts(hearts);
      
      setTimeout(() => setBurstHearts([]), 2000);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setBurstHearts([]);
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
        <source src="/i-love-you.mp3" type="audio/mpeg" />
      </audio>

      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
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

      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
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

      <div className={`absolute top-4 left-4 md:top-10 md:left-10 animate-float transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        <img src="https://cdn.poehali.dev/projects/6ab0a839-b403-4b9b-8d8b-c3379a15d32a/files/38edb3fa-1c93-4f0a-b23e-8dc36f5a1ada.jpg" alt="" className="w-12 h-12 md:w-20 md:h-20 rounded-full opacity-40" />
      </div>
      <div className={`absolute bottom-10 right-10 md:bottom-20 md:right-20 animate-float-slow transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-4xl md:text-6xl opacity-25">💖</span>
      </div>
      <div className={`hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 animate-fade-in transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        <img src="https://cdn.poehali.dev/projects/6ab0a839-b403-4b9b-8d8b-c3379a15d32a/files/10de1987-4b8f-43c7-987d-217f79d5f013.jpg" alt="" className="w-48 h-48 rounded-2xl opacity-20" />
      </div>
      <div className={`absolute bottom-20 left-10 md:bottom-40 md:left-32 animate-float-slow transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        <span className="text-4xl md:text-6xl opacity-25">💗</span>
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in flex flex-col items-center justify-center min-h-screen py-8">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl font-bold mb-8 md:mb-16 text-pink-100 animate-shimmer drop-shadow-[0_0_30px_rgba(255,182,193,0.6)]" style={{ textShadow: '0 0 40px rgba(255,182,193,0.5), 0 0 20px rgba(255,182,193,0.3)' }}>
          С нашим днём, киса
        </h1>

        <div className="relative" style={{ perspective: '1500px' }}>
          {burstHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute top-1/2 left-1/2 pointer-events-none z-50"
              style={{
                '--tx': heart.x,
                '--ty': heart.y,
                animationDelay: heart.delay,
              } as React.CSSProperties}
            >
              <span className="text-4xl animate-heart-burst">💖</span>
            </div>
          ))}
          <div
            className={`relative w-[320px] h-[240px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] mx-auto cursor-pointer transition-all duration-500 ${
              isOpen ? 'transform' : ''
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 to-pink-300/40 rounded-sm shadow-2xl backdrop-blur-md" style={{ boxShadow: '0 0 60px rgba(255,182,193,0.4), 0 20px 40px rgba(0,0,0,0.3)' }}>
              <div 
                className="absolute top-0 left-0 w-full h-[120px] sm:h-[140px] md:h-[175px] bg-gradient-to-br from-rose-400/50 via-pink-400/50 to-rose-500/50 clip-triangle shadow-lg"
                style={{
                  transformOrigin: 'top center',
                  transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
                  transition: 'transform 0.8s ease-out',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  zIndex: isOpen ? 1 : 3,
                }}
              >
                <div className="absolute top-[40px] sm:top-[50px] md:top-[60px] left-1/2 -translate-x-1/2">
                  <span className="text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">💌</span>
                </div>
              </div>

              <div 
                className="absolute bottom-0 left-0 w-1/2 h-[120px] sm:h-[140px] md:h-[175px] bg-gradient-to-br from-rose-500/50 to-pink-500/50"
                style={{
                  clipPath: 'polygon(0 100%, 100% 0, 0 0)',
                  zIndex: 2,
                }}
              ></div>
              
              <div 
                className="absolute bottom-0 right-0 w-1/2 h-[120px] sm:h-[140px] md:h-[175px] bg-gradient-to-bl from-rose-500/50 to-pink-500/50"
                style={{
                  clipPath: 'polygon(100% 100%, 100% 0, 0 0)',
                  zIndex: 2,
                }}
              ></div>

              <div
                className={`absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[88%] md:w-[85%] max-h-[85vh] sm:max-h-[500px] md:max-h-[600px] overflow-y-auto bg-white shadow-2xl p-4 sm:p-6 md:p-8 transition-all duration-800 border border-pink-300/40 ${
                  isOpen ? 'translate-y-[-120px] sm:translate-y-[-150px] md:translate-y-[-180px] opacity-100 z-10' : 'translate-y-0 opacity-0 z-0'
                }`}
                style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255,182,193,0.3) transparent',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2), 0 0 20px rgba(255,182,193,0.3)'
                }}
              >
                <div className="font-serif text-gray-700 space-y-2 sm:space-y-3 md:space-y-4" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-rose-700" style={{ textShadow: '0 0 15px rgba(255,182,193,0.4)' }}>
                    Моя дорогая Вероничка
                  </p>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center text-gray-700">
                    За такое малое время ты стала мне безумно близкой и дорогой. Я хочу поздравить тебя с нашим праздником должным образом и сказать тебе, что я до жути люблю тебя.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center text-gray-700">
                    Я могу говорить тебе об этом вечно, но никогда не смогу передать тех чувств, что действительно ощущаю к тебе.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center text-gray-700">
                    Ты самый яркий лучик солнца в моей жизни, даже пару минут без тебя сводят меня с ума. Если бы мне сказали раньше о том, что я встречу такую замечательную девочку, то я бы не поверила, ведь ты просто идеальна в моих глазах.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center text-gray-700">
                    С каждым днем я чувствую все больше теплых чувств к тебе, хотя казалось бы, куда еще больше. Я очень хочу, чтобы все и дальше у нас было хорошо.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center text-gray-700">
                    Прости меня за мои косяки с пустого места и прости, что я все так близко принимаю к сердцу.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center text-gray-700 font-semibold">
                    Я очень люблю тебя, моя дорогая. С нашим днем, принцесса 💖
                  </p>
                  <div className="text-center mt-3 sm:mt-4 md:mt-5 flex justify-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl md:text-3xl animate-float">❤️</span>
                    <span className="text-xl sm:text-2xl md:text-3xl animate-float-slow">💕</span>
                    <span className="text-xl sm:text-2xl md:text-3xl animate-float">💖</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] text-center z-20">
                {!isOpen && (
                  <p className="font-serif text-base sm:text-xl md:text-2xl text-pink-100 animate-pulse font-semibold" style={{ textShadow: '0 0 20px rgba(255,182,193,0.8), 0 0 10px rgba(255,182,193,0.5)' }}>
                    Нажми, чтобы открыть 💝
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 md:mt-24 flex justify-center gap-3 md:gap-5 flex-wrap opacity-60 transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-3xl md:text-5xl animate-float">💗</span>
          <span className="text-2xl md:text-4xl animate-float-slow">💓</span>
          <span className="text-3xl md:text-5xl animate-float">💞</span>
          <span className="text-2xl md:text-4xl animate-float-slow">💝</span>
          <span className="text-3xl md:text-5xl animate-float">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default Index;