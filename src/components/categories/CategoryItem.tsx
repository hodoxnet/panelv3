import React, { useState } from 'react';
import { Edit, Trash2, Plus, ChevronRight, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import type { Category } from '../../types/category';

interface CategoryItemProps {
  category: Category;
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
  onAddSubcategory: (parentId: string) => void;
  onMakeRoot: (category: Category) => void;
  onMakeSub: (categoryId: string, newParentId: string) => void;
  depth?: number;
}

export default function CategoryItem({
  category,
  categories,
  onEdit,
  onDelete,
  onAddSubcategory,
  onMakeRoot,
  onMakeSub,
  depth = 0
}: CategoryItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showMoveMenu, setShowMoveMenu] = useState(false);

  // Bir kategorinin tüm alt kategori ID'lerini topla
  const getAllChildrenIds = (cat: Category): string[] => {
    const ids = [cat.id];
    cat.children.forEach(child => {
      ids.push(...getAllChildrenIds(child));
    });
    return ids;
  };

  // Kendisi ve alt kategorileri hariç tüm kategorileri bul
  const getAvailableParents = () => {
    const excludeIds = getAllChildrenIds(category);
    const result: Category[] = [];

    const traverse = (cats: Category[]) => {
      cats.forEach(cat => {
        if (!excludeIds.includes(cat.id)) {
          result.push(cat);
        }
        traverse(cat.children);
      });
    };

    traverse(categories);
    return result;
  };

  const availableParents = getAvailableParents();

  return (
    <div className="relative">
      {/* Sol kenar çizgisi */}
      {depth > 0 && (
        <div 
          className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"
          style={{ marginLeft: (depth - 1) * 2 + 'rem' }}
        />
      )}

      <div 
        className={`
          relative flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200
          ${depth > 0 ? 'ml-8' : ''}
        `}
        style={{ marginLeft: depth * 2 + 'rem' }}
      >
        {/* Yatay bağlantı çizgisi */}
        {depth > 0 && (
          <div className="absolute left-0 top-1/2 w-4 h-px bg-gray-200" 
               style={{ marginLeft: '-1rem' }} />
        )}

        {/* Genişletme/Daraltma Butonu */}
        {category.children.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight
              className={`w-4 h-4 text-gray-400 transition-transform ${
                isExpanded ? 'rotate-90' : ''
              }`}
            />
          </button>
        )}

        {/* Kategori Görseli */}
        {category.image && (
          <img
            src={category.image}
            alt={category.title}
            className="w-12 h-12 object-cover rounded"
          />
        )}

        {/* Kategori Bilgileri */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900">{category.title}</h3>
          <p className="text-sm text-gray-500 truncate">{category.description}</p>
        </div>

        {/* İşlem Butonları */}
        <div className="flex items-center gap-2">
          {/* Alt Kategori Ekleme */}
          <button
            onClick={() => onAddSubcategory(category.id)}
            className="p-1 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50"
            title="Alt kategori ekle"
          >
            <Plus className="w-5 h-5" />
          </button>

          {/* Düzenleme */}
          <button
            onClick={() => onEdit(category)}
            className="p-1 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50"
            title="Düzenle"
          >
            <Edit className="w-5 h-5" />
          </button>

          {/* Silme */}
          <button
            onClick={() => onDelete(category)}
            className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50"
            title="Sil"
          >
            <Trash2 className="w-5 h-5" />
          </button>

          {/* Ana Kategori Yapma */}
          {depth > 0 && (
            <button
              onClick={() => onMakeRoot(category)}
              className="p-1 text-gray-400 hover:text-green-500 rounded-lg hover:bg-green-50"
              title="Ana kategori yap"
            >
              <ArrowUpCircle className="w-5 h-5" />
            </button>
          )}

          {/* Alt Kategori Yapma */}
          {availableParents.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setShowMoveMenu(!showMoveMenu)}
                className="p-1 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50"
                title="Alt kategori yap"
              >
                <ArrowDownCircle className="w-5 h-5" />
              </button>
              
              {showMoveMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1">
                  {availableParents.map(parent => (
                    <button
                      key={parent.id}
                      onClick={() => {
                        onMakeSub(category.id, parent.id);
                        setShowMoveMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {parent.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Alt Kategoriler */}
      {category.children.length > 0 && isExpanded && (
        <div className="mt-2 space-y-2">
          {category.children.map(child => (
            <CategoryItem
              key={child.id}
              category={child}
              categories={categories}
              onEdit={onEdit}
              onDelete={onDelete}
              onAddSubcategory={onAddSubcategory}
              onMakeRoot={onMakeRoot}
              onMakeSub={onMakeSub}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}