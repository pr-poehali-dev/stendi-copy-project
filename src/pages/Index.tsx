import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      title: "Стенды для школы",
      description: "Классные уголки, кабинеты по предметам, патриотическое воспитание",
      icon: "GraduationCap",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/ea210587-a711-4d83-8f46-c1358d0153e7.jpg",
      subcategories: ["Классные уголки", "Кабинеты", "Библиотека", "Столовая"]
    },
    {
      title: "Стенды для детского сада",
      description: "Оформление групп, музыкальных залов, уголки здоровья",
      icon: "Baby",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/956b2dca-f155-4669-b95f-d1b66cd5b89b.jpg",
      subcategories: ["Оформление групп", "Музыкальный зал", "Медкабинет"]
    },
    {
      title: "Охрана труда",
      description: "Пожарная безопасность, электробезопасность, гражданская оборона",
      icon: "Shield",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/5119a303-aa3c-464a-9253-8942312dbccc.jpg",
      subcategories: ["Пожарная безопасность", "Электробезопасность", "Первая помощь"]
    },
    {
      title: "Стенды информационные",
      description: "Перекидные системы, пробковые доски, мобильные стенды",
      icon: "Info",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/30e8a29d-2ea7-4ee6-9c5c-869e99f25e13.jpg",
      subcategories: ["Перекидные системы", "Пробковые доски", "Напольные"]
    },
    {
      title: "Стенды для улицы",
      description: "Настенные и напольные конструкции, навигация, парковые стенды",
      icon: "Map",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/d4c4ce6b-3a06-4342-b8dd-a8beace37e70.jpg",
      subcategories: ["Настенные", "Напольные", "Навигация"]
    },
    {
      title: "Вывески и таблички",
      description: "Офисные таблички, адресные вывески, шрифт Брайля",
      icon: "Tag",
      image: "https://cdn.poehali.dev/projects/41dc2fb1-dcfc-4448-8a2d-602f3dd3fb22/files/fcd161a7-4017-4678-8fb3-1dfdb4b2a6f0.jpg",
      subcategories: ["Офисные", "Адресные", "С шрифтом Брайля"]
    }
  ];

  const advantages = [
    {
      icon: "Truck",
      title: "Бесплатная доставка",
      description: "По всей территории России"
    },
    {
      icon: "Factory",
      title: "Производитель",
      description: "Прямые цены без наценок"
    },
    {
      icon: "Palette",
      title: "Дизайн под заказ",
      description: "Индивидуальное оформление"
    },
    {
      icon: "FileText",
      title: "Гос. закупки",
      description: "Работаем по 44-ФЗ и 223-ФЗ"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-sm font-semibold">
            <Icon name="Truck" size={18} />
            <span>Бесплатная доставка по России!</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Store" size={28} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">СтендыВсем</div>
                <div className="text-xs text-gray-500">Производитель стендов</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Как купить?</a>
              <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Прайс-лист</a>
              <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Гос. закупки</a>
              <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Оплата</a>
              <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Доставка</a>
              <a href="#" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>

            {/* Contact & Cart */}
            <div className="flex items-center space-x-4">
              <div className="hidden xl:block">
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">8 (800) 100-95-94</div>
                  <div className="text-xs text-gray-500">info@stendivsem.ru</div>
                </div>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Заказать звонок
              </Button>
              <Button size="sm" variant="outline" className="hidden md:flex items-center space-x-1">
                <Icon name="ShoppingCart" size={18} />
                <span>0 ₽</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-white px-4 py-1 text-sm">
              Интернет-магазин производителя
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Информационные стенды и вывески с доставкой по России
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Производство стендов для школ, детских садов, офисов и предприятий. 
              Изготовление под заказ с индивидуальным дизайном.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать по e-mail
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Каталог продукции</h2>
            <p className="text-gray-600">Выберите категорию товаров</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon name={category.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.map((sub, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="link" className="px-0 text-primary font-semibold group-hover:gap-2 transition-all">
                    Смотреть все
                    <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Почему выбирают нас</h2>
            <p className="text-gray-600">Преимущества работы с производителем</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Нужна консультация?</h2>
            <p className="text-lg text-white/90 mb-8">
              Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Ваше имя" 
                className="bg-white text-gray-900 h-12"
              />
              <Input 
                placeholder="+7 (___) ___-__-__" 
                className="bg-white text-gray-900 h-12"
              />
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8">
                Отправить
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="Palette" size={20} className="mr-2 text-primary" />
                Заказать дизайн
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Создадим индивидуальный дизайн стенда под ваши требования. 
                Бесплатная визуализация при заказе.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="FileCheck" size={20} className="mr-2 text-primary" />
                Документы для гос. закупок
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Предоставляем полный пакет документов для участия в тендерах 
                по 44-ФЗ и 223-ФЗ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="Headphones" size={20} className="mr-2 text-primary" />
                Поддержка 24/7
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Консультируем по выбору, помогаем с оформлением заказа, 
                отвечаем на любые вопросы.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Store" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">СтендыВсем</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Производитель информационных стендов и вывесок с бесплатной доставкой по России
              </p>
            </div>

            <div>
              <h4 className="font-bold text-base mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Стенды для школы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Стенды для детского сада</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Охрана труда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Информационные стенды</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Как купить?</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гос. закупки</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2 text-gray-400">
                  <Icon name="Phone" size={16} className="text-primary mt-0.5" />
                  <div>
                    <div className="text-white font-semibold">8 (800) 100-95-94</div>
                    <div className="text-xs">Бесплатный звонок</div>
                  </div>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>info@stendivsem.ru</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            <p>&copy; 2024 СтендыВсем - Производство информационных стендов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
