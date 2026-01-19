import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Выставочные стенды",
      description: "Проектирование и изготовление стендов для выставок любого масштаба",
      icon: "Layers",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/fcd161a7-4017-4678-8fb3-1dfdb4b2a6f0.jpg"
    },
    {
      title: "Наружная реклама",
      description: "Вывески, световые короба, баннеры и рекламные конструкции",
      icon: "Lightbulb",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/d4c4ce6b-3a06-4342-b8dd-a8beace37e70.jpg"
    },
    {
      title: "Информационные стенды",
      description: "Стенды для офисов, школ, медицинских учреждений",
      icon: "Info",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/30e8a29d-2ea7-4ee6-9c5c-869e99f25e13.jpg"
    },
    {
      title: "Вывески и таблички",
      description: "Офисные таблички, адресные вывески, навигационные указатели",
      icon: "Tag",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/30e8a29d-2ea7-4ee6-9c5c-869e99f25e13.jpg"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опыт более 10 лет",
      description: "Профессиональная команда с огромным опытом в рекламной индустрии"
    },
    {
      icon: "Zap",
      title: "Быстрое производство",
      description: "Изготовление заказов в кратчайшие сроки без потери качества"
    },
    {
      icon: "Truck",
      title: "Доставка по России",
      description: "Бесплатная доставка выставочных конструкций по всей стране"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Используем только проверенные материалы и комплектующие"
    }
  ];

  const portfolio = [
    {
      title: "Стенд для выставки EXPO",
      category: "Выставочные стенды",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/fcd161a7-4017-4678-8fb3-1dfdb4b2a6f0.jpg"
    },
    {
      title: "Световая вывеска ресторана",
      category: "Наружная реклама",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/d4c4ce6b-3a06-4342-b8dd-a8beace37e70.jpg"
    },
    {
      title: "Информационные стенды для офиса",
      category: "Информационные стенды",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/30e8a29d-2ea7-4ee6-9c5c-869e99f25e13.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Store" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">СтендыВсем</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">Портфолио</a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-secondary">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">8 (800) 100-95-94</span>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/fcd161a7-4017-4678-8fb3-1dfdb4b2a6f0.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              🚀 Бесплатная доставка по России
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Производство выставочных стендов и наружной рекламы
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">
              Разработка, производство и монтаж рекламных конструкций любой сложности. 
              Индивидуальный подход к каждому проекту.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-6 text-lg">
                <Icon name="FolderOpen" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл производства рекламной продукции — от разработки дизайна до монтажа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button variant="link" className="mt-4 px-0 text-primary font-semibold">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реализованные проекты для ведущих компаний России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="text-sm bg-primary px-3 py-1 rounded-full inline-block mb-2">{item.category}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Показать все работы
              <Icon name="Grid" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Надежный партнер в сфере рекламного производства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={advantage.icon as any} size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-white/70 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Оставьте заявку</h2>
              <p className="text-lg text-muted-foreground">
                Свяжемся с вами в течение 15 минут и ответим на все вопросы
              </p>
            </div>

            <Card className="p-8 lg:p-12 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">Email</label>
                  <Input type="email" placeholder="your@email.ru" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={5} className="resize-none" />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 h-14 text-lg font-semibold">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Store" size={28} className="text-primary" />
                <span className="text-xl font-bold">СтендыВсем</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Профессиональное производство выставочных стендов и наружной рекламы с доставкой по всей России
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Выставочные стенды</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Наружная реклама</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Информационные стенды</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вывески и таблички</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span>8 (800) 100-95-94</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span>info@stendivsem.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2024 СтендыВсем. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
