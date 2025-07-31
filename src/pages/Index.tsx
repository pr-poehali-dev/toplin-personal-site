import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black tracking-tight">
              TOPLIN
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-black hover:text-gray-600 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                Главная
              </a>
              <a href="#about" className="text-black hover:text-gray-600 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                О бренде
              </a>
              <a href="#contact" className="text-black hover:text-gray-600 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-[fadeIn_1s_ease-out]">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-light text-black leading-tight">
                TOPLIN
              </h1>
              <div className="w-20 h-1 bg-black"></div>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-lg">
                Минималистичная одежда для современного человека. 
                Чистые линии, качественные материалы, безупречный крой.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm font-medium">
                Смотреть коллекцию
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-sm font-medium">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-sm relative overflow-hidden">
              <img 
                src="/img/dc438803-ebe6-41d8-92fa-f01abdafb386.jpg" 
                alt="TOPLIN Collection 2024" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-xs text-white font-mono bg-black/50 px-2 py-1 rounded">
                COLLECTION 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-light text-black">
                  О бренде
                </h2>
                <div className="w-16 h-0.5 bg-black"></div>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  TOPLIN — это философия минимализма в одежде. 
                  Мы создаем вещи, которые говорят сами за себя через качество, 
                  а не через избыток деталей.
                </p>
                <p>
                  Каждая деталь продумана до мелочей. Мы используем только 
                  натуральные материалы премиум-класса и работаем с лучшими 
                  мастерами своего дела.
                </p>
                <p>
                  Наша цель — создать капсульный гардероб, где каждая вещь 
                  идеально сочетается с другими, позволяя вам всегда выглядеть 
                  безупречно.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-white rounded-sm shadow-sm overflow-hidden">
                  <img 
                    src="/img/1a167537-0f91-4975-b61d-8e82a56530a8.jpg" 
                    alt="TOPLIN Fashion Model" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-sm"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-gray-200 rounded-sm"></div>
                <div className="aspect-[3/4] bg-white rounded-sm shadow-sm overflow-hidden">
                  <img 
                    src="/img/dc438803-ebe6-41d8-92fa-f01abdafb386.jpg" 
                    alt="TOPLIN Collection" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              Наши принципы
            </h2>
            <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center">
                <Icon name="Scissors" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-black">Качество</h3>
              <p className="text-gray-600 leading-relaxed">
                Используем только премиальные материалы и проверенные временем техники пошива
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center">
                <Icon name="Minus" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-black">Минимализм</h3>
              <p className="text-gray-600 leading-relaxed">
                Чистые линии и лаконичный дизайн — основа нашей эстетики
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-black">Вне времени</h3>
              <p className="text-gray-600 leading-relaxed">
                Создаем вещи, которые не подвластны моде и будут актуальны годами
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-light">
                  Контакты
                </h2>
                <div className="w-16 h-0.5 bg-white"></div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={20} className="text-gray-400" />
                  <span className="text-gray-300">hello@toplin.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={20} className="text-gray-400" />
                  <span className="text-gray-300">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={20} className="text-gray-400" />
                  <span className="text-gray-300">Москва, ул. Тверская, 12</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400">Следите за нами:</p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                    <Icon name="Instagram" size={16} />
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                    <Icon name="Twitter" size={16} />
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                    <Icon name="Facebook" size={16} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Написать нам</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                  />
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-sm font-medium">
                  Отправить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-2xl font-bold tracking-tight">
              TOPLIN
            </div>
            <div className="text-sm text-gray-500">
              © 2024 TOPLIN. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;