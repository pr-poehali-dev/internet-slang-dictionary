
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <Icon name="BookText" className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-semibold text-gray-800">ПрофСленг</h1>
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 md:items-center">
          <div className="relative w-full md:w-64 lg:w-80">
            <Input
              type="text"
              placeholder="Искать термины..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" 
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Главная
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Категории
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-200">
              О проекте
            </Link>
          </nav>
          
          <Button className="hidden md:flex">
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Добавить термин
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
