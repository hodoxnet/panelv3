import { Category } from '../types/category';

// Kategoriyi ve tüm alt kategorilerini sil
export const removeCategory = (categories: Category[], id: string): Category[] => {
  return categories.reduce((acc: Category[], category) => {
    if (category.id === id) return acc;
    return [
      ...acc,
      {
        ...category,
        children: removeCategory(category.children, id)
      }
    ];
  }, []);
};

// Yeni kategori ekle (herhangi bir seviyeye)
export const addCategory = (categories: Category[], newCategory: Category, parentId?: string): Category[] => {
  if (!parentId) {
    return [...categories, newCategory];
  }

  return categories.map(category => {
    if (category.id === parentId) {
      return {
        ...category,
        children: [...category.children, newCategory]
      };
    }
    return {
      ...category,
      children: addCategory(category.children, newCategory, parentId)
    };
  });
};

// Kategoriyi ana kategori yap
export const makeRootCategory = (categories: Category[], categoryId: string): Category[] => {
  let categoryToMove: Category | null = null;
  
  const findAndRemove = (cats: Category[]): Category[] => {
    return cats.reduce((acc: Category[], cat) => {
      if (cat.id === categoryId) {
        categoryToMove = { ...cat, children: [] };
        return acc;
      }
      return [
        ...acc,
        {
          ...cat,
          children: findAndRemove(cat.children)
        }
      ];
    }, []);
  };

  const newCategories = findAndRemove(categories);
  
  if (categoryToMove) {
    return [...newCategories, categoryToMove];
  }
  
  return categories;
};

// Kategoriyi başka bir kategorinin altına taşı
export const makeSubCategory = (categories: Category[], categoryId: string, newParentId: string): Category[] => {
  let categoryToMove: Category | null = null;

  // Önce kategoriyi bul ve çıkar
  const findAndRemove = (cats: Category[]): Category[] => {
    return cats.reduce((acc: Category[], cat) => {
      if (cat.id === categoryId) {
        categoryToMove = cat;
        return acc;
      }
      return [
        ...acc,
        {
          ...cat,
          children: findAndRemove(cat.children)
        }
      ];
    }, []);
  };

  const remainingCategories = findAndRemove(categories);

  if (!categoryToMove) return categories;

  // Şimdi yeni parent'a ekle
  const addToParent = (cats: Category[]): Category[] => {
    return cats.map(cat => {
      if (cat.id === newParentId) {
        return {
          ...cat,
          children: [...cat.children, categoryToMove!]
        };
      }
      return {
        ...cat,
        children: addToParent(cat.children)
      };
    });
  };

  return addToParent(remainingCategories);
};