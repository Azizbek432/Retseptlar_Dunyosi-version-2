import CategoryButton from "../../common/CategoryButton/CategoryButton";
import './Category.css'

function Category() {
  const categories = [
    { id: 1, icon: "🍲" , name:  "Milliy taomlar" },
    { id: 2, icon: "🍰", name: "Shirinliklar" },
    { id: 3,  icon: "🍕" , name:  "Tezkor taomlar" },
    { id: 4,  icon: "🥗" , name: "Parhez taomlar"},
    { id: 5, name: "Bayramona", icon: "🎂" },
    { id: 6, name: "Salatlar", icon: "🥬" },
  ];

  return (
    <div className="category-container">
      <div className="container">
      <h1 className="category-title">KATEGORIYALAR</h1>
      <div className="ciricle-category"></div>
      
      <div className="btnCategory">
        {categories.map((cat) => (
          <CategoryButton 
            key={cat.id} 
            icon={cat.icon} 
            foodName={cat.name} 
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Category;