import './ItemDetail.css'

    const ItemDetail = ({data}) =>{
        return(
           <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.img} alt=""/>
                    <div className="content">
                        <h2>{data.name}</h2>
                    </div>
            </div>
           </div>
        )
    };

    export default ItemDetail;