import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Grid,
  InputLabel,
  FormControl,
  Switch,
} from '@mui/material';

const categories = ['All', 'Appetizers', 'Mains', 'Desserts'];

const menuData = [
  // ... previous menu items ...
  {
    id: 1,
    category: 'Appetizers',
    name: 'Shrimp Cocktail',
    arabicName: 'كوكتيل الروبيان',
    description: 'Chilled jumbo shrimps served with cocktail sauce.',
    arabicDescription: 'جمبري ضخم مبرد يقدم مع صوص الكوكتيل.',
    price: 10.99,
    nutrition: {
      calories: 120,
      fat: 5,
      carbohydrates: 10,
      protein: 10,
    },
  },
  {
    id: 2,
    category: 'Appetizers',
    name: 'Calamari Fritti',
    arabicName: 'كالاماري مقلي',
    description: 'Lightly fried squid rings served with tartare sauce.',
    arabicDescription: 'حلقات الحبار المقلية خفيفة مع صلصة التارتار.',
    price: 12.99,
    nutrition: {
      calories: 200,
      fat: 8,
      carbohydrates: 15,
      protein: 15,
    },
  },
  {
    id: 3,
    category: 'Appetizers',
    name: 'Fried Fish Fillet',
    arabicName: 'فيليه السمك المقلي',
    description: 'Crispy fried fish fillet served with tartar sauce.',
    arabicDescription: 'فيليه السمك المقلي المقرمش يقدم مع صلصة التارتار.',
    price: 13.99,
    nutrition: {
      calories: 180,
      fat: 10,
      carbohydrates: 8,
      protein: 14,
    },
  },
  {
    id: 4,
    category: 'Appetizers',
    name: 'Seafood Soup',
    arabicName: 'شوربة البحر',
    description: 'Delicious soup made with various types of seafood.',
    arabicDescription: 'شوربة لذيذة مصنوعة من مختلف أنواع المأكولات البحرية.',
    price: 9.99,
    nutrition: {
      calories: 150,
      fat: 5,
      carbohydrates: 12,
      protein: 10,
    },
  },
  {
    id: 5,
    category: 'Appetizers',
    name: 'Crab Salad',
    arabicName: 'سلطة الكراب',
    description: 'Fresh crab meat mixed with vegetables and a special dressing.',
    arabicDescription: 'لحم الكراب الطازج ممزوج بالخضروات والتوابل الخاصة.',
    price: 14.99,
    nutrition: {
      calories: 120,
      fat: 2,
      carbohydrates: 6,
      protein: 10,
    },
  },
  {
    id: 6,
    category: 'Appetizers',
    name: 'Oysters',
    arabicName: 'المحار',
    description: 'Fresh oysters served with lemon and mignonette sauce.',
    arabicDescription: 'المحار الطازج يقدم مع الليمون وصلصة المينونيت.',
    price: 18.99,
    nutrition: {
      calories: 70,
      fat: 3,
      carbohydrates: 4,
      protein: 8,
    },
  },
  {
    id: 7,
    category: 'Appetizers',
    name: 'Mussels',
    arabicName: 'البلح البحري',
    description: 'Steamed mussels in garlic butter sauce.',
    arabicDescription: 'البلح البحري المطهو بالبخار في صلصة الثوم والزبدة.',
    price: 15.99,
    nutrition: {
      calories: 100,
      fat: 6,
      carbohydrates: 8,
      protein: 9,
    },
  },
  {
    id: 8,
    category: 'Appetizers',
    name: 'Fish Tacos',
    arabicName: 'تاكو السمك',
    description: 'Fish fillet with fresh coleslaw and special sauce wrapped in a soft tortilla.',
    arabicDescription: 'فيليه السمك مع الكولسلو الطازج والصلصة الخاصة مغلف في تورتيلا ناعمة.',
    price: 13.99,
    nutrition: {
      calories: 220,
      fat: 8,
      carbohydrates: 18,
      protein: 12,
    },
  },
  {
    id: 9,
    category: 'Appetizers',
    name: 'Lobster Bisque',
    arabicName: 'شوربة الكركند',
    description: 'Creamy soup made from lobster stock.',
    arabicDescription: 'شوربة كريمية مصنوعة من مرقة الكركند.',
    price: 16.99,
    nutrition: {
      calories: 200,
      fat: 12,
      carbohydrates: 10,
      protein: 15,
    },
  },
  {
    id: 10,
    category: 'Appetizers',
    name: 'Seafood Platter',
    arabicName: 'صحن البحر',
    description: 'A combination of various seafood including shrimps, calamari, and mussels.',
    arabicDescription: 'مزيج من مختلف المأكولات البحرية بما في ذلك الروبيان والكالاماري والبلح البحري.',
    price: 28.99,
    nutrition: {
      calories: 300,
      fat: 18,
      carbohydrates: 20,
      protein: 25,
    },
  },
  // Mains
  {
    id: 11,
    category: 'Mains',
    name: 'Grilled Sea Bass',
    arabicName: 'سمك الباس المشوي',
    description: 'Grilled sea bass fillet with a lemon butter sauce.',
    arabicDescription: 'فيليه سمك الباس المشوي مع صلصة الليمون والزبدة.',
    price: 20.99,
    nutrition: {
      calories: 250,
      fat: 12,
      carbohydrates: 10,
      protein: 30,
    },
  },
  {
    id: 12,
    category: 'Mains',
    name: 'Seafood Paella',
    arabicName: 'بايلا البحر',
    description: 'Traditional Spanish rice dish with various seafood.',
    arabicDescription: 'طبق أرز إسباني تقليدي مع مختلف أنواع المأكولات البحرية.',
    price: 25.99,
    nutrition: {
      calories: 350,
      fat: 15,
      carbohydrates: 30,
      protein: 20,
    },
  },
  {
    id: 13,
    category: 'Mains',
    name: 'Lobster Thermidor',
    arabicName: 'كركند ثيرميدور',
    description: 'Baked lobster meat with a creamy cheese sauce.',
    arabicDescription: 'لحم الكركند المخبوز مع صلصة الجبن الكريمية.',
    price: 34.99,
    nutrition: {
      calories: 400,
      fat: 25,
      carbohydrates: 15,
      protein: 35,
    },
  },
  {
    id: 14,
    category: 'Mains',
    name: 'Fish and Chips',
    arabicName: 'السمك والبطاطا',
    description: 'Fried fish fillet served with crispy fries.',
    arabicDescription: 'فيليه السمك المقلي يقدم مع البطاطس المقلية اللذيذة.',
    price: 18.99,
    nutrition: {
      calories: 450,
      fat: 22,
      carbohydrates: 35,
      protein: 20,
    },
  },
  {
    id: 15,
    category: 'Mains',
    name: 'Shrimp Pasta',
    arabicName: 'باستا الروبيان',
    description: 'Spaghetti tossed with shrimps and a spicy tomato sauce.',
    arabicDescription: 'السباغيتي مع الروبيان وصلصة الطماطم الحارة.',
    price: 19.99,
    nutrition: {
      calories: 380,
      fat: 15,
      carbohydrates: 40,
      protein: 18,
    },
  },
  {
    id: 16,
    category: 'Mains',
    name: 'Salmon Teriyaki',
    arabicName: 'سلمون ترياكي',
    description: 'Grilled salmon with a sweet teriyaki glaze.',
    arabicDescription: 'السلمون المشوي مع الطلاء الحلو ترياكي.',
    price: 23.99,
    nutrition: {
      calories: 320,
      fat: 15,
      carbohydrates: 10,
      protein: 30,
    },
  },
  {
    id: 17,
    category: 'Mains',
    name: 'Seafood Risotto',
    arabicName: 'ريزوتو البحر',
    description: 'Creamy risotto with a variety of seafood.',
    arabicDescription: 'الريزوتو الكريمي مع مجموعة متنوعة من المأكولات البحرية.',
    price: 24.99,
    nutrition: {
      calories: 400,
      fat: 18,
      carbohydrates: 35,
      protein: 22,
    },
  },
  {
    id: 18,
    category: 'Mains',
    name: 'Crab Cakes',
    arabicName: 'كعك الكراب',
    description: 'Golden brown crab cakes served with a spicy remoulade.',
    arabicDescription: 'كعك الكراب البني الذهبي يقدم مع الريمولادة الحارة.',
    price: 22.99,
    nutrition: {
      calories: 320,
      fat: 20,
      carbohydrates: 12,
      protein: 18,
    },
  },
  {
    id: 19,
    category: 'Mains',
    name: 'Grilled Shrimp Skewers',
    arabicName: 'سيخ الروبيان المشوي',
    description: 'Grilled jumbo shrimps on skewers with a tangy garlic sauce.',
    arabicDescription: 'الروبيان الضخم المشوي على الأسياخ مع صلصة الثوم الطنج.',
    price: 26.99,
    nutrition: {
      calories: 280,
      fat: 14,
      carbohydrates: 8,
      protein: 24,
    },
  },
  {
    id: 20,
    category: 'Mains',
    name: 'Fish Curry',
    arabicName: 'كاري السمك',
    description: 'Spicy fish curry served with steamed rice.',
    arabicDescription: 'كاري السمك الحار يقدم مع الأرز المطهو بالبخار.',
    price: 21.99,
    nutrition: {
      calories: 350,
      fat: 18,
      carbohydrates: 25,
      protein: 15,
    },
  },
  // Desserts (continued)
  {
    id: 21,
    category: 'Desserts',
    name: 'Baklava',
    arabicName: 'بقلاوة',
    description: 'Sweet pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey.',
    arabicDescription: 'معجنات حلوة مكونة من طبقات الفيلو مليئة بالمكسرات المفرومة ومحلاة بالشراب أو العسل.',
    price: 7.99,
    nutrition: {
      calories: 300,
      fat: 15,
      carbohydrates: 30,
      protein: 5,
    },
  },
  {
    id: 22,
    category: 'Desserts',
    name: 'Umm Ali',
    arabicName: 'أم علي',
    description: 'Traditional Egyptian dessert, made of pastry, milk, and nuts.',
    arabicDescription: 'حلوى مصرية تقليدية، مكونة من العجينة والحليب والمكسرات.',
    price: 8.99,
    nutrition: {
      calories: 350,
      fat: 20,
      carbohydrates: 25,
      protein: 7,
    },
  },
  {
    id: 23,
    category: 'Desserts',
    name: 'Kunafa',
    arabicName: 'كنافة',
    description: 'A traditional Arabic dessert made with thin noodle-like pastry, or alternatively fine semolina dough, soaked in sweet, sugar-based syrup.',
    arabicDescription: 'حلوى عربية تقليدية مصنوعة من العجينة الشبيهة بالمعكرونة الرفيعة، أو بدائل الدقيق الناعمة، منقوعة في شراب حلو مبني على السكر.',
    price: 9.99,
    nutrition: {
      calories: 280,
      fat: 12,
      carbohydrates: 40,
      protein: 4,
    },
  },
  {
    id: 24,
    category: 'Desserts',
    name: 'Chocolate Cake',
    arabicName: 'كيكة الشوكولاتة',
    description: 'Rich, moist chocolate cake with a creamy chocolate frosting.',
    arabicDescription: 'كعكة الشوكولاته الرطبة والغنية مع الجاناش الكريمي.',
    price: 7.99,
    nutrition: {
      calories: 350,
      fat: 20,
      carbohydrates: 40,
      protein: 5,
    },
  },
  {
    id: 25,
    category: 'Desserts',
    name: 'Ice Cream',
    arabicName: 'أيس كريم',
    description: 'Creamy, delicious ice cream. Choose from vanilla, chocolate, or strawberry.',
    arabicDescription: 'الآيس كريم الكريمي واللذيذ. اختر من بين الفانيليا والشوكولاتة أو الفراولة.',
    price: 6.99,
    nutrition: {
      calories: 200,
      fat: 10,
      carbohydrates: 25,
      protein: 4,
    },
  },
  {
    id: 26,
    category: 'Desserts',
    name: 'Cheesecake',
    arabicName: 'تشيز كيك',
    description: 'Creamy cheesecake with a graham cracker crust.',
    arabicDescription: 'تشيز كيك كريمي مع قشرة البسكويت الكراهية.',
    price: 8.99,
    nutrition: {
      calories: 400,
      fat: 25,
      carbohydrates: 35,
      protein: 7,
    },
  },
  {
    id: 27,
    category: 'Desserts',
    name: 'Fruit Salad',
    arabicName: 'سلطة الفواكه',
    description: 'A refreshing mix of fresh fruits.',
    arabicDescription: 'مزيج من الفواكه الطازجة المنعشة.',
    price: 6.99,
    nutrition: {
      calories: 150,
      fat: 0,
      carbohydrates: 40,
      protein: 2,
    },
  },
  {
    id: 28,
    category: 'Desserts',
    name: 'Tiramisu',
    arabicName: 'تيراميسو',
    description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
    arabicDescription: 'حلوى إيطالية كلاسيكية مصنوعة من طبقات من الأصابع السهلة المنقوعة بالقهوة وكريمة الماسكاربوني.',
    price: 9.99,
    nutrition: {
      calories: 350,
      fat: 20,
      carbohydrates: 30,
      protein: 6,
    },
  },
  {
    id: 29,
    category: 'Desserts',
    name: 'Panna Cotta',
    arabicName: 'بانا كوتا',
    description: 'Italian dessert made with sweetened cream and thickened with gelatin.',
    arabicDescription: 'حلوى إيطالية مصنوعة من الكريمة المحلى ومكثفة بالجيلاتين.',
    price: 7.99,
    nutrition: {
      calories: 250,
      fat: 15,
      carbohydrates: 20,
      protein: 4,
    },
  },
  {
    id: 30,
    category: 'Desserts',
    name: 'Mango Sticky Rice',
    arabicName: 'رز بالمانجو اللزج',
    description: 'Thai dessert made with sticky rice, fresh mango, and coconut milk.',
    arabicDescription: 'حلوى تايلاندية مصنوعة من الأرز اللزج والمانجو الطازجة وحليب جوز الهند.',
    price: 8.99,
    nutrition: {
      calories: 300,
      fat: 10,
      carbohydrates: 50,
      protein: 3,
    },
  },
  // ... rest of the desserts items with nutritional facts ...
];

