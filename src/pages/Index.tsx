import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами по номеру ${formData.phone}`);
    setFormData({ name: '', phone: '', comment: '' });
    setIsSubmitting(false);
  };

  const portfolioItems = [
    {
      title: "Современная гостиная",
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/d98a4c6d-d45c-4741-81ec-f9d01c956d37.jpg",
      description: "Стильный интерьер с использованием натуральных материалов"
    },
    {
      title: "Роскошная кухня",
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/d5068971-4c45-416e-8bab-ca79c394c2f0.jpg",
      description: "Элегантный дизайн с премиальным оборудованием"
    },
    {
      title: "Современная ванная",
      image: "https://cdn.poehali.dev/projects/18b5b297-1a27-462b-9e7b-9286d403bdca/files/f58a17bf-2804-4faa-b335-8a6d6cfa5668.jpg",
      description: "Минималистичный стиль с качественной отделкой"
    }
  ];

  const services = [
    {
      icon: "Wrench",
      title: "Косметический ремонт",
      description: "Быстрое обновление интерьера без глобальных изменений"
    },
    {
      icon: "Hammer",
      title: "Капитальный ремонт",
      description: "Полная трансформация пространства под ваши потребности"
    },
    {
      icon: "Paintbrush",
      title: "Дизайнерский ремонт",
      description: "Уникальный интерьер по индивидуальному проекту"
    },
    {
      icon: "Home",
      title: "Ремонт под ключ",
      description: "Комплексное решение от проекта до финальной уборки"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold font-sans">Про<span className="text-primary">Ремонт65</span></h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">
                Цены
              </button>
              <Button onClick={() => scrollToSection('contact')}>Заказать звонок</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold font-sans mb-6 text-foreground">
              Ремонт квартир<br/>
              <span className="text-primary">под ключ</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
              Превратим вашу квартиру в дом мечты с гарантией качества и в срок
            </p>
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Профессиональный подход к каждому проекту</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-sans mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Наши лучшие работы</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold font-sans mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Цены на ремонт</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Прозрачное ценообразование без скрытых платежей</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Icon name="Wrench" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-sans mb-2">Косметический</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 3000₽</div>
                  <p className="text-muted-foreground">за м²</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Поклейка обоев</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Покраска стен</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Замена напольного покрытия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Электрика базовая</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                Популярный
              </div>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Icon name="Hammer" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-sans mb-2">Капитальный</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 6000₽</div>
                  <p className="text-muted-foreground">за м²</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Демонтаж старых покрытий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Выравнивание стен и потолков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Новая проводка и сантехника</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Укладка плитки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Все отделочные работы</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-sans mb-2">Дизайнерский</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 10000₽</div>
                  <p className="text-muted-foreground">за м²</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Индивидуальный дизайн-проект</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Премиум материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Эксклюзивная мебель</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Декоративные элементы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>Авторский надзор</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Оставьте заявку</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Наш менеджер свяжется с вами в течение 15 минут
            </p>
            <Card className="border-2">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Номер телефона</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Комментарий (необязательно)</label>
                    <Textarea
                      placeholder="Опишите ваш проект..."
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 pt-8 border-t border-border">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 123-45-67
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <h3 className="text-xl font-bold font-sans">Про<span className="text-primary">Ремонт65</span></h3>
              </div>
              <p className="text-background/80">Профессиональный ремонт квартир с гарантией качества</p>
            </div>
            <div>
              <h4 className="font-bold font-sans mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@remontpro.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold font-sans mb-4">График работы</h4>
              <p className="text-background/80">Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>© 2024 ПроРемонт65. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;