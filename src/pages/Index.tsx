import { useState } from "react";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import TermCard from "@/components/TermCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { categoriesData, termsData } from "@/data/mockData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = termsData.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Словарь профессионального сленга
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Расшифровываем специфические термины из разных профессиональных
              сфер
            </p>

            <div
              className="max-w-2xl mx-auto relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Input
                type="text"
                placeholder="Найти термин или определение..."
                className="h-14 pl-12 pr-4 text-lg rounded-lg text-gray-800 shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 container mx-auto px-4">
          <Tabs defaultValue="categories" className="w-full">
            <div className="flex justify-between items-center mb-8">
              <TabsList>
                <TabsTrigger value="categories" className="text-base px-6">
                  <Icon name="Grid" className="mr-2 h-4 w-4" />
                  Категории
                </TabsTrigger>
                <TabsTrigger value="popular" className="text-base px-6">
                  <Icon name="TrendingUp" className="mr-2 h-4 w-4" />
                  Популярные термины
                </TabsTrigger>
              </TabsList>

              <Button className="hidden md:flex">
                <Icon name="PlusCircle" className="mr-2 h-4 w-4" />
                Предложить новый термин
              </Button>
            </div>

            <TabsContent value="categories" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoriesData.map((category, index) => (
                  <div
                    key={category.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CategoryCard category={category} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTerms.map((term, index) => (
                  <div
                    key={term.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <TermCard term={term} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 py-14">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Знаете профессиональный сленг?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Делитесь своими знаниями и помогайте другим разобраться в
              терминологии вашей профессиональной сферы.
            </p>
            <Button size="lg" className="text-base h-12 px-8">
              <Icon name="PlusCircle" className="mr-2 h-5 w-5" />
              Добавить новый термин
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="BookText" className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-semibold text-white">
                ПрофСленг
              </span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                О проекте
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Контакты
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Правила
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-6 text-sm text-center md:text-left">
            <p>© 2025 ПрофСленг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
