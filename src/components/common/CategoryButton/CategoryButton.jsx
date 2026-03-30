import './CategoryButton.css'

function CategoryButton({icon,foodName}) {
    return(
        <div className='btnContainer'>
            <button className='categoryBtn'>{icon} {foodName}</button>
        </div>
    );
}

export default CategoryButton;