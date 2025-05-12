
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export interface CategoryProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  termCount: number;
}

const CategoryCard = ({ category }: { category: CategoryProps }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="h-full card-hover">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Icon name={category.icon} className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">{category.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{category.description}</p>
            <div className="text-xs text-gray-400 flex items-center">
              <Icon name="BookOpen" className="h-3 w-3 mr-1" />
              {category.termCount} терминов
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
