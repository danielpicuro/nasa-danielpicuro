// @ts-expect
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Bot } from 'lucide-react';
import { useAiCompanion } from '@/contexts/AiCompanionContext';

type Setter = (value: number) => void;

interface Crystal {
  el: HTMLDivElement;
  x: number;
  y: number;
  z: number;
  quickSetX: Setter;
  quickSetY: Setter;
}

// Custom hook to track previous value
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (ref.current === null) return;
    ref.current = value;
  });
  return ref.current!;
}

export function InteractiveAiIcon() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const logoCoreRef = useRef<HTMLDivElement>(null);
  const crystalContainerRef = useRef<HTMLDivElement>(null);
  const crystalsRef = useRef<Crystal[]>([]);
  const { isLoading, chatHistory } = useAiCompanion();
  const prevChatHistory = usePrevious(chatHistory);

  // Base setup effect
  useEffect(() => {
    const scene = sceneRef.current;
    const logoCore = logoCoreRef.current;
    const crystalContainer = crystalContainerRef.current;

    if (!scene || !logoCore || !crystalContainer) return;

    while (crystalContainer.firstChild) {
      crystalContainer.removeChild(crystalContainer.firstChild);
    }

    const newCrystals: Crystal[] = [];
    const numCrystals = gsap.utils.random(3, 5, 1);
    const iconSize = 80;

    for (let i = 0; i < numCrystals; i++) {
      const crystalEl = document.createElement('div');
      crystalEl.className = 'crystal';
      Object.assign(crystalEl.style, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        background: 'linear-gradient(45deg, #7fffff, #00ffff)',
        opacity: '0.8',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 0 8px 1px rgba(0,255,255,0.5)',
      });
      crystalContainer.appendChild(crystalEl);

      const size = gsap.utils.random(iconSize * 0.1, iconSize * 0.2);
      const radius = iconSize * 0.7;
      const angle = gsap.utils.random(0, 360);
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
      const z = gsap.utils.random(-30, -10);

      gsap.set(crystalEl, { width: size, height: size, x, y, z, xPercent: -50, yPercent: -50 });

      gsap.to(crystalEl, {
        duration: gsap.utils.random(15, 25),
        rotationX: 360,
        rotationY: 360,
        repeat: -1,
        ease: 'none',
      });

      newCrystals.push({
        el: crystalEl,
        x,
        y,
        z,
        quickSetX: gsap.quickSetter(crystalEl, 'x', 'px') as Setter,
        quickSetY: gsap.quickSetter(crystalEl, 'y', 'px') as Setter,
      });
    }
    crystalsRef.current = newCrystals;

    const floatingAnim = gsap.to(logoCore, {
      duration: 5,
      y: '-=10',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    let mouseX = 0,
      mouseY = 0,
      logoRotateX = 0,
      logoRotateY = 0;
    const repelStrength = 25,
      crystalLag = 0.1;

    const onMouseMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX = (e.clientX - centerX) / (rect.width / 2);
      mouseY = (e.clientY - centerY) / (rect.height / 2);
    };
    const onMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    const ticker = () => {
      logoRotateY += (mouseX * repelStrength - logoRotateY) * crystalLag;
      logoRotateX += (-mouseY * repelStrength - logoRotateX) * crystalLag;
      logoCore.style.transform = `rotateX(${logoRotateX}deg) rotateY(${logoRotateY}deg)`;

      crystalsRef.current.forEach(crystal => {
        const targetX = crystal.x - logoRotateY * 0.5;
        const targetY = crystal.y + logoRotateX * 0.5;
        crystal.quickSetX(gsap.utils.interpolate(crystal.el._gsap.x, targetX, crystalLag));
        crystal.quickSetY(gsap.utils.interpolate(crystal.el._gsap.y, targetY, crystalLag));
      });
    };

    gsap.ticker.add(ticker);
    scene.addEventListener('mousemove', onMouseMove);
    scene.addEventListener('mouseleave', onMouseLeave);

    return () => {
      gsap.ticker.remove(ticker);
      scene.removeEventListener('mousemove', onMouseMove);
      scene.removeEventListener('mouseleave', onMouseLeave);
      floatingAnim.kill();
      crystalsRef.current.forEach(crystal => gsap.killTweensOf(crystal.el));
    };
  }, []);

  // Loading animation effect
  useEffect(() => {
    if (isLoading) {
      gsap.to(
        crystalsRef.current.map(c => c.el),
        {
          duration: 0.5,
          rotationZ: 'random(-360, 360)',
          scale: 1.5,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
        }
      );
    } else {
      gsap.killTweensOf(
        crystalsRef.current.map(c => c.el),
        'rotationZ,scale'
      );
      gsap.to(
        crystalsRef.current.map(c => c.el),
        {
          duration: 0.5,
          rotationZ: 0,
          scale: 1,
          ease: 'power2.out',
        }
      );
    }
  }, [isLoading]);

  // Splash animation effect
  useEffect(() => {
    if (prevChatHistory && chatHistory.length > prevChatHistory.length) {
      const newMessage = chatHistory[chatHistory.length - 1];
      if (newMessage.role === 'model') {
        gsap.fromTo(
          crystalsRef.current.map(c => c.el),
          { y: 0 },
          {
            y: 'random(-40, -60)',
            scale: 'random(1.5, 2.5)',
            duration: 0.4,
            ease: 'power2.out',
            stagger: 0.05,
            onComplete: () => {
              gsap.to(
                crystalsRef.current.map(c => c.el),
                {
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: 'bounce.out',
                }
              );
            },
          }
        );
      }
    }
  }, [chatHistory, prevChatHistory]);

  const ringShadow =
    '0 0 10px 2px #00ffff, 0 0 20px 5px #00ffff, 0 0 35px 10px rgba(0, 255, 255, 0.5)';
  const metalRingBg =
    'radial-gradient(circle at 50% 100%, #889 0%, #fff 10%, #bbb 50%, #444 100%), conic-gradient(from 180deg at 50% 50%, #777, #f0f0f0, #888, #f8f8f8, #777)';

  return (
    <div
      ref={sceneRef}
      className="!cursor-pointer"
      style={{ perspective: '1000px', width: 80, height: 80 }}
    >
      <div
        ref={logoCoreRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div
          ref={crystalContainerRef}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            top: '-10%',
            left: '-10%',
            borderRadius: '50%',
            boxShadow: ringShadow,
            opacity: 0.8,
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundImage: metalRingBg,
            backgroundBlendMode: 'multiply',
            boxShadow:
              'inset 0 1px 2px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.6), inset 0 0 10px rgba(0,0,0,0.5), 0 2px 5px rgba(0,0,0,0.3)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 3,
          }}
        >
          <div
            className="!w-[85%] !h-[85%] !rounded-full !bg-slate-900 !border !border-cyan-500/20 !flex !items-center !justify-center"
            style={{ boxShadow: 'inset 0 0 15px rgba(0, 255, 255, 0.2)' }}
          >
            <Bot className="!w-8 !h-8 !text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
