import "./Result.scss"

function Result({ data }) {
    return (
        <div className="my-task">
            <h2 className="result__h2">Sizning hamkorligingiz natijalari</h2>
            <div className="row">
                {data.map(item => {
                    return (
                        <div className="col-md-4 col-sm-6" key={item._id}>
                            <img className="w-100" src={item.imageUrl} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Result
