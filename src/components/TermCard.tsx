
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export interface TermProps {
  id: string;
  term: string;
  definition: string;
  categoryId: string;
  categoryName: string;
  example?: string;
  relatedTerms?: string[];
}

const TermCard = ({ term }: { term: TermProps }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="card-hover overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-medium">{term.term}</h3>
          <Badge variant="secondary" className="text-xs">
            {term.categoryName}
          </Badge>
        </div>
        
        <p className="text-gray-700 mb-4">{term.definition}</p>
        
        {term.example && (
          <div className={`mb-4 ${expanded ? 'block' : 'hidden'}`}>
            <div className="bg-gray-50 p-3 rounded-md border-l-4 border-primary/50 italic text-gray-600">
              <span className="font-medium text-primary">Пример: </span>
              {term.example}
            </div>
          </div>
        )}
        
        {term.relatedTerms && term.relatedTerms.length > 0 && (
          <div className={`mb-4 ${expanded ? 'block' : 'hidden'}`}>
            <p className="text-sm font-medium mb-2">Связанные термины:</p>
            <div className="flex flex-wrap gap-2">
              {term.relatedTerms.map((relatedTerm, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {relatedTerm}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setExpanded(!expanded)}
            className="text-xs px-2"
          >
            {expanded ? (
              <>
                <Icon name="ChevronUp" className="h-3 w-3 mr-1" />
                Свернуть
              </>
            ) : (
              <>
                <Icon name="ChevronDown" className="h-3 w-3 mr-1" />
                Подробнее
              </>
            )}
          </Button>
          
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Copy" className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Bookmark" className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TermCard;