const StyledMenuItem = ({ item, isArabic }) => (
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <CardContent className="card-content">
          <Typography variant="h5">{isArabic ? item.arabicName : item.name}</Typography>
          <Typography>{isArabic ? item.arabicDescription : item.description}</Typography>
          <Typography>${item.price}</Typography>
          <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
              Nutritional Facts:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calories: {item.nutrition.calories} kcal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fat: {item.nutrition.fat}g
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Carbohydrates: {item.nutrition.carbohydrates}g
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Protein: {item.nutrition.protein}g
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  </Grid>
);

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [isArabic, setIsArabic] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleLanguageToggle = () => {
    setIsArabic(!isArabic);
  };

  const filteredMenu = menuData.filter(
    (item) =>
      (filter === 'All' || item.category === filter) &&
      (isArabic
        ? item.arabicName.toLowerCase().includes(searchQuery.toLowerCase())
        : item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Box className="card-container" m={4}>
      <TextField
        variant="outlined"
        label={isArabic ? 'البحث في القائمة' : 'Search menu'}
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Box my={2}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            {isArabic ? 'التصنيف' : 'Category'}
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={filter}
            onChange={handleFilterChange}
            label={isArabic ? 'التصنيف' : 'Category'}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {isArabic ? category : category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="card-grid-container">
        <Grid container spacing={3}>
          {filteredMenu.map((item) => (
            <StyledMenuItem key={item.id} item={item} isArabic={isArabic} />
          ))}
        </Grid>
      </Box>
      <Box my={2}>
        <Typography variant="body2" color="text.secondary">
          {isArabic ? 'عرض باللغة الإنجليزية' : 'Switch to Arabic'}
        </Typography>
        <Switch checked={isArabic} onChange={handleLanguageToggle} color="primary" />
      </Box>
    </Box>
  );
};

export default MenuPage;
