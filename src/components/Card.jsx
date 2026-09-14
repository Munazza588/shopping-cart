import './Card.css'
function Card({title,url,price}) {
    return (
        <div className="card-div">
            <img src={url}  />
            <p className='title-card'>{title}</p>
            <p className='price'>Price: ${price}</p>
        </div>
    )
}

export default Card;