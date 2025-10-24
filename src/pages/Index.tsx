import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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
              <h1 className="text-2xl font-bold font-sans">Про<span className="text-primary">Ремону65</span></h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Портфолио
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

      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">Готовы начать?</h2>
            <p className="text-xl mb-8 opacity-90">
              Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <h3 className="text-xl font-bold font-sans">Про<span className="text-primary">Ремону65</span></h3>
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
            <p>© 2024 ПроРемону65. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;