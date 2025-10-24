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

  const detailedServices = [
    {
      icon: "Paintbrush",
      title: "Покраска стен и потолков",
      description: "Качественная окраска любой сложности с подбором цвета"
    },
    {
      icon: "Square",
      title: "Поклейка обоев",
      description: "Профессиональная поклейка всех видов обоев"
    },
    {
      icon: "Grid3x3",
      title: "Укладка плитки",
      description: "Плитка в ванной, кухне, коридоре с гарантией качества"
    },
    {
      icon: "Layers",
      title: "Укладка ламината и паркета",
      description: "Монтаж напольных покрытий с идеальной геометрией"
    },
    {
      icon: "Zap",
      title: "Электромонтажные работы",
      description: "Замена проводки, установка розеток и выключателей"
    },
    {
      icon: "Droplet",
      title: "Сантехнические работы",
      description: "Замена труб, установка сантехники, подключение оборудования"
    },
    {
      icon: "DoorOpen",
      title: "Установка дверей",
      description: "Монтаж межкомнатных и входных дверей под ключ"
    },
    {
      icon: "SquareStack",
      title: "Монтаж гипсокартона",
      description: "Выравнивание стен, потолки, ниши и перегородки"
    },
    {
      icon: "Ruler",
      title: "Штукатурка и шпаклевка",
      description: "Идеальное выравнивание поверхностей под покраску"
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
    },
    {
      icon: "Calculator",
      title: "Полный финансовый отчет",
      description: "Прозрачная смета и детализация всех расходов на каждом этапе"
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

              <Button onClick={() => scrollToSection('contact')}>Заказать звонок</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold font-sans mb-6 text-foreground">
              Ремонт квартир и коттеджей<br/>
              <span className="text-primary">под ключ</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
              Превратим вашу квартиру или коттедж в дом мечты с гарантией качества и в срок
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

      <section id="detailed-services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4">Полный перечень услуг</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выполним работы любой сложности</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-sans mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
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
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                    <a href="tel:+79244834514">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7(924)4834514
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                    <a href="https://wa.me/79244834514" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <h3 className="text-xl font-bold font-sans">Про<span className="text-primary">Ремонт65</span></h3>
              </div>
              <p className="text-white/80">Профессиональный ремонт квартир и коттеджей с гарантией качества</p>
            </div>
            <div>
              <h4 className="font-bold font-sans mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7(924)4834514
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  yuri.lopatkin@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold font-sans mb-4">График работы</h4>
              <p className="text-white/80">Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 ПроРемонт65. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;